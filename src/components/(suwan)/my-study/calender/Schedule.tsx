export default function Schedule() {
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] relative gap-3 px-5 py-6 rounded-[5px] bg-white border border-[#e4e4e4]">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#181818]">
                06.08 (토)
              </p>
            </div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8 12H16"
                stroke="#909090"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16V8"
                stroke="#909090"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#909090"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
            <line x1={303} y1="0.5" y2="0.5" stroke="#E3E3E3" />
          </svg>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[303px] relative gap-2.5 px-4 py-[13px] rounded-[5px] border border-[#e3e3e3]">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black/20">
              제목
            </p>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[271px] relative gap-3">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[271px] relative gap-2 px-4 py-3 rounded-[5px] border border-[#e3e3e3]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#909090]">
                  일정 제목을 입력하세요.
                </p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black/20">
                장소
              </p>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[271px] relative gap-2 px-4 py-3 rounded-[5px] border border-[#e3e3e3]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#909090]">
                  스터디 장소를 입력하세요.
                </p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[13px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black/20">
                  시간
                </p>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[11px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[130px] h-12 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[5px] bg-white border border-[#e3e3e3]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[83px]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#010101]">
                        오후 1:00
                      </p>
                    </div>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 absolute left-[95px] top-[13px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M11.9954 16C11.8269 16 11.6714 15.9712 11.5289 15.9136C11.3865 15.8557 11.2469 15.7553 11.1102 15.6125L4.24088 8.42114C4.09425 8.26792 4.01442 8.08153 4.00137 7.86194C3.98833 7.64236 4.06816 7.44231 4.24088 7.26178C4.40733 7.08726 4.59192 7 4.79463 7C4.99735 7 5.18193 7.08726 5.34839 7.26178L11.9954 14.2102L18.6424 7.26178C18.7888 7.10829 18.9668 7.02472 19.1766 7.01106C19.3864 6.99741 19.5775 7.08098 19.7499 7.26178C19.9166 7.43602 20 7.62925 20 7.84146C20 8.05367 19.9166 8.24689 19.7499 8.42114L12.8806 15.6125C12.7439 15.7553 12.6043 15.8557 12.4619 15.9136C12.3194 15.9712 12.1639 16 11.9954 16Z"
                        fill="#909090"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[130px] h-12 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[5px] bg-white border border-[#e3e3e3]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[83px]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#010101]">
                        오후 2:00
                      </p>
                    </div>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 absolute left-[93px] top-[13px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M11.9954 16C11.8269 16 11.6714 15.9712 11.5289 15.9136C11.3865 15.8557 11.2469 15.7553 11.1102 15.6125L4.24088 8.42114C4.09425 8.26792 4.01442 8.08153 4.00137 7.86194C3.98833 7.64236 4.06816 7.44231 4.24088 7.26178C4.40733 7.08726 4.59192 7 4.79463 7C4.99735 7 5.18193 7.08726 5.34839 7.26178L11.9954 14.2102L18.6424 7.26178C18.7888 7.10829 18.9668 7.02472 19.1766 7.01106C19.3864 6.99741 19.5775 7.08098 19.7499 7.26178C19.9166 7.43602 20 7.62925 20 7.84146C20 8.05367 19.9166 8.24689 19.7499 8.42114L12.8806 15.6125C12.7439 15.7553 12.6043 15.8557 12.4619 15.9136C12.3194 15.9712 12.1639 16 11.9954 16Z"
                        fill="#909090"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[271px] text-sm font-medium text-right text-[#4171ff]">
              완료
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
