import { getSession } from '@/utils/getSessions';
import { fetchBlackboard, patchView } from '@/lib/actions/studyMainAction';
import NoticeBoardDetail from '../../_component/NoticeBoardDetail';

export default async function page({
  params,
}: {
  params: { noticeId: string };
}) {
  const session = await getSession();
  const userId = session?.user?.id;

  const noticeId = params.noticeId;

  const notice = await fetchBlackboard('notice', noticeId);

  await patchView(noticeId, 'notice');
  return (
    <>
      <NoticeBoardDetail blackboard={notice} userId={userId} />
    </>
  );
}
