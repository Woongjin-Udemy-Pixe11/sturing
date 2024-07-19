import connectDB from '@/lib/db';
import { Blackboard } from '@/lib/schemas/blackboardSchema';
import { BlackboardIcon } from '@/lib/schemas/blackboardIconSchema';
import { User } from '@/lib/schemas/userSchema';

export async function GET(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  const blackboardId = searchParams.get('blackboardId');
  const boardType = searchParams.get('boardType');

  try {
    if (studyId) {
      const noticeList = await Blackboard.find({
        studyId: studyId,
        type: boardType,
      });

      return Response.json(noticeList);
    } else if (blackboardId) {
      if (boardType == 'notice') {
        const notice = await Blackboard.findById(blackboardId).populate(
          'icons',
        );

        return Response.json(notice);
      } else if (boardType == 'task') {
        const task = await Blackboard.findById(blackboardId).populate('icons');
        return Response.json(task);
      }
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
  const boardType = searchParams.get('boardType');
  const studyId = searchParams.get('studyId');
  const { userId, title, content, img } = await request.json();

  try {
    if (boardType == 'task' && img) {
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
    } else {
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
    }
  } catch (error) {
    console.error('Error creating new blackboard:', error);
    return Response.json({ message: 'Blackboard not saved' });
  }
}

export async function PUT(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const blackboardId = searchParams.get('blackboardId');
  const boardType = searchParams.get('boardType');
  const { title, content, img } = await request.json();

  try {
    switch (boardType) {
      case 'notice':
        await Blackboard.updateOne(
          { _id: `${blackboardId}` },
          {
            title: title,
            content: content,
          },
        );
        return Response.json(blackboardId);

      case 'task':
        await Blackboard.updateOne(
          { _id: `${blackboardId}` },
          {
            title: title,
            content: content,
            image: img,
          },
        );
        return Response.json(blackboardId);
    }
  } catch (error) {
    console.error('Error eddit blackboard:', error);
    return Response.json({ message: 'Blackboard not eddited' });
  }
}

export async function DELETE(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const blackboardId = searchParams.get('blackboardId');
  try {
    await Blackboard.deleteOne({ _id: blackboardId });
    await BlackboardIcon.deleteMany({ blackboardId: blackboardId });

    return Response.json({ message: 'DELETE' });
  } catch (error) {
    console.error('Error eddit blackboard:', error);
    return Response.json({ message: 'Blackboard not delete' });
  }
}

export async function PATCH(request: Request) {
  await connectDB();
  const { noticeId } = await request.json();
  console.log(noticeId);

  const updateView = await Blackboard.updateOne(
    { _id: `${noticeId}` },
    {
      $inc: { views: 1 },
    },
  );
  return new Response(JSON.stringify({ updateView }));
}
