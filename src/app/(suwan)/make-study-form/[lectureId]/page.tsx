import CollectStudyClient from '@/app/(suwan)/make-study-form/_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';

export default async function page(props: any) {
  const { params } = props;
  const lectureId = params.lectureId;

  const session = await getSession();
  const id = session?.user?.id;

  const lectureData = await (
    await fetch(
      `${process.env.LOCAL_URL}/api/lecture/${lectureId}?data=lectureName`,
    )
  ).json();

  return (
    <>
      {id && (
        <CollectStudyClient
          leaderId={id}
          lectureId={lectureId}
          lectureName={lectureData.lectureName}
        />
      )}
    </>
  );
}
