'use client';
import Link from 'next/link';
import { useState } from 'react';
import { GoBell } from 'react-icons/go';
import { IoPersonOutline } from 'react-icons/io5';
import { SlMenu } from 'react-icons/sl';
import LoginModal from '../(jisubin)/login/LoginModal';
import SideBar from '../sidebar/SideBar';

export default function Header({ user }: { user?: any }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    if (!isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const onClickLogin = () => {
    if (!user._id) {
      setIsOpenModal(!isOpenModal);
      if (!isOpenModal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
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
      {isOpenModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={onClickLogin}
        ></div>
      )}
      {isOpenMenu && <SideBar onClose={onClickMenu} user={user} />}
      {isOpenModal && <LoginModal onClose={onClickLogin} />}
      <header className="w-full h-[5.4rem] flex justify-between items-center px-[1.6rem] text-gray-1000 m-0 bg-white">
        <div className="w-[50%] flex justify-start items-center gap-[1rem]">
          <button onClick={onClickMenu} className="flex">
            <SlMenu className="w-[1.9rem] h-[1.9rem]" />
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
            <GoBell className="w-[2.4rem] h-[2.5rem]" />
          </button>
          <Link href={`/users/${user._id}`} className="flex justify-center">
            <button onClick={onClickLogin}>
              <IoPersonOutline className="w-[2.5rem] h-[2.4rem]" />
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
