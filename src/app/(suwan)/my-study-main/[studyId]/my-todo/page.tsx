import Header from '../_components/Header';
import { fetchStudy } from '@/lib/actions/studyMainAction';
import { getSession } from '@/utils/getSessions';
import Calendar from '../_components/Calendar';
import Todos from './_components/Todos';
import RenderTodo from './_components/RenderTodo';

export default async function MyTodo({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const session = await getSession();
  const userId = session?.user?.id;
  const data = await fetchStudy(studyId);

  return (
    <>
      <Header studyId={studyId} data={data} />
      <RenderTodo studyId={studyId} userId={userId} />
      <div className="bg-gray-100 p-[2rem] h-[100%]">
        <Calendar type="todo" />
        <Todos />
      </div>
    </>
  );
}
