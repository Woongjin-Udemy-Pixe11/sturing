'use client';
import { IoMenu } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import Link from 'next/link';
import { useState } from 'react';
import SideBar from '../sidebar/SideBar';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    if (!isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={onClickMenu}
        ></div>
      )}
      {isOpenMenu && <SideBar onClose={onClickMenu} />}
      <header className="w-full h-[5.4rem] flex justify-between items-center px-[0.8rem] text-gray-1000 m-0">
        <div className="w-[50%] flex justify-start items-center gap-[0.8rem]">
          <button onClick={onClickMenu}>
            <IoMenu className="w-[2.8rem] h-[2.8rem]" />
          </button>
          <Link href="/">
            <h1 className="w-[7.8rem] h-[2.4rem] cursor-pointer">
              <figure>
                <img src="/logo.svg" alt="스터링 로고" className="w-full" />
                <figcaption className="sr-only">
                  영어로 "sturing"이 쓰여있고, 글씨는 검정색입니다. 그리스 문자
                  감마와 비슷하게 생긴 "r"과 "i"의 타이틀은 파란색입니다.
                </figcaption>
              </figure>
            </h1>
          </Link>
        </div>
        <div className="w-[50%] flex justify-end items-center gap-[1.2rem]">
          <button>
            <GoBell className="w-[2.4rem] h-[2.4rem]" />
          </button>
          <button>
            <IoPersonOutline className="w-[2.4rem] h-[2.4rem]" />
          </button>
        </div>
      </header>
    </>
  );
}
