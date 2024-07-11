import CollectStudyClient from '@/app/(suwan)/make-study-form/_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';

export default async function page(props: any) {
  const { params } = props;
  const lectureId = params.lectureId;

  const session = await getSession();
  const id = session?.user?.id;

  const lectureName = await (
    await fetch(
      `http://localhost:3000/api/lecture/${lectureId}?data=lectureName`,
    )
  ).json();

  console.log(lectureName);

  return (
    <>
      {id && (
        <CollectStudyClient
          leaderId={id}
          lectureId={lectureId}
          lectureName={lectureName}
        />
      )}
    </>
  );
}
