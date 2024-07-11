import MyTodoContainer from '@/components/(suwan)/my-study/my-todo/MyTodoContainer';
import Header from '../_components/Header';
import fetchStudy from '@/utils/my-study-main/fetchStudy';

export default async function MyTodo({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const data = await fetchStudy(studyId);
  return (
    <>
      <Header studyId={studyId} data={data} />
      <MyTodoContainer />
    </>
  );
}
