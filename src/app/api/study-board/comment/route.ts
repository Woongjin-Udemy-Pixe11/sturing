import connectDB from '@/lib/db';
import { BlackboardComment } from '@/lib/schemas/blackboardCommentSchema';
import { TComment } from '@/types/TStudyBoard';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blackboardId = searchParams.get('blackboardId');

  if (!blackboardId) {
    return Response.json(
      { message: 'blackboardId is required' },
      { status: 400 },
    );
  }
  try {
    const commentList = await BlackboardComment.find({ blackboardId }).populate(
      'userId',
      'nickname image',
    );

    return Response.json(commentList);
  } catch (error) {
    return Response.json(
      { message: 'Error fetching comment' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  connectDB();
  const { comment, userId, boardId } = await request.json();
  try {
    const newComment = new BlackboardComment({
      blackboardId: boardId,
      userId,
      comment,
    });
    await newComment
      .save()
      .then((comment: any) => comment.populate('userId', 'nickname image'));

    return Response.json(newComment);
  } catch (error) {
    return Response.json({ message: 'Error post comment' });
  }
}
