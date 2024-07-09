import CourseLink from '@/components/common/CourseLink';

// async function fetchLectureDetail(id: string) {
//   if (!id) throw new Error('Invalid ID');
//   const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`);
//   if (!res.ok) throw new Error('Failed to fetch lecture');
//   return res.json();
// }

type TLectureDetailTitleProps = {
  title: string;
  link: string;
};

export default async function LectureDetailTitle(
  props: TLectureDetailTitleProps,
) {
  const { title, link } = props;
  return (
    <>
      <div className="mx-[1.6rem] my-[2rem]">
        <CourseLink courseTitle={title} courseLink={link} />
      </div>
    </>
  );
}
