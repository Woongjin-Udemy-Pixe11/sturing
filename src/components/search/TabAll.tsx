import LectureList from './LectureList';
import StudyList from './StudyList';

type TabAllProps = {
  study: any[];
  lecture: any[];
  studyLimit: number;
  lectureLimit: number;
};

export default function TabAll({
  study,
  lecture,
  studyLimit,
  lectureLimit,
}: TabAllProps) {
  return (
    <>
      <StudyList data={study} limit={studyLimit} />
      <hr className="w-full h-[.6rem] bg-gray-200 my-[2rem] border-0" />
      <LectureList data={lecture} limit={lectureLimit} />
    </>
  );
}
