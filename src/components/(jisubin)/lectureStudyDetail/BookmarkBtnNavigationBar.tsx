'use client';
import {
  fetchBookmark,
  postBookmark,
  updateBookmark,
} from '@/utils/study-detail/bookmarkUtils';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
type TBookmarkBtnNavigationBarProps = {
  isApply: boolean;
  link: string;
  targetId: string;
  userId: string;
  target: string;
};

export default function BookmarkBtnNavigationBar(
  props: TBookmarkBtnNavigationBarProps,
) {
  const { isApply, link, targetId, userId, target } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const onClickBookmark = () => {
    fetchBookmark(userId, targetId).then((bookmark) => {
      if (!bookmark) {
        postBookmark(userId, targetId).then((data) => {
          setIsBookmarked(!isBookmarked);
        });
      } else {
        updateBookmark(userId, targetId).then((data) => {
          setIsBookmarked(!isBookmarked);
        });
      }
    });
  };
  useEffect(() => {
    if (userId) {
      fetchBookmark(userId, targetId).then((bookmark) => {
        if (!bookmark) {
          setIsBookmarked(false);
        } else {
          setIsBookmarked(bookmark.checked);
        }
      });
    }
  }, [isBookmarked]);

  return (
    <div className="w-full mb-[1.6rem] px-[1.6rem] my-[4.6rem] flex flex-row items-center justify-between">
      {userId && (
        <div className="m-[1.2rem] text-main-600" onClick={onClickBookmark}>
          {isBookmarked ? (
            <FaBookmark size={17} />
          ) : (
            <FaRegBookmark size={17} />
          )}
        </div>
      )}

      {isApply ? (
        <button className="w-full ml-[2rem] h-[5rem] rounded-[0.5rem] bg-main-600 font-semibold text-white select-none">
          {target == 'lecture' ? (
            <Link href={link}>이 강의로 스터디 개설하기</Link>
          ) : (
            <Link href={link}>스터디 지원하기</Link>
          )}
        </button>
      ) : (
        <button
          className="w-full ml-[2rem] h-[5rem] rounded-[0.5rem] bg-gray-600 font-semibold text-white select-none"
          disabled
        >
          모집 완료
        </button>
      )}
    </div>
  );
}
