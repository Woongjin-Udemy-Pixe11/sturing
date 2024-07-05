export default async function SturingRate({ data }: any) {
  return (
    <div className="flex flex-col gap-[1.8rem]">
      <h2 className="px-[1.6rem] mt-[5.6rem] text-headline-3 font-bold">
        스터링 지수
      </h2>
      {/* TODO://위치 이동시키기 퍼센트따라서 */}
      <section>
        <article className="border-[0.1rem] border-gray-300 px-[2.4rem] py-[3.9rem] rounded-md">
          <div className="relative flex items-center justify-center w-[5.6rem] h-[3rem] bg-blue-500 text-white text-2xl rounded-[10rem] mb-2 m-auto left-12">
            <span>{data.users.sturingPercent}%</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-blue-500 rotate-45"></div>
          </div>
          <div className="w-full bg-gray-400 rounded-full h-[0.8rem] ">
            <div
              className="bg-gradient-to-r from-[#FFE4E0] to-[#3A6CFF] h-[0.8rem] rounded-full"
              style={{ width: `${data.users.sturingPercent}` }}
            ></div>
          </div>
          <div className="w-[0.6rem] h-[0.6rem] bg-gray-600 rounded-full m-auto mt-[0.65rem]"></div>
          <p className="text-content-2 text-center text-gray-600">
            첫 지수 50%
          </p>
        </article>
      </section>
    </div>
  );
}
