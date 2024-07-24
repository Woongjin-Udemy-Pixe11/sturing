import { TStudyInfo } from '@/types/TStudyInfo';
import LectureList from './LectureList';
import StudyList from './StudyList';
import { TLectureDetail } from '@/types/TLecture';

type TtabAllProps = {
  study: TStudyInfo[];
  lecture: TLectureDetail[];
  studyLimit: number;
  lectureLimit: number;
  userId: string;
};

export default function TabAll(props: TtabAllProps) {
  const { study, lecture, studyLimit, lectureLimit, userId } = props;
  return (
    <>
      <StudyList data={study} limit={studyLimit} userId={userId} />
      <hr className="w-full h-[.6rem] bg-gray-200 my-[2rem] border-0" />
      <LectureList data={lecture} limit={lectureLimit} userId={userId} />
    </>
  );
}
