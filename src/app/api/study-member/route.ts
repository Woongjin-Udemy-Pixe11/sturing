import connectDB from '@/lib/db';
import { StudyMember } from '@/lib/schemas/studyMemberSchema';
import { StudyReview } from '@/lib/schemas/studyReviewSchema';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  const reviewStatus = searchParams.get('reviewStatus') === 'true';

  console.log('Received studyId:', studyId);

  if (!studyId) {
    return Response.json({ error: 'studyId is required' }, { status: 400 });
  }

  try {
    const studyMembers = await StudyMember.find({
      studyId: new mongoose.Types.ObjectId(studyId),
    })
      .populate({
        path: 'userId',
        select: 'nickname image',
      })
      .lean();

    if (reviewStatus) {
      const memberReviewStatus = await Promise.all(
        studyMembers.map(async (member) => {
          const review = await StudyReview.findOne({
            studyId: studyId,
            evaluateduser: member.userId._id,
          }).lean();

          return {
            ...member,
            hasReview: !!review,
          };
        }),
      );
      return Response.json(memberReviewStatus);
    } else {
      return Response.json(studyMembers);
    }
  } catch (error) {
    console.error('Error fetching study members:', error);
    return Response.json(
      { error: 'Failed to fetch study members' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyMember = await StudyMember.create(res);
  return Response.json(studyMember);
}
