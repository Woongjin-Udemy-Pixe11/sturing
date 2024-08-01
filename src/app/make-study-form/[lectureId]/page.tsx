import { getSession } from '@/utils/getSessions';
import CollectStudyClient from '../_components/CollectStudyClient';

export default async function page({
  params,
}: {
  params: { lectureId: string };
}) {
  const lectureId = params.lectureId;

  const session = await getSession();
  const userId = session?.user?.id;

  const lectureData = await (
    await fetch(
      `${process.env.LOCAL_URL}/api/lecture/${lectureId}?data=lectureName&data=lectureCategory&data=lectureInstructor`,
    )
  ).json();

  return (
    <>
      {userId && (
        <CollectStudyClient
          leaderId={userId}
          lectureId={lectureId}
          lectureData={lectureData}
        />
      )}
    </>
  );
}
