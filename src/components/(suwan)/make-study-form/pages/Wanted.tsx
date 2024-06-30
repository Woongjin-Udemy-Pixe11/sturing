export default function Wanted() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-between items-start w-[343px] h-[319px] relative">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[13px]">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black/20">
              함께하고 싶은 팀원
            </p>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-end flex-grow-0 flex-shrink-0">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[33px] relative gap-[3px] px-3 py-1 rounded-[3px] bg-[#ecf1ff] border border-[#4171ff]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#4171ff]">
                        비기너
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                  <div className="flex justify-start items-end flex-grow-0 flex-shrink-0">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[33px] relative gap-[3px] px-3 py-1 rounded-[3px] bg-white border border-[#e3e3e3]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#909090]">
                        신입(1년 이하)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-end flex-grow-0 flex-shrink-0">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[33px] relative gap-[3px] px-3 py-1 rounded-[3px] bg-white border border-[#e3e3e3]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#909090]">
                        주니어(1~3년차)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 w-11 h-[26px] gap-[4.7272725105285645px]" />
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex justify-start items-end flex-grow-0 flex-shrink-0">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[33px] relative gap-[3px] px-3 py-1 rounded-[3px] bg-white border border-[#e3e3e3]">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#909090]">
                      시니어(4년 이상)
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-end flex-grow-0 flex-shrink-0">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[33px] relative gap-[3px] px-3 py-1 rounded-[3px] bg-white border border-[#e3e3e3]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#909090]">
                        상관없음
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[343px] h-px bg-[#f3f3f3]" />
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black/20">
              함께하고 싶은 팀원 수 (본인 포함)
            </p>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] overflow-hidden gap-2.5 px-[83px] py-3 rounded-[5px] border border-[#e3e3e3]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[57px]">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z"
                    fill="#909090"
                  />
                  <path
                    d="M12 9.5625H6C5.6925 9.5625 5.4375 9.3075 5.4375 9C5.4375 8.6925 5.6925 8.4375 6 8.4375H12C12.3075 8.4375 12.5625 8.6925 12.5625 9C12.5625 9.3075 12.3075 9.5625 12 9.5625Z"
                    fill="#909090"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#010101]">
                  4명
                </p>
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z"
                    fill="#909090"
                  />
                  <path
                    d="M12 9.5625H6C5.6925 9.5625 5.4375 9.3075 5.4375 9C5.4375 8.6925 5.6925 8.4375 6 8.4375H12C12.3075 8.4375 12.5625 8.6925 12.5625 9C12.5625 9.3075 12.3075 9.5625 12 9.5625Z"
                    fill="#909090"
                  />
                  <path
                    d="M9 12.5625C8.6925 12.5625 8.4375 12.3075 8.4375 12V6C8.4375 5.6925 8.6925 5.4375 9 5.4375C9.3075 5.4375 9.5625 5.6925 9.5625 6V12C9.5625 12.3075 9.3075 12.5625 9 12.5625Z"
                    fill="#909090"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M9.99984 1.66602C5.40817 1.66602 1.6665 5.40768 1.6665 9.99935C1.6665 14.591 5.40817 18.3327 9.99984 18.3327C14.5915 18.3327 18.3332 14.591 18.3332 9.99935C18.3332 5.40768 14.5915 1.66602 9.99984 1.66602ZM13.9832 8.08268L9.25817 12.8077C9.1415 12.9243 8.98317 12.991 8.8165 12.991C8.64984 12.991 8.4915 12.9243 8.37484 12.8077L6.0165 10.4493C5.77484 10.2077 5.77484 9.80768 6.0165 9.56602C6.25817 9.32435 6.65817 9.32435 6.89984 9.56602L8.8165 11.4827L13.0998 7.19935C13.3415 6.95768 13.7415 6.95768 13.9832 7.19935C14.2248 7.44102 14.2248 7.83268 13.9832 8.08268Z"
                  fill="#E3E3E3"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#909090]">
                제한없음
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[343px] h-px bg-[#f3f3f3]" />
        </div>
        <p className="text-xl font-semibold text-left text-[#010101]">
          원하는 팀원의 정보를 입력해 주세요
        </p>
        <div className="w-[375px] h-1 bg-[#6284e8]" />
        <p className="text-sm text-left text-[#909090]">취소</p>
      </div>
      ;
    </>
  );
}
