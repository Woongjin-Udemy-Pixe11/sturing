import connectDB from '@/lib/db';
import { Blackboard } from '@/lib/schemas/blackboardSchema';
import { BlackboardIcon } from '@/lib/schemas/blackboardIconSchema';
import mongoose from 'mongoose';

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
      const notice = await Blackboard.findById(noticeId).populate('icons');

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

export async function PUT(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const noticeId = searchParams.get('noticeId');
  const { title, content } = await request.json();

  try {
    await Blackboard.updateOne(
      { _id: `${noticeId}` },
      {
        title: title,
        content: content,
      },
    );
    return Response.json(noticeId);
  } catch (error) {
    console.error('Error eddit blackboard:', error);
    return Response.json({ message: 'Blackboard not eddited' });
  }
}

export async function DELETE(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const noticeId = searchParams.get('noticeId');
  try {
    await Blackboard.deleteOne({ _id: noticeId });

    return Response.json({ message: 'DELETE' });
  } catch (error) {
    console.error('Error eddit blackboard:', error);
    return Response.json({ message: 'Blackboard not delete' });
  }
}
