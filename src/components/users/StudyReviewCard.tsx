export default function StudyReviewCard() {
  return (
    <section className="flex gap-[0.8rem]  border-b-2 border-gray-400 pb-[2rem] w-[90%]">
      <div className="w-[3.5rem] h-[3.5rem] border border-gray-500 rounded-full">
        <img src="/images/user-card-dummy.png" className="object-fill"></img>
      </div>
      <div className="w-[29.7rem] flex flex-col gap-4">
        <h1 className="font-bold">취뽀기원</h1>
        <p>
          같이 스터디해서 좋았습니다~ 책임감이 강하시고 열심히 하시는
          모습이좋아요
        </p>
      </div>
    </section>
  );
}
