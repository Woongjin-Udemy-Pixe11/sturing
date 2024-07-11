import CollectStudyClient from '@/app/(suwan)/make-study-form/_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';

export default async function page(props: any) {
  const { params } = props;
  const lectureId = params.lectureId;

  const session = await getSession();
  const id = session?.user?.id;

  return (
    <>{id && <CollectStudyClient leaderId={id} lectureId={lectureId} />}</>
  );
}
