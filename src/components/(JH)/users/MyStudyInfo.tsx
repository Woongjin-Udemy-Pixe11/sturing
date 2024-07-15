import LongButton from '@/components/common/LongButton';
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
      <section className="flex w-full px-[2.4rem] py-[2rem]">
        {/* TODO:어떻게하기로했더라 활동중,종료중 */}

        <Link
          className="flex-1 text-center border-r-[0.1rem] border-gray-400"
          href="/my-study-list"
        >
          <h1>{activestudy}</h1>
          <h2>활동 중 스터디</h2>
        </Link>

        <Link className="flex-1 text-center" href="/my-study-list">
          <h1>{completedstudy}</h1>
          <h2>종료 중 스터디</h2>
        </Link>
      </section>
      <section className="flex gap-2 mt-3">
        <LongButton color="white">
          <Link href={`${userid}/mybookmark`}>
            <p className="text-gray-900 text-content-1">내 관심목록</p>
          </Link>
        </LongButton>
        <LongButton color="white">
          <Link href={`/matching`}>
            <p className="text-gray-900 text-content-1">매칭정보 수정</p>
          </Link>
        </LongButton>
      </section>
    </>
  );
}
