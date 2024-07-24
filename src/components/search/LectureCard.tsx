'use client';
import { useState, useEffect } from 'react';
import Label from '../common/label/Label';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';

import {
  fetchBookmark,
  postBookmark,
  updateBookmark,
} from '@/utils/bookmark/bookmarkUtils';

type TLectureCardProps = {
  name: string;
  author: string;
  star: number;
  userId: string;
  targetId: string;
};

export default function LectureCard(props: TLectureCardProps) {
  const { name, author, star, userId, targetId } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const onClickBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (userId) {
      fetchBookmark('lecture', userId, targetId).then((bookmark) => {
        if (!bookmark) {
          postBookmark('lecture', userId, targetId).then((data) => {
            setIsBookmarked(!isBookmarked);
          });
        } else {
          updateBookmark('lecture', userId, targetId).then((data) => {
            setIsBookmarked(!isBookmarked);
          });
        }
      });
    }
  };

  if (userId) {
    useEffect(() => {
      fetchBookmark('lecture', userId, targetId).then((bookmark) => {
        if (!bookmark) {
          setIsBookmarked(false);
        } else {
          setIsBookmarked(bookmark.checked);
        }
      });
    }, [isBookmarked]);
  }
  return (
    <>
      <div className="p-[1.7rem] border border-gray-300 rounded-[.5rem]">
        <span className="block text-content-1 mb-[.4rem]">{name}</span>

        <p className="w-full flex justify-between items-center">
          {userId && (
            <button onClick={onClickBookmark}>
              {isBookmarked && (
                <FaBookmark className="w-[1.3rem] h-[1.3rem] mr-[.4rem] text-main-600" />
              )}
              {!isBookmarked && (
                <FaRegBookmark className="text-main-600 w-[1.3rem] h-[1.3rem] mr-[.4rem]" />
              )}
            </button>
          )}
          <span className="text-content-2 text-gray-600 flex-1">{author}</span>
          <Label isStar={true}>{star}</Label>
        </p>
      </div>
    </>
  );
}
