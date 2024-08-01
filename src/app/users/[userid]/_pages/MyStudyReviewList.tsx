import MyPageHeader from '@/components/users/MypageHeader';
import StudyReviewCard from '@/components/users/StudyReviewCard';
import { TstudyReview } from '@/types/TStudyReview';

type TmyStudyReviewListProps = {
  data: TstudyReview[];
};

export default async function MyStudyReviewList(
  props: TmyStudyReviewListProps,
) {
  const { data } = props;
  if (data === null) {
    return <div>받은 스터디평가가 없습니다.</div>;
  }

  return (
    <main>
      <MyPageHeader>받은 스터디 평가</MyPageHeader>
      <div className="px-[1.6rem]">
        <div className="my-[2rem]">
          후기 {data.length > 0 ? data.length : '0'}개
        </div>
        <div className="flex flex-col gap-[2rem]">
          {data.length > 0 &&
            data.map((review) => {
              return <StudyReviewCard key={review._id} review={review} />;
            })}
        </div>
      </div>
    </main>
  );
}
