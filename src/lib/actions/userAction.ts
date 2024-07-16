'use server';

import { signIn, signOut } from '@/auth';
import { getSession } from '@/utils/getSessions';
import { redirect } from 'next/navigation';
import connectDB from '../db';
import { User } from '../schemas/userSchema';

export async function GithubLogin() {
  await signIn('github');
}

export async function logout() {
  await signOut();
  redirect('/');
}
