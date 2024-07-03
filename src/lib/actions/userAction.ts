import { signIn, signOut } from '@/auth';

export async function GithubLogin() {
  await signIn('github', { callbackUrl: '/' });
}

export async function logout() {
  await signOut();
}
