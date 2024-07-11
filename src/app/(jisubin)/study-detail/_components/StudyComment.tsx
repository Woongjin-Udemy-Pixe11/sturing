import Image from 'next/image';
import { HiEllipsisVertical } from 'react-icons/hi2';

export default function StudyComment() {
  return (
    <>
      <div className=" bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center justify-between mt-[2.4rem] pb-[1.2rem]">
            <h2 className="mx-[2rem] font-semibold text-gray-950">댓글</h2>
            <div className="pr-[2rem]">
              <HiEllipsisVertical />
            </div>
          </div>

          <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>

          <div>
            <div className="flex flex-row items-center mx-[2rem] gap-x-[0.8rem] text-content-2 justify-between">
              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/images/dummy-member-img1.png"
                  width={28}
                  height={28}
                  alt="User Image"
                  className="rounded-full border-gray-300 border-[0.1rem]"
                />
                <span className="ml-[0.5rem]">채니</span>
              </div>
              <span className="text-gray-600">6월 7일 오전 12:42</span>
            </div>

            <p className="text-gray-700 text-content-2 mx-[2rem] mt-[0.8rem] mb-[2rem]">
              지원해도 될까요??
            </p>
          </div>

          <div className="h-[3rem] rounded-[8rem] bg-gray-100 border-gray-300 border-[0.1rem] mx-[2rem] relative flex flex-row items-center ">
            <input
              placeholder="댓글을 입력하세요."
              className="text-content-2 text-gray-600 pl-[1.5rem] placeholder:bg-transparent focus:outline-none"
            ></input>
            <div className="absolute right-0 pr-[1rem]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6647 16.2225C9.77967 16.2225 8.52717 15.6 7.53717 12.6225L6.99717 11.0025L5.37717 10.4625C2.40717 9.47249 1.78467 8.21999 1.78467 7.33499C1.78467 6.45749 2.40717 5.19749 5.37717 4.19999L11.7447 2.07749C13.3347 1.54499 14.6622 1.70249 15.4797 2.51249C16.2972 3.32249 16.4547 4.65749 15.9222 6.24749L13.7997 12.615C12.8022 15.6 11.5497 16.2225 10.6647 16.2225ZM5.72967 5.27249C3.64467 5.96999 2.90217 6.79499 2.90217 7.33499C2.90217 7.87499 3.64467 8.69999 5.72967 9.38999L7.61967 10.02C7.78467 10.0725 7.91967 10.2075 7.97217 10.3725L8.60217 12.2625C9.29217 14.3475 10.1247 15.09 10.6647 15.09C11.2047 15.09 12.0297 14.3475 12.7272 12.2625L14.8497 5.89499C15.2322 4.73999 15.1647 3.79499 14.6772 3.30749C14.1897 2.81999 13.2447 2.75999 12.0972 3.14249L5.72967 5.27249Z"
                  fill="#B5B5B5"
                />
                <path
                  d="M7.5826 10.8C7.4401 10.8 7.2976 10.7475 7.1851 10.635C6.9676 10.4175 6.9676 10.0575 7.1851 9.84L9.8701 7.1475C10.0876 6.93 10.4476 6.93 10.6651 7.1475C10.8826 7.365 10.8826 7.725 10.6651 7.9425L7.9801 10.635C7.8751 10.7475 7.7251 10.8 7.5826 10.8Z"
                  fill="#B5B5B5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
