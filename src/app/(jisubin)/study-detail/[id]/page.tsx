import StudyInfo from '@/app/(jisubin)/study-detail/_components/StudyInfo';
import LectureInfo from '../_components/LectureInfo';
import StudyMood from '../_components/StudyMood';
import StudyTeamMembers from '../_components/StudyTeamMembers';
import StudyComments from '../_components/StudyComments';
import { TStudyInfo } from '@/types/TStudyInfo';
import { TLectureDetail } from '@/types/TLecture';

type TStudyDetailPageProps = {
  params: { id: string };
};

async function fetchStudyDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-detail/?id=${id}`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch study detail');
  return res.json();
}

async function fetchLectureDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch lecture');
  return res.json();
}

export default async function StudyDetailPage(props: TStudyDetailPageProps) {
  const { params } = props;
  const id = params.id;

  const study: TStudyInfo = await fetchStudyDetail(id);
  let lecture: TLectureDetail | null = null;
  if (study.studyLecture) {
    lecture = await fetchLectureDetail(study.studyLecture);
  }

  return (
    <div className="flex flex-col mt-[2.8rem] text-gray-800 pb-[10rem]">
      <StudyInfo
        member={study.studyMember}
        meeting={study.studyMeetings}
        place={study.studyPlace}
        content={study.studyContent}
      />
      {lecture && (
        <LectureInfo
          rating={lecture.lectureRating}
          name={lecture.lectureName}
          url={lecture.lectureURL}
        />
      )}

      <StudyMood mood={study.studyMood} />

      <StudyTeamMembers id={id} />
      <StudyComments id={id} />
    </div>
  );
}
