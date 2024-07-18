import connectDB from '@/lib/db';
import { Blackboard } from '@/lib/schemas/blackboardSchema';
import { BlackboardIcon } from '@/lib/schemas/blackboardIconSchema';

export async function POST(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const boardType = searchParams.get('boardType');
  const studyId = searchParams.get('studyId');
  const { userId, title, content, img } = await request.json();

  try {
    if (boardType == 'notice') {
      const newBlackboard = new Blackboard({
        studyId: studyId,
        writerId: userId,
        type: boardType,
        title: title,
        content: content,
      });
      await newBlackboard.save();
      const blackboardId = newBlackboard._id;

      return Response.json(blackboardId);
    } else if (boardType == 'task') {
      console.log('task');
      const newBlackboard = new Blackboard({
        studyId: studyId,
        writerId: userId,
        type: boardType,
        title: title,
        content: content,
        image: img,
      });
      await newBlackboard.save();
      const blackboardId = newBlackboard._id;
      return Response.json(blackboardId);
    }
  } catch (error) {
    console.error('Error creating new blackboard:', error);
    return Response.json({ message: 'Blackboard not saved' });
  }
}
