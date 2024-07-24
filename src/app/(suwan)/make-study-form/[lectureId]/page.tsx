import CollectStudyClient from '@/app/(suwan)/make-study-form/_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';

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
      `${process.env.LOCAL_URL}/api/lecture/${lectureId}?data=lectureName&data=lectureCategory`,
    )
  ).json();
  console.log('🥬', lectureData);

  return (
    <>
      {userId && (
        <CollectStudyClient
          leaderId={userId}
          lectureId={lectureId}
          lectureName={lectureData.lectureName}
          lectureCategor={lectureData.lectureCategory}
        />
      )}
    </>
  );
}
