export default function Gallery() {
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] rounded-[5px] bg-white border border-gray-300">
        <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#212121]">
          팀원 사진 인증
        </p>
        <svg
          width={303}
          height={1}
          viewBox="0 0 303 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1={303} y1="0.5" y2="0.5" stroke="#E4E4E4" />
        </svg>
        <div className="flex flex-wrap">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[7rem] h-[7rem] relative gap-[1.4rem] p-[0.7rem] rounded-[5px] bg-white border border-[#e3e3e3]"></div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[7rem] h-[7rem] relative gap-[1.4rem] p-[0.7rem] rounded-[5px] bg-white border border-[#e3e3e3]"></div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[7rem] h-[7rem] relative gap-[1.4rem] p-[0.7rem] rounded-[5px] bg-white border border-[#e3e3e3]"></div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[7rem] h-[7rem] relative gap-[1.4rem] p-[0.7rem] rounded-[5px] bg-white border border-[#e3e3e3]"></div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[7rem] h-[7rem] relative gap-[1.4rem] p-[0.7rem] rounded-[5px] bg-white border border-[#e3e3e3]"></div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[7rem] h-[7rem] relative gap-[1.4rem] p-[0.7rem] rounded-[5px] bg-white border border-[#e3e3e3]"></div>
        </div>
      </div>
    </>
  );
}
