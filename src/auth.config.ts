import type { NextAuthConfig } from 'next-auth';
import connectDB from './lib/db';
import { User } from './lib/schemas/userSchema';
import * as jose from 'jose';

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnUsers = nextUrl.pathname.startsWith('/');
      if (isOnUsers) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
    signIn: async ({ user, account }: { user: any; account: any }) => {
      // console.log('signIn', user, account);
      if (account?.provider === 'github') {
        const { name, email } = user;
        await connectDB();
        const dbuser = await User.findOne({
          email,
        });
        if (!dbuser) {
          let randNickname =
            '스터링' + String(Math.floor(Math.random() * 100000));
          const newUser = await User.create({
            name: user.name,
            email: user.email,
            nickname: randNickname,
            image: '/images/ungin_profile.png',
            sturingPercent: 0,
            studyCount: 0,
            authProviderId: 'github',
            // role: 'user',
          });
        }
        const socialUser = await User.findOne({
          email,
        });
        user.id = socialUser?._id || null;
        user.nickname = socialUser?.nickname || null;
      }
      // JWT Token Make
      if (user.id) {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const alg = 'HS256';

        const accessToken = await new jose.SignJWT({})
          .setProtectedHeader({ alg })
          .setExpirationTime('72h')
          .setSubject(user.id.toString())
          .sign(secret);

        const refreshToken = await new jose.SignJWT({})
          .setProtectedHeader({ alg })
          .setExpirationTime('30d')
          .setSubject(user.id.toString())
          .sign(secret);

        user.accessToken = accessToken;
        user.refreshToken = refreshToken;
      }
      return true;
    },

    async jwt({ token, user }: { token: any; user: any }) {
      //console.log('jwt', token, user);
      if (user) {
        token.id = user.id;
        token.nickname = user.nickname;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token?.id) {
        session.user.id = token.id;
        session.user.nickname = token.nickname;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
