import connectDB from '@/lib/db';

import { BlackboardComment } from '@/lib/schemas/blackboardCommentSchema';

export async function GET(req: Request) {
  connectDB();
  const comments = await BlackboardComment.find({});
  return Response.json(comments);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const newComment = await BlackboardComment.create(res);
  return Response.json(newComment);
}
