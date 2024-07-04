import connectDB from '@/lib/db';
import { User } from '@/lib/schemas/userSchema';

export async function GET(req: Request) {
  const users = await User.find({});
  return Response.json(users);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const user = await User.create(res);
  return Response.json(user);
}
