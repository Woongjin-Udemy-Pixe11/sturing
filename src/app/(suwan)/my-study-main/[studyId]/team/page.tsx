import Percent from '@/components/(suwan)/my-study/team/Percent';
import TeamTodo from '@/components/(suwan)/my-study/team/TeamTodo';
import Attend from '@/components/(suwan)/my-study/team/Attend';
import Gallery from '@/components/(suwan)/my-study/team/Gallery';
import { getSession } from '@/utils/getSessions';
import Header from '../_components/Header';
import {
  fetchStudy,
  fetchMember,
  fetchBoardList,
} from '@/utils/my-study-main/fetch';

export default async function Page({
  params,
}: {
  params: { studyId: string };
}) {
  const session = await getSession();
  const userid = session?.user?.id;
  const studyId = params.studyId;

  const studyData = await fetchStudy(studyId);
  const memberData = await fetchMember(studyId);
  const taskList = await fetchBoardList('task', studyId);

  const leaderId = studyData.leaderId;
  return (
    <>
      <Header studyId={studyId} data={studyData} />
      <div className="flex flex-col justify-center items-center bg-gray-100 w-full ">
        <Percent memberData={memberData} />
        <TeamTodo
          memberData={memberData}
          studyId={studyId}
          leaderId={leaderId}
        />
        <Attend memberData={memberData} />
        <Gallery taskList={taskList} />
      </div>
      {/* <TeamContainer /> */}
    </>
  );
}
