import NoticeBoardDetail from '@/app/(suwan)/my-study-main/[studyId]/board/_component/NoticeBoardDetail';

import { getSession } from '@/utils/getSessions';
import {
  fetchBlackboard,
  patchView,
  fetchIcon,
} from '@/utils/my-study-main/fetch';

export default async function page({
  params,
}: {
  params: { noticeId: string };
}) {
  const session = await getSession();
  const userId = session?.user?.id;

  const noticeId = params.noticeId;

  const notice = await fetchBlackboard('notice', noticeId);
  console.log('📍', notice);

  // const icons = await fetchIcon(noticeId);

  await patchView(noticeId);
  return (
    <>
      <NoticeBoardDetail blackboard={notice} userId={userId} />
    </>
  );
}
