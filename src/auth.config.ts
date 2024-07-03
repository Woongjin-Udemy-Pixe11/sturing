import type { NextAuthConfig } from 'next-auth';
import connectDB from './lib/db';
import { User } from './lib/schemas/userSchema';
import * as jose from 'jose';

export const authConfig = {
  pages: {
    signIn: '/login',
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
      console.log('signIn', user, account);
      if (account?.provider === 'github') {
        const { name, email } = user;
        await connectDB();
        const dbuser = await User.findOne({
          email,
        });
        if (!dbuser) {
          await new User({
            name: user.name,
            email: user.email,
            nickname: '랜덤닉네임',
            image: '/images/ungin_profile.png',
            stringPercent: 0,
            studyCount: 0,
            authProviderId: 'github',
            // role: 'user',
          }).save();
        }
        // const socialUser = await User.findOne({
        //   email,
        //   authProviderId: 'github',
        // });
        // user.role = socialUser?.role || 'user';
        // user.id = socialUser?._id || null;
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
      console.log('jwt', token, user);
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token?.role) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
