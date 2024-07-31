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
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    // github OAuth
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  trustHost: true,
});
