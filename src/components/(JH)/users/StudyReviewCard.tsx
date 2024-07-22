export default function StudyReviewCard({ review }: any) {
  console.log(review);
  //TODO:스터디리뷰스키마 수정, 작성한 유저 프로필 보이도록 처리해야함.
  return (
    <section className="flex gap-[0.8rem]  border-b border-gray-300 pb-[2rem] w-full">
      <div className="w-[4rem] h-[4rem] border border-gray-500 rounded-full overflow-hidden">
        <img
          src={`${review.userId.image}`}
          className="object-cover h-full"
        ></img>
      </div>
      <div className="w-[29.7rem] flex flex-col gap-[.6rem] text-content-1">
        <h1 className="font-bold ">{review.userId.nickname}</h1>
        <p>{review.studyReviewContent}</p>
      </div>
    </section>
  );
}
