export default function StudyReviewCard({ review }: any) {
  console.log(review);
  //TODO:스터디리뷰스키마 수정, 작성한 유저 프로필 보이도록 처리해야함.
  return (
    <section className="flex gap-[0.8rem]  border-b-2 border-gray-400 pb-[2rem] w-[90%]">
      <div className="w-[3.5rem] h-[3.5rem] border border-gray-500 rounded-full">
        <img src="/images/user-card-dummy.png" className="object-fill"></img>
      </div>
      <div className="w-[29.7rem] flex flex-col gap-4">
        <h1 className="font-bold">취뽀기원</h1>
        <p>{review.studyReviewContent}</p>
      </div>
    </section>
  );
}
