import CollectStudyClient from '@/app/(suwan)/make-study-form/_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';

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
