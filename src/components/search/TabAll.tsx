import LectureList from './LectureList';
import StudyList from './StudyList';

type TabAllProps = {
  study: any[];
  lecture: any[];
};

export default function TabAll({ study, lecture }: TabAllProps) {
  return (
    <>
      <StudyList data={study} />
      <hr className="w-full h-[.6rem] bg-gray-200 my-[2rem] border-0" />
      <LectureList data={lecture} />
    </>
  );
}
