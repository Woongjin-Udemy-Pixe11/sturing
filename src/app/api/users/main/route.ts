import connectDB from '@/lib/db';
import { User } from '@/lib/schemas/userSchema';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  await connectDB();

  try {
    const topUsers = await User.aggregate([
      {
        $lookup: {
          from: 'studies',
          localField: '_id',
          foreignField: 'leaderId',
          as: 'leaderStudies',
        },
      },
      {
        $lookup: {
          from: 'studymembers',
          localField: '_id',
          foreignField: 'userId',
          as: 'memberStudies',
        },
      },
      {
        $addFields: {
          studyCount: {
            $size: {
              $setUnion: ['$leaderStudies._id', '$memberStudies.studyId'],
            },
          },
        },
      },
      {
        $sort: {
          sturingPercent: -1,
          studyCount: -1,
        },
      },
      {
        $limit: 8,
      },
      {
        $lookup: {
          from: 'matchings',
          localField: 'matchingInfo',
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
          nickname: 1,
          image: 1,
          sturingPercent: 1,
          studyCount: 1,
          matchingInfo: {
            interests: 1,
            level: 1,
            preferMood: 1,
          },
        },
      },
      {
        $match: {
          matchingInfo: { $ne: null },
        },
      },
    ]);

    return Response.json(topUsers);
  } catch (error) {
    console.error('Error fetching top users:', error);
    return Response.json(
      { error: 'Failed to fetch top users' },
      { status: 500 },
    );
  }
}
