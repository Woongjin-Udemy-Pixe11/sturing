'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GoPlus } from 'react-icons/go';

export default function CreateStudyButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggle} // 배경 클릭 시 닫기
        ></div>
      )}
      <div className="fixed bottom-[4%] right-[5%] z-50">
        <button
          onClick={handleToggle}
          className="w-[5.8rem] h-[5.8rem] bg-main-600 text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none"
        >
          {isOpen ? (
            <span className="text-[3rem] rotate-45 duration-300">
              <GoPlus />
            </span> // 닫기 아이콘
          ) : (
            <span className="text-[3rem] duration-300">
              <GoPlus />
            </span> // 열기 아이콘
          )}
        </button>
        {isOpen && (
          <div className="w-[16rem] absolute bottom-[calc(11%+5.8rem)] right-[5%] bg-white px-[1.2rem] py-[1rem] rounded-[0.5rem] flex items-center">
            <img src="blue-logo.svg" alt="Icon" className="mr-[1.2rem]" />
            <Link
              href="/make-study-form/common"
              className="text-content-1 text-gray-1000"
            >
              내 스터디 개설하기
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
