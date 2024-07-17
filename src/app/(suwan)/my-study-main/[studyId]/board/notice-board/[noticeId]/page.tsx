import NoticeBoardDetail from '@/app/(suwan)/my-study-main/[studyId]/board/_component/NoticeBoardDetail';
import SubHeader from '@/components/common/SubHeader';
import { fetchNotice } from '@/utils/my-study-main/fetch';

export default async function page({
  params,
}: {
  params: { noticeId: string };
}) {
  const noticeId = params.noticeId;
  console.log('🎉', noticeId);

  const notice = await fetchNotice(noticeId);
  console.log(notice);

  return (
    <>
      <NoticeBoardDetail notice={notice} />
    </>
  );
}
