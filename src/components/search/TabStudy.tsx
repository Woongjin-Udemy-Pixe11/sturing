import StudyList from './StudyList';

export default async function TabStudy({ data }: { data: any }) {
  return (
    <>
      <StudyList isDetail={true} data={data} />
    </>
  );
}
