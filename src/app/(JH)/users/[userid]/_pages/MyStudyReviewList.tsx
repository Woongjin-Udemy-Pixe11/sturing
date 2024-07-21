import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import StudyReviewCard from '@/components/(JH)/users/StudyReviewCard';

export default async function MyStudyReviewList({ data }: { data: any }) {
  console.log(data);
  return (
    <main>
      <MyPageHeader>받은 스터디 평가</MyPageHeader>
      <div className="px-[1.6rem]">
        <div className="mt-[2rem]">후기 {data.length}개</div>
        <div className="flex flex-col gap-[2rem] mt-[2rem] ">
          {data &&
            data.map((review: any) => {
              return <StudyReviewCard key={review._id} review={review} />;
            })}
        </div>
      </div>
    </main>
  );
}
