import Percent from '@/components/my-study-main/team/Percent';
import TeamTodo from '@/components/my-study-main/team/TeamTodo';
import Attend from '@/components/my-study-main/team/Attend';
import Gallery from '@/components/my-study-main/team/Gallery';
import { getSession } from '@/utils/getSessions';
import Header from '../_components/Header';
import { fetchStudy, fetchBoardList } from '@/lib/actions/studyMainAction';
import RenderTeam from './components/RenderTeam';

export default async function Page({
  params,
}: {
  params: { studyId: string };
}) {
  const session = await getSession();
  const userId = session?.user?.id;
  const studyId = params.studyId;

  const studyData = await fetchStudy(studyId);
  const taskList = await fetchBoardList('task', studyId);

  // if (!studyData || typeof studyData !== 'object') {
  //   throw new Error('Invalid study data');
  // }

  // if (!Array.isArray(taskList)) {
  //   throw new Error('Invalid task list data');
  // }

  const leaderId = studyData.leaderId;
  return (
    <>
      <RenderTeam studyId={studyId} userId={userId} />
      <Header studyId={studyId} data={studyData} />
      <div className="flex flex-col justify-center items-center bg-gray-100 w-full ">
        <Percent />
        <TeamTodo studyId={studyId} leaderId={leaderId} />
        <Attend />
        <Gallery taskList={taskList} />
      </div>
    </>
  );
}
