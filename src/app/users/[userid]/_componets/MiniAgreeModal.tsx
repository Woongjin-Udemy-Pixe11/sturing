export default function MiniAgreeModal() {
  return (
    <div className="w-[22rem] h-[14.4rem] px-[5rem] py-[4rem] border boder-black rounded-md">
      <h1 className="text-[1.2rem]">정말 탈퇴하시겠습니까?</h1>
      <section className="mt-[1.4rem] w-full flex gap-[0.6rem] ">
        <button className="border bg-main-600 px-[0.6rem] py-[0.2rem] text-content-2 rounded  text-gray-200 flex-1">
          예
        </button>
        <button className="border border-main-600 px-[0.6rem] py-[0.2rem] text-content-2 rounded  text-main-600 flex-1">
          아니오
        </button>
      </section>
    </div>
  );
}
