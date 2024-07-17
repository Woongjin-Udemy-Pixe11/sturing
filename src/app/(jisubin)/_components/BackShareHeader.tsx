'use client';

import Toast from '@/components/common/Toast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BackShareHeader() {
  const [isToastShow, setIsToastShow] = useState(false);
  const router = useRouter();

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setIsToastShow(true);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickShareBtn = () => {
    const curUrl = window.document.location.href;
    copyToClipboard(curUrl);
  };

  useEffect(() => {
    if (isToastShow) {
      setTimeout(() => setIsToastShow(false), 2000);
    }
  }, [isToastShow]);

  return (
    <>
      {isToastShow && <Toast message="클립보드가 복사되었습니다." />}
      <div className="h-[5.4rem] flex flex-row items-center justify-center">
        <button onClick={() => router.back()} className="ml-[1.6rem] mr-auto">
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
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button onClick={onClickShareBtn} className="mr-[1.6rem]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1093_10946)">
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="#313131"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 9.75H18.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V19.5C19.5 19.6989 19.421 19.8897 19.2803 20.0303C19.1397 20.171 18.9489 20.25 18.75 20.25H5.25C5.05109 20.25 4.86032 20.171 4.71967 20.0303C4.57902 19.8897 4.5 19.6989 4.5 19.5V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75H7.5"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="#313131"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 6L12 2.25L15.75 6"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="#313131"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25V12.75"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1093_10946">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </>
  );
}
