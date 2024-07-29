import Calendar from '@/components/(suwan)/my-study/common/Calendar';

export default async function MyTodoContainer({
  studyId,
  userId,
}: {
  studyId: any;
  userId: any;
}) {
  const data = await (
    await fetch(
      `http://localhost:3000/api/study-todo?study=${studyId}&user=${userId}`,
      {
        cache: 'no-store',
      },
    )
  ).json();

  return (
    <>
      <Calendar studyId={studyId} userId={userId} data={data} />
    </>
  );
}
