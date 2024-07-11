import { StudyMember } from '@/lib/schemas/studyMemberSchema';
import { Study } from '@/lib/schemas/studySchema';
import { Types } from 'mongoose';

export async function getUserStudies(userId: string) {
  const currentDate = new Date();

  // const studies = await Study.find({
  //   leaderId: new Types.ObjectId(userId),
  // }).sort({ studyStart: -1 });

  const objectId = new Types.ObjectId(userId);

  // 사용자가 만든 스터디
  const leaderStudies = await Study.find({ leaderId: objectId });

  // 사용자가 참여하고 있는 스터디
  const studyMembers = await StudyMember.find({ userId: objectId }).populate(
    'studyId',
  );
  const myStudies = studyMembers.map((member) => member.studyId);

  // 두 결과를 합치고 중복 제거
  const allStudies = [...leaderStudies, ...myStudies];
  const uniqueStudies = Array.from(
    new Set(allStudies.map((s) => s._id.toString())),
  ).map((id) => allStudies.find((s) => s._id.toString() === id));

  const activeStudies = uniqueStudies.filter(
    (study) => study.studyStart <= currentDate && study.studyEnd >= currentDate,
  );

  const completedStudies = uniqueStudies.filter(
    (study) => study.studyEnd < currentDate,
  );

  const upcomingStudies = uniqueStudies.filter(
    (study) => study.studyStart > currentDate,
  );

  const formatStudy = (study: any) => ({
    ...JSON.parse(JSON.stringify(study)),
    studyStart: study.studyStart.toDateString(),
    studyEnd: study.studyEnd.toDateString(),
  });

  return {
    active: activeStudies.map(formatStudy),
    completed: completedStudies.map(formatStudy),
    upcoming: upcomingStudies.map(formatStudy),
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const studies = await getUserStudies(userId);
    return Response.json(studies);
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
