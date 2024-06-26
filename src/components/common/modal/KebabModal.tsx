export default function KebabModal() {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-[0.5rem] shadow-modal w-[8.8rem] h-[8rem]">
        <button className="text-content-1 py-[0.8rem] w-full">수정</button>
        <span className="border border-gray-300 w-full"></span>
        <button className="text-content-1 py-[0.8rem] w-full">삭제</button>
      </div>
    </>
  );
}
