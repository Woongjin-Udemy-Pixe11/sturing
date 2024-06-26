//TODO: 글자 | 글자 | 글자 좀더깔끔하게 css design 할수있는 방법있으면 변경할것

export default function UserMatchingInfo() {
  return (
    <main className="border-t-4 border-gray-400 mt-[4rem] py-[3.6rem] ">
      <header className="flex justify-between">
        <h1 className="font-bold text-headline-3">매칭정보</h1>
        <button className="text-[1.6rem] text-main-600">수정</button>
      </header>
      <section className="text-[1.6rem] text-gray-600 flex flex-col gap-[4.6rem] mt-[2.2rem]">
        <div className=" border-b-2 border-gray-300 pb-[1.2rem]">
          <label>관심분야 및 수준</label>
          <ul className="flex gap-[2rem] text-gray-900 py-[1.2rem] ">
            <li className="leading-10 relative after:content:none after:w-[0.05rem] after:h-[1.9rem] after:absolute after:top-[50%] after:right-[-1rem] after:translate-y-[-50%] after:bg-slate-300">
              디자인-비기너
            </li>
            <li className="leading-10 relative after:content:none after:w-[0.05rem] after:h-[1.9rem] after:absolute after:top-[50%] after:right-[-1rem] after:translate-y-[-50%] after:bg-slate-300">
              비즈니스-주니어
            </li>
            <li>마케팅-시니어</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-[1.2rem]">
          <label>선호 지역</label>
          <ul className="flex gap-2 text-gray-900">
            <li className="leading-10 relative after:content:none after:w-[0.05rem] after:h-[1.9rem] after:absolute after:top-[50%] after:right-[-0.3rem] after:translate-y-[-50%] after:bg-slate-300">
              서울 성동구
            </li>
            <li className="leading-10 relative after:content:none after:w-[0.05rem] after:h-[1.9rem] after:absolute after:top-[50%] after:right-[-0.3rem] after:translate-y-[-50%] after:bg-slate-300">
              서울 강서구
            </li>
            <li>서울 강남구</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
