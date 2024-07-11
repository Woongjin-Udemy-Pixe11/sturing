import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';
import { Study } from '@/lib/schemas/studySchema';
import { Types } from 'mongoose';

connectDB();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const myStudies = await Study.find({
      leaderId: new Types.ObjectId(userId),
    }).select('_id');
    const myStudyId = myStudies.map((study) => study._id);

    const receivedApplication = await StudyForm.find({
      studyId: { $in: myStudyId },
    })
      .populate({
        path: 'studyId',
        select: 'studyName',
      })
      .populate({
        path: 'userId',
        select: 'nickname image matchingInfo',
        populate: {
          path: 'matchingInfo',
          model: 'matching',
          select: 'level interests',
        },
      })
      .sort({ createdAt: -1 });

    return Response.json(receivedApplication);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
