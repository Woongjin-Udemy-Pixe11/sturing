import { TstudyReview } from '@/types/TStudyReview';

type TstudyReviewCardProps = {
  review: TstudyReview;
};

export default function StudyReviewCard(props: TstudyReviewCardProps) {
  const { review } = props;
  return (
    <section className="flex gap-[0.8rem]  border-b border-gray-300 pb-[2rem] w-full">
      <div className="w-[4rem] h-[4rem] border border-gray-500 rounded-full overflow-hidden">
        <img
          src={`${review.userId.image}`}
          className="object-cover h-full"
        ></img>
      </div>
      <div className="w-[29.7rem] flex flex-col gap-[.6rem] text-content-1">
        <h1 className="font-semibold ">{review.userId.nickname}</h1>
        <p>{review.studyReviewContent}</p>
      </div>
    </section>
  );
}
