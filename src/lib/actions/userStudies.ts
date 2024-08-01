import { Types } from 'mongoose';
import { StudyMember } from '../schemas/studyMemberSchema';
import { Study } from '../schemas/studySchema';

export async function getUserStudies(userId: string) {
  const currentDate = new Date();

  // const studies = await Study.find({
  //   leaderId: new Types.ObjectId(userId),
  // }).sort({ studyStart: -1 });

  const objectId = new Types.ObjectId(userId);

  // 사용자가 만든 스터디
  const leaderStudies = await Study.find({ leaderId: objectId });

  // 사용자가 참여하고 있는 스터디
  const studyMembers = await StudyMember.find({ userId: objectId }).populate({
    path: 'studyId',
    model: 'Study',
  });
  let myStudies: any = studyMembers.map((member) => member.studyId);

  const allStudies = [...myStudies, ...leaderStudies].filter((s) => s !== null);

  const uniqueStudies = Array.from(
    new Set(allStudies.map((s) => s._id.toString())),
  ).map((id) => allStudies.find((s) => s._id.toString() === id));

  const activeStudies = uniqueStudies.filter(
    (study) => study.studyStart <= currentDate && study.studyEnd >= currentDate,
  );

  const completedStudies = uniqueStudies.filter(
    (study) => study.studyEnd < currentDate,
  );

  const upcomingStudies = uniqueStudies
    .filter((study) => study.studyStart > currentDate)
    .sort((a, b) => a.studyStart.getTime() - b.studyStart.getTime());

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
