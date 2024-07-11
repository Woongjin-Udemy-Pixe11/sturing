import CollectStudyClient from './_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';

import { TFetchStudy } from '@/types/TStudy';

export default async function page() {
  const session = await getSession();
  const id = session?.user?.id;

  return <>{id && <CollectStudyClient id={id} />}</>;
}
