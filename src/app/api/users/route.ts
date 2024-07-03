import connectDB from '@/lib/db';
import { User } from '@/lib/schemas/userSchema';

export async function GET(req: Request) {
  return Response.json({ message: 'GET / api/users' });
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const user = await User.create(res);
  return Response.json(user);
}
