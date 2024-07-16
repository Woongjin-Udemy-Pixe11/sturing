import connectDB from '@/lib/db';
import { Blackboard } from '@/lib/schemas/blackboardSchema';

export async function GET(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  const noticeId = searchParams.get('noticeId');

  try {
    if (studyId) {
      const noticeList = await Blackboard.find({ studyId: studyId });
      return Response.json(noticeList);
    } else if (noticeId) {
      const notice = await Blackboard.findById(noticeId);

      return Response.json(notice);
    } else {
      return Response.json(
        { message: 'Missing studyId or noticeId' },
        { status: 400 },
      );
    }
  } catch (error) {
    return Response.json({ message: 'Error get notice' });
  }
}

export async function POST(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  const { userId, title, content } = await request.json();

  try {
    const newBlackboard = new Blackboard({
      studyId: studyId,
      writerId: userId,
      type: 'notice',
      title: title,
      content: content,
    });
    await newBlackboard.save();
    const blackboardId = newBlackboard._id;

    return Response.json(blackboardId);
  } catch (error) {
    console.error('Error creating new blackboard:', error);
    return Response.json({ message: 'Blackboard not saved' });
  }
}
