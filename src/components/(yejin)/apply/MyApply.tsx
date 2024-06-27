import LongButton from '@/components/common/LongButton';
import StudyTop from '../StudyTop';

export default function MyApply() {
  return (
    <div className="w-full h-screen flex flex-col justify-between ">
      <div>
        <StudyTop content="내가 작성한 지원서" />
        <div className="flex justify-center bg-gray-100 p-[1.8rem] mb-[2.3rem]">
          <h2 className="text-content-1 text-gray-1000 font-semibold">
            쏘카 5개 프로젝트 디자인 실무 마스터 스터디
          </h2>
        </div>
        <div className="flex flex-col px-[1.6rem]">
          <div className="flex justify-between items-center mb-[2rem]">
            <div className="flex items-center gap-[0.8rem]">
              <img
                src=""
                alt=""
                className="bg-gray-500 w-[4rem] h-[4rem] mr-[0.4rem] border border-gray-300 rounded-full"
              />
              <span className="text-content-1 text-gray-900 font-bold">
                웅진
              </span>
              <span className="text-content-1 text-gray-400">|</span>
              <span className="text-content-1 text-gray-600">비기너</span>
            </div>
            <div className="flex justify-center items-center gap-[0.4rem] bg-main-200 px-[0.6rem] py-[0.3rem] rounded-[0.3rem]">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.93462 12.4602C4.01063 12.2344 3.25789 11.5298 2.8499 10.4776C2.18302 8.74424 2.45069 6.07227 4.0875 4.01239C3.59986 3.7416 3.01413 3.49833 2.00663 3.25208L0.958716 2.99596L1.47263 0.893319L2.52054 1.14944C4.25 1.57214 5.0669 2.04926 5.79226 2.51545C6.87954 1.86301 8.30365 1.31577 9.76652 0.995404L10.8222 0.764293L11.2817 2.87888L10.226 3.10999C9.3182 3.30858 8.42164 3.6129 7.66055 3.97036C9.01216 5.55356 9.24961 7.79408 8.80382 9.51291C8.33031 11.3451 7.12776 12.5043 5.6662 12.5389C5.41331 12.5458 5.16899 12.5175 4.93732 12.4609L4.93462 12.4602ZM5.88068 5.23727C4.71221 6.63073 4.42002 8.53871 4.86754 9.69785C5.13319 10.3863 5.49774 10.3782 5.61814 10.3762C6.12596 10.3658 6.53157 9.66406 6.71189 8.97301C7.0269 7.75425 6.81364 6.209 5.88068 5.23727Z"
                  fill="#6284E8"
                />
              </svg>
              <span className="text-main-600 text-content-1">지수 80%</span>
            </div>
          </div>
          <div className="px-[2rem] py-[2.4rem] border border-gray-300 rounded-[0.8rem] min-h-[30rem]">
            <span className="text-content-2 text-main-500">
              2024.06.15 14:30 지원
            </span>
            <p className="text-body-1 text-gray-900 mt-[0.8rem] mb-[2rem] pb-[2rem] border-b border-gray-300">
              안녕하세요. 열정넘치는 지원자 000입니다.
            </p>
            <span className="text-gray-700 text-content-1">나의 각오</span>
            <p className="text-body-2 text-gray-900 mt-[0.4rem]">
              피그마에 관심이 생겨 참여해보고 싶어 지원하게되었습니다.
            </p>
          </div>
          <p className="flex py-[0.8rem] gap-[0.4rem] justify-end items-center font-medium text-content-2 text-gray-500">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 14.25C10.9518 14.25 13.75 11.4518 13.75 8C13.75 4.54822 10.9518 1.75 7.5 1.75C4.04822 1.75 1.25 4.54822 1.25 8C1.25 11.4518 4.04822 14.25 7.5 14.25ZM7.5 15.5C11.6421 15.5 15 12.1421 15 8C15 3.85786 11.6421 0.5 7.5 0.5C3.35786 0.5 0 3.85786 0 8C0 12.1421 3.35786 15.5 7.5 15.5Z"
                fill="#CACACA"
              />
              <path
                d="M8.37264 9.87797H6.63864L6.43984 4.78613H8.5604L8.37264 9.87797ZM7.50012 12.2861C7.305 12.2861 7.1246 12.2419 6.95893 12.1535C6.79327 12.065 6.66257 11.946 6.56685 11.7963C6.47113 11.6433 6.42511 11.4766 6.42879 11.2963C6.42511 11.1195 6.47113 10.9562 6.56685 10.8065C6.66257 10.6569 6.79327 10.5378 6.95893 10.4494C7.1246 10.361 7.305 10.3167 7.50012 10.3167C7.6842 10.3167 7.85907 10.361 8.02474 10.4494C8.19041 10.5378 8.32294 10.6569 8.42234 10.8065C8.52175 10.9562 8.57145 11.1195 8.57145 11.2963C8.57145 11.4766 8.52175 11.6433 8.42234 11.7963C8.32294 11.946 8.19041 12.065 8.02474 12.1535C7.85907 12.2419 7.6842 12.2861 7.50012 12.2861Z"
                fill="#CACACA"
              />
            </svg>
            <span>수락하면 다시 취소할 수 없습니다.</span>
          </p>
        </div>
      </div>
      <div className="flex p-[1.6rem] items-end gap-[1rem]">
        <LongButton color="white">거절하기</LongButton>
        <LongButton color="blue">수락하기</LongButton>
      </div>
    </div>
  );
}
