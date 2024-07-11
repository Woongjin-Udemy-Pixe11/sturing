import connectDB from '@/lib/db';
import { Comment } from '@/lib/schemas/commentSchema';

export async function GET(req: Request) {
  connectDB();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    const comments = await Comment.find({ studyId: `${id}` });
    if (!comments) {
      return Response.json({ error: 'Comments not found' }, { status: 404 });
    }
    return Response.json(comments);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const comment = await Comment.create(res);
  return Response.json(comment);
}
