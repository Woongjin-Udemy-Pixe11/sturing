import NoticeBoardDetail from '@/app/(suwan)/my-study-main/[studyId]/board/_component/NoticeBoardDetail';
import SubHeader from '@/components/common/SubHeader';
import { fetchNotice, fetchUser, patchView } from '@/utils/my-study-main/fetch';

export default async function page({
  params,
}: {
  params: { noticeId: string };
}) {
  const noticeId = params.noticeId;
  // console.log('🎉', noticeId);

  const notice = await fetchNotice(noticeId);
  console.log(notice);

  const writer = await fetchUser(notice.writerId);
  console.log('🎉', writer);

  await patchView(noticeId);
  return (
    <>
      <NoticeBoardDetail notice={notice} writer={writer} />
    </>
  );
}
