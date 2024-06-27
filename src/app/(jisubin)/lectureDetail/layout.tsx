import BookmarkBtnNavigationBar from '@/components/(jisubin)/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/(jisubin)/lectureStudyDetail/DetailTabBar';
import CourseLink from '@/components/common/CourseLink';
import Label from '@/components/common/Label';
import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

export default function LectureDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="w-[375px] m-auto">
        <div className="bg-gradient-to-tr from-[#D9E3FF] to-[#FFE4E0] ">
          <div className="w-[37.5rem] h-[5.4rem] flex flex-row items-center justify-center">
            <div className="ml-[1.6rem] mr-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19L8 11.5L15 4"
                  stroke="#010101"
                  stroke-width="1.7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="mr-[1.6rem]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1093_10946)">
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="#313131"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="#313131"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 6L12 2.25L15.75 6"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="#313131"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.25V12.75"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1093_10946">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="mt-[3.8rem] flex flex-col items-center justify-center">
            <Label isBlue={false}>{'4.5'}</Label>
            <div className="w-[30rem] h-[5.4rem] mt-[1.8rem] mb-[4rem]">
              <h1 className="text-center font-semibold">
                UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-[1.6rem] my-[2rem]">
          <CourseLink
            courseTitle="UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z"
            courseLink="/"
          />
        </div>
        <div className="mx-[1.6rem]">
          <DetailTabBar
            text1="강의소개"
            text1Link="/lectureDetail"
            text2="스터디"
            text2Link="/lectureDetail/study"
            text3="평점"
            text3Link="/lectureDetail/rating"
          />
        </div>

        {children}

        <BookmarkBtnNavigationBar text="이 강의로 스터디 개설하기" />
      </body>
    </html>
  );
}
