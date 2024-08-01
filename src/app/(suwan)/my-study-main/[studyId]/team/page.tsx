import Percent from '@/components/(suwan)/my-study/team/Percent';
import TeamTodo from '@/components/(suwan)/my-study/team/TeamTodo';
import Attend from '@/components/(suwan)/my-study/team/Attend';
import Gallery from '@/components/(suwan)/my-study/team/Gallery';
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
