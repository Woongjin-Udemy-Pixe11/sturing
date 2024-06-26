import { GoChevronLeft } from 'react-icons/go';
import StudyReviewCard from '../_componets/StudyReviewCard';

export default function MyStudyReviewList() {
  const number = [1, 2, 3, 4];
  return (
    <main className="px-[1.6rem] py-[2rem]">
      <header className="flex text-center pb-[2rem] border-b-2 border-gray-600">
        <GoChevronLeft size={24} className="mb-4" />
        <h1 className="flex-1">받은 스터디 평가</h1>
      </header>
      <div className="mt-[2rem]">후기 {number.length}개</div>
      <div className="flex flex-col gap-[2rem] ">
        {number.map((num) => {
          return <StudyReviewCard key={num} />;
        })}
      </div>
    </main>
  );
}
