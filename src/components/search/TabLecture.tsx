import LectureList from './LectureList';

export default function TabLecture({ data }: { data: any }) {
  return (
    <>
      <LectureList isDetail={true} data={data} />
    </>
  );
}
