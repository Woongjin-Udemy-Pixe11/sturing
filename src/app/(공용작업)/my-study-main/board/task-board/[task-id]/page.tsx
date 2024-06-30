import { GoChevronLeft } from 'react-icons/go';
import { MdMoreHoriz, MdMoreVert } from 'react-icons/md';
import Image from 'next/image';
import EmojiSelectBtn from '../../_jisubin_comp/EmojiSelectBtn';
export default function page() {
  return (
    <div className="w-full h-[5.4rem] bg-gray-100">
      <div className="flex items-center justify-between px-[1.5rem] py-[1.6rem]">
        <button>
          <GoChevronLeft size={24} className="" />
        </button>
        <button>
          <MdMoreHoriz size={24} />
        </button>
      </div>

      <div className="bg-white px-[1.6rem] flex flex-col gap-y-[2rem] py-[3rem]">
        <div className="flex flex-row items-center">
          <Image
            src="/images/dummy-member-img1.png"
            width={28}
            height={28}
            alt="Picture of the author"
            className="rounded-full aspect-square object-cover"
          />
          <div className="flex flex-col items-center justify-center gap-x-[0.4rem] ml-[0.8rem]">
            <div className="text-content-1 text-gray-900 font-semibold">
              갓생살자
            </div>
            <div className="text-content-2 text-gray-700">11시간 전</div>
          </div>
        </div>

        <div className="flex flex-col gap-y-[2rem]">
          <div className="flex flex-col justify-start gap-y-[2rem]">
            <h1 className="text-[1.8rem] text-gray-900 font-semibold">
              1주차 6월 7일 체크리스트 과제
            </h1>
            <p className="text-gray-700">
              1강 5분 복습, 2강 듣고 과제 노트 작성하기 및 3강 예습하기 총 1시간
              동안 과제 인증 합니다. 내일은 시간이 조금 부족해서 체크리스트 다
              완료할 수 있을지...ㅠㅠ
            </p>
          </div>

          <Image
            src="/images/dummy-task-detail-img1.png"
            width={343}
            height={343}
            alt="Picture of the author"
            className="rounded-[0.8rem] aspect-square object-cover"
          />
        </div>
        <EmojiSelectBtn />
        <div>
          <div className="flex flex-row items-center justify-start gap-x-[0.4rem] text-content-2 mb-[1.2rem]">
            <div>댓글</div>
            <span>2</span>
          </div>

          <div className="mb-[2.4rem]">
            <div className="flex flex-row justify-start mb-[0.4rem]">
              <Image
                src="/images/dummy-member-img1.png"
                width={38}
                height={38}
                alt="Picture of the user"
                className="rounded-full aspect-square object-cover"
              />
              <div className="flex flex-col pl-[0.8rem]">
                <div className="text-content-1 text-gray-900">웅진</div>
                <div className="flex flex-row text-content-2 text-gray-700 gap-x-[0.4rem]">
                  <div>팀장</div>
                  <div>1시간 전</div>
                </div>
              </div>
              <button className="ml-auto">
                <MdMoreVert />
              </button>
            </div>
            <div className="ml-[4.8rem]">
              <p className="text-content-1 text-gray-1000 mb-[0.4rem]">
                곧 스터디가 끝나가니 마지막 스퍼트 내봅시다!
              </p>
              <div className="flex flex-row items-center gap-x-[0.4rem] mb-[0.4rem]">
                <div>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M8.74349 5.46737L8.74341 5.46736L8.74224 5.47587C8.70129 5.77275 8.76758 6.10128 8.9924 6.35461C9.19954 6.59502 9.49651 6.71919 9.80005 6.71919H12.3625C12.7258 6.71919 12.9877 6.86414 13.1204 7.05412C13.2534 7.24702 13.2947 7.50439 13.1805 7.81601L13.1776 7.82392L13.175 7.83192L11.6375 12.5132L11.6314 12.5317L11.6268 12.5507C11.5658 12.8008 11.388 13.0582 11.1222 13.2573C10.8575 13.4555 10.5403 13.5692 10.2438 13.5692H7.8063C7.64734 13.5692 7.44172 13.5409 7.25137 13.4848C7.04926 13.4254 6.92922 13.3538 6.88485 13.3094L6.8623 13.2868L6.83706 13.2673L4.9563 11.8137V6.65197L7.5836 2.74837L7.58361 2.74838L7.58581 2.74506C7.65014 2.64781 7.78804 2.53441 7.97605 2.46796C8.15969 2.40305 8.34609 2.39879 8.50005 2.45632L8.50772 2.45918L8.51549 2.4618C8.90091 2.59158 9.14632 3.03774 9.06844 3.38467L9.06479 3.40092L9.06224 3.41737L8.74349 5.46737Z"
                      fill="#4171FF"
                      stroke="#4171FF"
                    />
                    <path
                      d="M2.6125 4.9873H3.25625C3.69439 4.9873 3.87526 5.07554 3.9557 5.15225C4.03028 5.22339 4.11875 5.38122 4.11875 5.7873V12.0748C4.11875 12.4809 4.03028 12.6387 3.9557 12.7099C3.87526 12.7866 3.69439 12.8748 3.25625 12.8748H2.6125C2.17436 12.8748 1.99349 12.7866 1.91305 12.7099C1.83847 12.6387 1.75 12.4809 1.75 12.0748V5.7873C1.75 5.38122 1.83847 5.22339 1.91305 5.15225C1.99349 5.07554 2.17436 4.9873 2.6125 4.9873Z"
                      fill="#4171FF"
                      stroke="#4171FF"
                    />
                  </svg>
                </div>
                <div className="text-main-600 text-content-2">
                  좋아요 <span>3</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-start mb-[0.4rem]">
              <Image
                src="/images/dummy-member-img1.png"
                width={38}
                height={38}
                alt="Picture of the user"
                className="rounded-full aspect-square object-cover"
              />
              <div className="flex flex-col pl-[0.8rem]">
                <div className="text-content-1 text-gray-900">웅진</div>
                <div className="flex flex-row text-content-2 text-gray-700 gap-x-[0.4rem]">
                  <div>팀장</div>
                  <div>1시간 전</div>
                </div>
              </div>
              <button className="ml-auto">
                <MdMoreVert />
              </button>
            </div>
            <div className="ml-[4.8rem]">
              <p className="text-content-1 text-gray-1000 mb-[0.4rem]">
                곧 스터디가 끝나가니 마지막 스퍼트 내봅시다!
              </p>
              <div className="flex flex-row items-center gap-x-[0.4rem] mb-[0.4rem]">
                <div>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M8.74349 5.46737L8.74341 5.46736L8.74224 5.47587C8.70129 5.77275 8.76758 6.10128 8.9924 6.35461C9.19954 6.59502 9.49651 6.71919 9.80005 6.71919H12.3625C12.7258 6.71919 12.9877 6.86414 13.1204 7.05412C13.2534 7.24702 13.2947 7.50439 13.1805 7.81601L13.1776 7.82392L13.175 7.83192L11.6375 12.5132L11.6314 12.5317L11.6268 12.5507C11.5658 12.8008 11.388 13.0582 11.1222 13.2573C10.8575 13.4555 10.5403 13.5692 10.2438 13.5692H7.8063C7.64734 13.5692 7.44172 13.5409 7.25137 13.4848C7.04926 13.4254 6.92922 13.3538 6.88485 13.3094L6.8623 13.2868L6.83706 13.2673L4.9563 11.8137V6.65197L7.5836 2.74837L7.58361 2.74838L7.58581 2.74506C7.65014 2.64781 7.78804 2.53441 7.97605 2.46796C8.15969 2.40305 8.34609 2.39879 8.50005 2.45632L8.50772 2.45918L8.51549 2.4618C8.90091 2.59158 9.14632 3.03774 9.06844 3.38467L9.06479 3.40092L9.06224 3.41737L8.74349 5.46737Z"
                      fill="#4171FF"
                      stroke="#4171FF"
                    />
                    <path
                      d="M2.6125 4.9873H3.25625C3.69439 4.9873 3.87526 5.07554 3.9557 5.15225C4.03028 5.22339 4.11875 5.38122 4.11875 5.7873V12.0748C4.11875 12.4809 4.03028 12.6387 3.9557 12.7099C3.87526 12.7866 3.69439 12.8748 3.25625 12.8748H2.6125C2.17436 12.8748 1.99349 12.7866 1.91305 12.7099C1.83847 12.6387 1.75 12.4809 1.75 12.0748V5.7873C1.75 5.38122 1.83847 5.22339 1.91305 5.15225C1.99349 5.07554 2.17436 4.9873 2.6125 4.9873Z"
                      fill="#4171FF"
                      stroke="#4171FF"
                    />
                  </svg>
                </div>
                <div className="text-main-600 text-content-2">
                  좋아요 <span>3</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-[1.6rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>

          <div className=" h-[3.8rem] rounded-[8rem] bg-gray-100 border-gray-300 border-[0.1rem] relative flex flex-row items-center">
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
    </div>
  );
}
