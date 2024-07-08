import { Study } from '@/lib/schemas/studySchema';
import { Types } from 'mongoose';

export async function getUserStudies(userId: string) {
  const currentDate = new Date();

  const studies = await Study.find({
    leaderId: new Types.ObjectId(userId),
  }).sort({ studyStart: -1 });

  const activeStudies = studies.filter(
    (study) => study.studyStart <= currentDate && study.studyEnd >= currentDate,
  );

  const completedStudies = studies.filter(
    (study) => study.studyEnd < currentDate,
  );

  const upcomingStudies = studies.filter(
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
