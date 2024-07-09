import CourseLink from '@/components/common/CourseLink';

async function fetchLectureDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch lecture');
  return res.json();
}
export default async function LectureDetailTitle({ id }: { id: string }) {
  console.log('####id####', id);
  const lecture = await fetchLectureDetail(id);
  return (
    <>
      <div className="mx-[1.6rem] my-[2rem]">
        <CourseLink courseTitle={lecture.lectureName} courseLink="/" />
      </div>
    </>
  );
}
