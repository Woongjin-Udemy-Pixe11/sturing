import connectDB from '@/lib/db';
import { User } from '@/lib/schemas/userSchema';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const id = params.id;

  if (!id) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const user = await User.findById({ _id: `${id}` });
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
    return Response.json(user);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
