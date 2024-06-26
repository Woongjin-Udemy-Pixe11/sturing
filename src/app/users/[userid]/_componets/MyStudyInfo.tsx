import LongButton from '@/components/common/LongButton';

export default function MyStudyInfo() {
  return (
    <>
      <section className="flex w-full px-[2.4rem] py-[2rem]">
        <div className="flex-1 text-center border-r-[0.1rem] border-gray-400">
          <h1>2</h1>
          <h2>활동 중 스터디</h2>
        </div>
        <div className="flex-1 text-center">
          <h1>4</h1>
          <h2>종료 중 스터디</h2>
        </div>
      </section>
      <section className="flex gap-2 mt-3">
        <LongButton color="white">
          <p className="text-gray-900 text-content-1">내 관심목록</p>
        </LongButton>
        <LongButton color="white">
          <p className="text-gray-900 text-content-1">매칭정보 수정</p>
        </LongButton>
      </section>
    </>
  );
}