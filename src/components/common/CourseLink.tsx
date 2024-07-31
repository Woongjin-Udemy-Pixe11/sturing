import Link from 'next/link';

type TCourseLinkProps = {
  courseTitle: string;
  courseLink?: string;
};

export default function CourseLink(props: TCourseLinkProps) {
  const { courseTitle, courseLink = '/' } = props;
  return (
    <>
      <div className="flex items-center justify-between bg-main-600 text-white rounded-[0.5rem] w-full h-[4.2rem] px-[1.2rem] py-[1.0rem] box-border gap-[0.8rem]">
        <span className="flex-shrink-0 px-[0.6rem] py-[0.2rem] bg-main-200 text-[1.2rem] text-main-500 font-medium rounded-[0.3rem] box-border">
          강의
        </span>
        <span className="flex-grow text-content-1 text-gray-300 w-[22.7rem] truncate">
          {courseTitle}
        </span>
        <Link
          href={courseLink}
          className="flex-shrink-0 text-[1.2rem] underline text-gray-400"
        >
          바로가기
        </Link>
      </div>
    </>
  );
}
