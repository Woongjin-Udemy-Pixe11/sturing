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

    const receivedApplication = await StudyForm.aggregate([
      {
        $match: {
          studyId: { $in: myStudyId },
        },
      },
      {
        $lookup: {
          from: 'studies',
          localField: 'studyId',
          foreignField: '_id',
          as: 'study',
        },
      },
      {
        $unwind: '$study',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $unwind: '$user',
      },
      {
        $lookup: {
          from: 'matchings',
          localField: 'user.matchingInfo',
          foreignField: 'matchingInfo',
          as: 'matchingInfo',
        },
      },
      {
        $unwind: {
          path: '$matchingInfo',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          _id: 1,
          studyId: 1,
          userId: 1,
          studyFormTitle: 1,
          studyFormContent: 1,
          studyFormRead: 1,
          studyFormSure: 1,
          createdAt: 1,
          'study.studyName': 1,
          user: {
            nickname: '$user.nickname',
            image: '$user.image',
            matchingInfo: '$matchingInfo',
          },
          matchingInfo: {
            interests: 1,
            level: 1,
          },
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);
    console.log('🍕', receivedApplication);

    return Response.json(receivedApplication);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
