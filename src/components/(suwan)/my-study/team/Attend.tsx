export default function Attend() {
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] rounded-[5px] bg-white border border-gray-300">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#212121]">
              출석체크 현황
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#0075ff]">
              2/4
            </p>
          </div>
        </div>
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
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-16 gap-2 py-2 rounded-[3px]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <circle cx={10} cy={10} r={10} fill="#4171FF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46446 9.70696L5.75735 10.4141L7.87868 12.5354L8.58578 13.2425L9.29289 12.5354L14.2426 7.58564L13.5355 6.87853L8.58578 11.8283L6.46446 9.70696Z"
                  fill="white"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4171ff]">
                웅진
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-16 gap-2 py-2 rounded-[3px]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <circle cx="10.6667" cy={10} r={10} fill="#4171FF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.13112 9.70696L6.42401 10.4141L8.54533 12.5354L9.25244 13.2425L9.95955 12.5354L14.9093 7.58564L14.2022 6.87853L9.25244 11.8283L7.13112 9.70696Z"
                  fill="white"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#010101]">
                갓생살자
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-16 gap-2 py-2 rounded-[3px]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <circle
                  cx="10.3333"
                  cy={10}
                  r="9.5"
                  fill="#F3F3F3"
                  stroke="#D0D0D0"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#010101]">
                취뽀기원
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-16 gap-2 py-2 rounded-[3px]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <circle
                  cx={10}
                  cy={10}
                  r="9.5"
                  fill="#F3F3F3"
                  stroke="#D0D0D0"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#010101]">
                마스터
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
