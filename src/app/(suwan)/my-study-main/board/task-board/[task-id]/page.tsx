export default function Task() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center relative overflow-hidden gap-2.5 px-1.5 py-px rounded-[5px] bg-white/30">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-center text-white">
            강의
          </p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 px-2 py-0.5 rounded-[80px] bg-[#ecf1ff] border border-[#4171ff]">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
              ✔️
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#010101]">
              3
            </p>
          </div>
        </div>
        <p className="w-[303px] text-xl font-semibold text-left text-[#010101]">
          이번주 스터디 시간 및 장소 확인 하시고 문의 사항 있으시면
          말씀해주세요.
        </p>
        <div className="flex justify-start items-center relative gap-0.5 px-1.5 py-0.5 rounded-[3px] bg-[#ecf1ff]">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#4171ff]">
            필독
          </p>
        </div>
        <div className="flex justify-start items-center w-[303px] h-[22px] relative gap-2">
          <svg
            width={303}
            height={1}
            viewBox="0 0 303 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-stretch flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <line x1={303} y1="0.500977" y2="0.500977" stroke="#E4E4E4" />
          </svg>
        </div>
        <div className="flex justify-center items-center relative gap-2">
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx={20}
              cy="20.001"
              r="19.5"
              fill="#D9E3FF"
              stroke="#E3E3E3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.3804 7.4438C26.7325 7.67442 30.4678 10.5422 32.4294 13.6931L32.4375 13.6853C34.5277 17.0439 34.5491 20.5358 32.4899 22.7979C32.1377 23.1883 31.7419 23.5238 31.3201 23.7936C29.6379 24.8713 27.4879 24.9985 25.3047 24.0965C21.7382 22.6216 18.1038 18.4134 17.3128 13.0106C14.8184 13.6365 13.2527 15.6221 12.3179 17.3988C16.1488 18.036 19.387 20.6485 21.1673 23.5082C23.2575 26.8668 23.2789 30.3586 21.2197 32.6208C20.8675 33.0112 20.4717 33.3467 20.0499 33.6165C18.3677 34.6942 16.2178 34.8213 14.0345 33.9194C10.4475 32.4298 6.7852 28.1829 6.02682 22.7329C4.9127 23.0831 3.69981 23.6228 1.86789 24.795L0.762589 25.5045C0.316215 23.9483 0.0536839 22.3143 1.03784e-06 20.6275C2.80304 18.9078 4.57528 18.3951 6.22103 17.9965L7.05746 17.8707C8.35 14.0765 11.5977 8.98168 17.4851 8.25468L17.4879 8.1799C18.0663 5.60718 19.284 2.67127 20.9006 1.47426e-06C22.5614 0.0744509 24.1695 0.351451 25.7008 0.806893L24.7832 2.31379C23.7756 3.9762 22.9376 5.77526 22.3804 7.4438ZM17.8723 29.5786L17.8727 29.5782C18.5866 28.7944 18.1114 27.1654 17.3228 25.8989C15.9345 23.6653 13.2844 21.765 10.466 21.7804C10.8948 25.5611 13.3637 28.7478 15.7603 29.741C17.1852 30.3318 17.7031 29.764 17.8723 29.5786ZM29.1392 19.7621L29.1396 19.7616C29.8535 18.9778 29.3783 17.3489 28.5897 16.0824C27.2014 13.8487 24.5512 11.9485 21.7329 11.9639C22.1617 15.7445 24.6306 18.9313 27.0272 19.9244C28.4521 20.5152 28.97 19.9475 29.1392 19.7621Z"
              fill="#6284E8"
            />
          </svg>
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#313131]">
                웅진
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#676767]">
                팀장
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#676767]">
                11시간 전
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#676767]">
                ∙
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#676767]">
                조회 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
