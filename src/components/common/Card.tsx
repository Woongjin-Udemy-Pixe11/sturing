'use client';

import { TStudy } from '@/types/TStudy';
import {
  fetchBookmark,
  postBookmark,
  updateBookmark,
} from '@/utils/bookmark/bookmarkUtils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
import Label from './label/Label';

type TCardSizeList = {
  [key: string]: string;
};
export default function Card(props: TStudy) {
  const {
    userId,
    studyId,
    studyImage,
    studyMeetings,
    studyType,
    studyCategory,
    studyName,
    studyStart,
    studyEnd,
    studyPlace,
    studyJoinMember,
    studyMember,
  } = props;
  console.log(studyCategory);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const onClickBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (userId) {
      fetchBookmark('study', userId, studyId).then((bookmark) => {
        if (!bookmark) {
          postBookmark('study', userId, studyId).then((data) => {
            setIsBookmarked(!isBookmarked);
          });
        } else {
          updateBookmark('study', userId, studyId).then((data) => {
            setIsBookmarked(!isBookmarked);
          });
        }
      });
    }
  };
  if (userId) {
    useEffect(() => {
      fetchBookmark('study', userId, studyId).then((bookmark) => {
        if (!bookmark) {
          setIsBookmarked(false);
        } else {
          setIsBookmarked(bookmark.checked);
        }
      });
    }, [isBookmarked]);
  }

  const start = studyStart.split('T')[0].split('-').slice(1).join('.');
  const end = studyEnd.split('T')[0].split('-').slice(1).join('.');

  let isStudyEnd = false;
  if (new Date(studyEnd).getTime() < new Date().getTime()) {
    isStudyEnd = true;
  }
  return (
    <div className="w-full m-auto">
      <div className="relative w-full min-h-[15rem] mb-[1.2rem]">
        <Image
          src={studyImage}
          fill={true}
          alt="Card Image"
          className={`${
            isStudyEnd
              ? 'rounded-[0.8rem] object-cover grayscale'
              : 'rounded-[0.8rem] object-cover'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          priority
          style={{ minWidth: '163px', minHeight: '150px' }}
        />
        {userId && (
          <button
            className="absolute top-0 right-0 m-[0.8rem] p-[0.15rem] text-white drop-shadow-bookmark"
            onClick={onClickBookmark}
          >
            {isBookmarked ? (
              <FaBookmark size={13} />
            ) : (
              <FaRegBookmark size={13} />
            )}
          </button>
        )}
        <div className="absolute bottom-0 left-0 right-0 rounded-b-[0.8rem] bg-black bg-opacity-80 text-white text-center text-content-2 p-[0.3rem] select-none">
          {isStudyEnd ? '종료' : studyMeetings}
        </div>
      </div>
      <div className="mb-[0.4rem] [&>span]:ml-0 [&>span]:mr-2 select-none">
        <Label isBlue children={studyType} />
        <Label children={studyCategory} />
      </div>
      <div className="mb-[0.8rem]">
        <div
          className="h-[5rem]
           font-medium line-clamp-2  
        mt-[0.1rem] mb-[1.2rem]"
        >
          {studyName}
        </div>
        <div className="flex items-center mb-1 text-gray-600 text-content-2 pb-[.8rem] border-b border-gray-300">
          <div className="flex flex-row pr-[0.8rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <path
                fill="#AFAFAF"
                d="M6 4.313a.567.567 0 0 1-.563-.563V1.5c0-.308.255-.563.563-.563.308 0 .563.255.563.563v2.25A.567.567 0 0 1 6 4.313ZM12 4.313a.567.567 0 0 1-.563-.563V1.5c0-.308.256-.563.563-.563.307 0 .563.255.563.563v2.25a.567.567 0 0 1-.563.563Z"
              />
              <path
                fill="#AFAFAF"
                d="M15.75 6.375v6.375c0 2.25-1.125 3.75-3.75 3.75H6c-2.625 0-3.75-1.5-3.75-3.75V6.375c0-2.25 1.125-3.75 3.75-3.75h6c2.625 0 3.75 1.5 3.75 3.75Z"
                opacity=".4"
              />
              <path
                fill="#AFAFAF"
                d="M12 8.813H6a.567.567 0 0 1-.563-.563c0-.308.255-.563.563-.563h6c.307 0 .563.255.563.563a.567.567 0 0 1-.563.563ZM9 12.563H6A.567.567 0 0 1 5.437 12c0-.307.255-.563.563-.563h3c.307 0 .563.256.563.563a.567.567 0 0 1-.563.563Z"
              />
            </svg>
            <span>
              {start}~{end}
            </span>
          </div>
          <div className="h-[1.2rem] leading-[1.2rem] border-l border-gray-400"></div>
          <div className="flex flex-row pl-[0.8rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <path
                fill="#BABABA"
                d="M9.076 1a6.072 6.072 0 0 0-4.294 1.788A6.118 6.118 0 0 0 3 7.098a6.052 6.052 0 0 0 1.224 3.66s.166.22.193.25l4.659 5.516 4.661-5.518c.025-.03.19-.248.19-.248l.001-.001a6.05 6.05 0 0 0 1.224-3.658 6.118 6.118 0 0 0-1.782-4.31A6.072 6.072 0 0 0 9.076 1Zm0 8.317a2.203 2.203 0 0 1-2.041-1.37 2.226 2.226 0 0 1 .479-2.416 2.207 2.207 0 0 1 3.771 1.568c0 .588-.233 1.152-.648 1.567-.414.416-.975.65-1.561.65Z"
              />
            </svg>
            <span className="w-[5.1rem] truncate">{studyPlace}</span>
          </div>
        </div>
      </div>
      <div className="my-2 border-t border-white"></div>
      <p className="text-gray-700 text-content-2">
        {isStudyEnd ? '종료' : '모집 중'} {studyJoinMember}/{studyMember}
      </p>
    </div>
  );
}
