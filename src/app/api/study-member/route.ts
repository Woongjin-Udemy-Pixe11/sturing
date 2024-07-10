import connectDB from '@/lib/db';
import { StudyMember } from '@/lib/schemas/studyMemberSchema';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  console.log('Received studyId:', studyId);

  if (!studyId) {
    return Response.json({ error: 'studyId is required' }, { status: 400 });
  }

  try {
    const studyMembers = await StudyMember.find({
      studyId: new mongoose.Types.ObjectId(studyId),
    })
      .populate('userId', 'nickname')
      .lean();

    // console.log('Found study members:', studyMembers);

    return Response.json(studyMembers);
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
