import connectDB from '@/lib/db';
import { StudyMember } from '@/lib/schemas/studyMemberSchema';
import { StudyReview } from '@/lib/schemas/studyReviewSchema';
import { Study } from '@/lib/schemas/studySchema';
import { differenceInDays } from 'date-fns';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  const userId = searchParams.get('userId');
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
        model: 'User',
        select: 'nickname image',
      })
      .lean();

    // 로그인한 사용자를 제외한 멤버 필터링
    const filteredMembers = studyMembers.filter(
      (member) => member.userId._id.toString() !== userId,
    );

    if (reviewStatus) {
      const memberReviewStatus = await Promise.all(
        filteredMembers.map(async (member) => {
          const review = await StudyReview.findOne({
            studyId: studyId,
            evaluateduser: member.userId._id,
            userId: userId,
          }).lean();

          return {
            ...member,
            hasReview: !!review,
          };
        }),
      );
      return Response.json(memberReviewStatus);
    } else {
      return Response.json(filteredMembers);
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

export async function PATCH(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const { today, attended, studyId } = await request.json();

  if (!id) {
    return Response.json({ error: 'id is required' }, { status: 400 });
  }

  try {
    const member = await StudyMember.findById(id);

    if (!member) {
      return Response.json({ error: 'Member not found' }, { status: 404 });
    }

    if (attended === true) {
      if (!member.attendance.includes(today)) {
        member.attendance.push(today);
      }
    } else if (attended === false) {
      member.attendance = member.attendance.filter(
        (date: string) => date !== today,
      );
    }

    const studyData = await Study.findById(studyId);

    const period = Math.abs(
      differenceInDays(studyData.studyStart, studyData.studyEnd),
    );

    member.studyProgress = Math.floor(
      (member.attendance.length / period) * 100,
    );

    await member.save();
    return Response.json(member);
  } catch (error) {
    console.error('Error', error);
    return Response.json({ error: 'Failed' }, { status: 500 });
  }
}
