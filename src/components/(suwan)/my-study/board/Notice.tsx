export default function Notice() {
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] gap-3.5 px-5 py-6 rounded-[5px] bg-white border border-[#e4e4e4]">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-between items-center flex-grow relative">
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#212121]">
              공지사항
            </p>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M9 5L16 12.5L9 20"
                stroke="#4D4D4D"
                stroke-width="1.7"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[18px]">
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
          <div className="flex justify-start items-center flex-grow w-[303px] relative gap-2">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 px-1.5 py-0.5 rounded-[3px] bg-[#ecf1ff]">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#4171ff]">
                필독
              </p>
            </div>
            <pre>
              이번주 스터디 시간 및 장소 확인 하시고 문의 사항 있으시면
              말씀해주세요.
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
