import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';
// import bcrypt from 'bcrypt';
import GithubProvider from 'next-auth/providers/github';
import { User } from './lib/schemas/userSchema';
import connectDB from './lib/db';

async function getUser(email: string) {
  connectDB();
  const user = await User.findOne({ email });
  return user;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    // github OAuth
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }: { user: any; account: any }) => {
      console.log('signIn', user, account);
      if (account?.provider === 'github') {
        const { name, email } = user;
        await connectDB();
        const existingUser = await User.findOne({
          email,
          authProividerId: 'github',
        });
        if (!existingUser) {
          await new User({
            name,
            email,
            authProviderId: 'github',
            role: 'user',
          }).save();
        }
        const socialUser = await User.findOne({
          email,
          authProviderId: 'github',
        });
        user.role = socialUser?.role || 'user';
        user.id = socialUser?._id || null;
        return true;
      } else {
        return true;
      }
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
});
