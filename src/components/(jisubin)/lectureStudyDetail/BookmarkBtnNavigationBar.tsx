'use client';
import OpenLoginModal from '@/app/(yejin)/my-study-list/_components/OpenLoginModal';
import {
  fetchBookmark,
  postBookmark,
  updateBookmark,
} from '@/utils/bookmark/bookmarkUtils';
import { setMaxListeners } from 'events';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
type TBookmarkBtnNavigationBarProps = {
  isApply: boolean;
  link: string;
  targetId: string;
  userId: string;
  target: string;
  isExist?: boolean;
};

export default function BookmarkBtnNavigationBar(
  props: TBookmarkBtnNavigationBarProps,
) {
  const { isApply, link, targetId, userId, target, isExist } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isClickBtn, setIsClickBtn] = useState(false);

  const onClickBookmark = () => {
    fetchBookmark(target, userId, targetId).then((bookmark) => {
      if (!bookmark) {
        postBookmark(target, userId, targetId).then((data) => {
          setIsBookmarked(!isBookmarked);
        });
      } else {
        updateBookmark(target, userId, targetId).then((data) => {
          setIsBookmarked(!isBookmarked);
        });
      }
    });
  };
  useEffect(() => {
    if (userId) {
      fetchBookmark(target, userId, targetId).then((bookmark) => {
        if (!bookmark) {
          setIsBookmarked(false);
        } else {
          setIsBookmarked(bookmark.checked);
        }
      });
    }
  }, [isBookmarked]);
  const isExistcolor = isExist === true ? 'bg-gray-600' : 'bg-main-600';

  const onClickStudyBtn = () => {
    setIsClickBtn(true);
  };

  if (!userId && isClickBtn) {
    return (
      <>
        <OpenLoginModal />
      </>
    );
  }

  return (
    <div className="w-full mb-[1.6rem] px-[1.6rem] my-[1.6rem] flex flex-row items-center justify-between">
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
        <button
          className={`w-full ml-[2rem] h-[5rem] rounded-[0.5rem] bg-main-600 font-medium text-white select-none ${isExistcolor}`}
          onClick={onClickStudyBtn}
        >
          {userId ? (
            target == 'lecture' ? (
              <Link href={link}>이 강의로 스터디 개설하기</Link>
            ) : (
              <>
                {isExist === false ? (
                  <Link href={link}>스터디 지원하기</Link>
                ) : (
                  <div>참여중인 스터디입니다.</div>
                )}
              </>
            )
          ) : target == 'lecture' ? (
            <>이 강의로 스터디 개설하기</>
          ) : (
            <>스터디 지원하기</>
          )}
        </button>
      ) : (
        <button
          className="w-full ml-[2rem] h-[5rem] rounded-[0.5rem] bg-gray-600 font-medium text-white select-none"
          disabled
        >
          모집 완료
        </button>
      )}
    </div>
  );
}
