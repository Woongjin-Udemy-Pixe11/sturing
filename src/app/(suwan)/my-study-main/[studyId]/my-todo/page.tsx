import MyTodoContainer from '@/components/(suwan)/my-study/my-todo/MyTodoContainer';
import Header from '../_components/Header';
import { fetchStudy } from '@/utils/my-study-main/fetch';
import { getSession } from '@/utils/getSessions';

export default async function MyTodo({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const session = await getSession();
  const id = session.user.id;
  const data = await fetchStudy(studyId);
  return (
    <>
      <Header studyId={studyId} data={data} />
      <MyTodoContainer studyId={studyId} userId={id} />
    </>
  );
}
