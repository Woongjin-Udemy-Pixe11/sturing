'use client';

import SubHeader from '@/components/common/SubHeader';
import Label from '@/components/common/label/Label';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import KebabModal from '@/components/common/modal/KebabModal';
import { differenceInDays, differenceInHours } from 'date-fns';

export default function NoticeBoardDetail(props: any) {
  const { notice, writer } = props;
  const title = notice.title;
  const content = notice.content;

  const nickname = writer.nickname;
  const profileImage = writer.image;

  const now = new Date();
  const createdTime = new Date(notice.createdAt);
  const diffInHours = differenceInHours(now, createdTime);
  const diffInDays = differenceInDays(now, createdTime);

  const views = notice.views;

  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked);
    setCount((prevCount) => (isChecked ? prevCount - 1 : prevCount + 1));
  };

  const checkedColor = isChecked
    ? 'text-blue-700 bg-main-100 border-main-600'
    : 'text-gray-700 bg-gray-100 border-gray-300';

  const [modal, setModal] = useState(false);

  const onClickMenu = () => {
    setModal(!modal);
  };

  return (
    <>
      <SubHeader eddit onClickMenu={onClickMenu} />
      {modal && (
        <div className="relative inset-0 bg-black bg-opacity-50 z-10">
          <KebabModal />
        </div>
      )}
      <div className="bg-white p-[2rem] pt-[2.5rem] h-[85vh]">
        <div className="flex justify-between items-center pb-[1.8rem] mb-[1.8rem] border-b border-gray-300">
          <div className="flex flex-grow gap-[0.8rem]">
            <div className="w-[4rem] h-[4rem]">
              <img src={profileImage} alt="" className="w-full" />
            </div>
            <div className="text-content-2 text-gray-700">
              <span className="flex gap-[0.4rem] items-center">
                <h3 className="text-content-1 font-semibold text-gray-900">
                  {nickname}
                </h3>
                <p>팀장</p>
              </span>
              <span>
                {diffInDays > 0
                  ? diffInDays + '일 전'
                  : diffInHours + '시간 전'}
              </span>
              <span> ∙ 조회 {views}</span>
            </div>
          </div>
          <div className="shrink-0">
            <Label children={'필독'} />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-headline-3 text-gray-900">{title}</h2>
          <p className="text-content-1  text-gray-600 border-b border-gray-300 py-[1.6rem] pb-[2.5rem]">
            {content}
          </p>
        </div>
        <button
          onClick={handleClick}
          className={`${checkedColor} mt-[1.6rem] min-w-[4rem] flex justify-center flex-grow-0 items-center gap-[0.6rem] font-black px-[1.2rem] py-[0.4rem] text-content-2 border rounded-[8rem]`}
        >
          <FaCheck /> {count}
        </button>
      </div>
    </>
  );
}
