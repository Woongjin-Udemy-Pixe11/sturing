'use server';
import BoardTop from '../_component/BoardTop';
import NoticeBoardList from '../_component/NoticeBoardList';
import { fetchNoticeList, fetchStudy } from '@/utils/my-study-main/fetch';
import { getSession } from '@/utils/getSessions';

export default async function page({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const noticeList = await fetchNoticeList(studyId);
  // console.log(noticeList);

  const session = await getSession();
  const userid = session?.user?.id;
  const data = await fetchStudy(studyId);
  const isLeader = data.leaderId === userid;
  return (
    <>
      {isLeader ? (
        <BoardTop title={'공지사항'} href="./notice-board/write" isButton />
      ) : (
        <BoardTop title={'공지사항'} href="./notice-board/write" />
      )}

      <NoticeBoardList noticeList={noticeList} />
    </>
  );
}
