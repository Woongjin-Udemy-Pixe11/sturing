import LectureList from './LectureList';
import StudyList from './StudyList';

export default function TabAll({ data }: { data: any }) {
  return (
    <>
      <StudyList data={data} />
      <hr className="w-full h-[.6rem] bg-gray-200 my-[2rem] border-0" />
      <LectureList />
    </>
  );
}
