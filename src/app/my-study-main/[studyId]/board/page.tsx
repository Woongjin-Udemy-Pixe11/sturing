import { fetchBoardList, fetchStudy } from '@/lib/actions/studyMainAction';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import Header from '../_components/Header';
import TaskInfo from './_component/TaskInfo';
import TaskClient from './_component/TaskClient';

export const dynamic = 'force-dynamic';

export default async function page({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const data = await fetchStudy(studyId);
  const noticeList = await fetchBoardList('notice', studyId);
  const taskList = await fetchBoardList('task', studyId);
  console.log('✅', taskList);
  const leaderId = data.leaderId;

  return (
    <>
      <Header studyId={studyId} data={data} />

      <div className="bg-gray-100 py-[2rem] px-[2rem]">
        <div className="px-[2rem] py-[2.4rem] bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem]  ">
          <Link href={`./board/notice-board`}>
            <div className="pb-[1.4rem] w-full flex justify-between items-center text-headline-3 font-medium">
              <span>공지사항</span>
              <IoIosArrowForward />
            </div>
          </Link>

          <hr className="border-b-gray-300 border-b-1"></hr>
          {noticeList.length > 0 && (
            <Link href={`./board/notice-board/${noticeList[0]._id}`}>
              <div className="flex flex-row items-center gap-x-[0.8rem] py-[1.6rem]">
                <div className="min-w-[3.3rem] min-h-[2.2rem] px-[0.6rem] py-[0.2rem] bg-main-100 rounded-[0.3rem] text-main-700 text-content-2 break-all">
                  필독
                </div>
                <span className="text-content-2 truncate">
                  {noticeList[0].title}
                </span>
              </div>
            </Link>
          )}
        </div>

        <div className="bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] my-[2.4rem] px-[2rem] py-[2.4rem]">
          <Link href={`/my-study-main/${studyId}/board/task-board`}>
            <div className="pb-[1.4rem] w-full flex justify-between items-center text-headline-3 font-medium">
              <span>과제 게시판</span>
              <IoIosArrowForward />
            </div>
          </Link>

          <hr className="border-b-gray-300 border-b-1"></hr>
          <TaskClient taskList={taskList} leaderId={leaderId} />
        </div>
      </div>
    </>
  );
}
