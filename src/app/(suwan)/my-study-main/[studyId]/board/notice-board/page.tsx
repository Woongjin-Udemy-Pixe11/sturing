'use server';
import BoardTop from '../_component/BoardTop';
import NoticeBoardList from '../_component/NoticeBoardList';
import { fetchNoticeList } from '@/utils/my-study-main/fetch';

export default async function page({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const noticeList = await fetchNoticeList(studyId);
  // console.log(noticeList);

  return (
    <>
      <BoardTop title={'공지사항'} href="./notice-board/write" isButton />
      <NoticeBoardList noticeList={noticeList} />
    </>
  );
}
