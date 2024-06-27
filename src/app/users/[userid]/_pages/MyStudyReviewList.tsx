import MyPageHeader from '@/components/users/MypageHeader';
import StudyReviewCard from '@/components/users/StudyReviewCard';

export default function MyStudyReviewList() {
  const number = [1, 2, 3, 4];
  return (
    <main>
      <MyPageHeader>받은 스터디 평가</MyPageHeader>
      <div className="mt-[2rem]">후기 {number.length}개</div>
      <div className="flex flex-col gap-[2rem] mt-[2rem] ">
        {number.map((num) => {
          return <StudyReviewCard key={num} />;
        })}
      </div>
    </main>
  );
}
