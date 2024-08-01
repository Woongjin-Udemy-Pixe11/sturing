import { getSession } from '@/utils/getSessions';
import CollectStudyClient from '../_components/CollectStudyClient';

export default async function page({
  params,
}: {
  params: { commonId: string };
}) {
  const commonId = params.commonId;
  const session = await getSession();
  const userId = session?.user?.id;

  return (
    <>
      <CollectStudyClient leaderId={userId} />
    </>
  );
}
