import connectDB from '@/lib/db';
import { User } from '@/lib/schemas/userSchema';

export async function GET(req: Request) {
  connectDB();
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    const user = await User.findById({ _id: `${id}` });
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
    return Response.json(user);
  } catch (error) {
    return Response.json({ message: '실패' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const user = await User.create(res);
  return Response.json(user);
}
