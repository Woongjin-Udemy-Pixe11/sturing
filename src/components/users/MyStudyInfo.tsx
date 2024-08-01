import Link from 'next/link';

export default function MyStudyInfo({
  activestudy,
  completedstudy,
  userid,
}: {
  activestudy: any;
  completedstudy: any;
  userid?: string;
}) {
  return (
    <>
      <section className="flex w-full py-[2rem]">
        {/* TODO:어떻게하기로했더라 활동중,종료중 */}

        <Link
          className="flex-1 text-center border-r-[0.1rem] border-gray-400"
          href="/my-study-list"
        >
          <h1 className="font-medium">{activestudy}</h1>
          <h2 className=" text-gray-700 text-content-1 mt-[0.5rem]">
            활동 중 스터디
          </h2>
        </Link>

        <Link className="flex-1 text-center" href="/my-study-list">
          <h1 className="font-medium">{completedstudy}</h1>
          <h2 className=" text-gray-700 text-content-1 mt-[0.5rem]">
            종료 스터디
          </h2>
        </Link>
      </section>
      <section className="flex gap-[.8rem] mt-3">
        <Link
          href={`${userid}/mybookmark`}
          className="w-full text-center bg-white border border-gray-300 rounded-[.5rem] py-[.8rem]"
        >
          <button className=" text-gray-900 text-content-1 ">
            내 관심목록
          </button>
        </Link>
        <Link
          href={`/matching`}
          className="w-full text-center bg-white border border-gray-300 rounded-[.5rem] py-[.8rem]"
        >
          <button className=" text-gray-900 text-content-1 ">
            매칭정보 수정
          </button>
        </Link>
      </section>
    </>
  );
}
