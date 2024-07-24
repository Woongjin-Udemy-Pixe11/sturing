import LectureList from './LectureList';
import StudyList from './StudyList';

type TabAllProps = {
  study: any[];
  lecture: any[];
  studyLimit: number;
  lectureLimit: number;
  userId: string;
};

export default function TabAll(props: TabAllProps) {
  const { study, lecture, studyLimit, lectureLimit, userId } = props;
  return (
    <>
      <StudyList data={study} limit={studyLimit} userId={userId} />
      <hr className="w-full h-[.6rem] bg-gray-200 my-[2rem] border-0" />
      <LectureList data={lecture} limit={lectureLimit} userId={userId} />
    </>
  );
}
