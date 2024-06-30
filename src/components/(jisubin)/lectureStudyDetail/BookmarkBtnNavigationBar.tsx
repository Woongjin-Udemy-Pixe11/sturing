'use client';
import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
type TBookmarkBtnNavigationBarProps = {
  text: string;
};
export default function BookmarkBtnNavigationBar(
  props: TBookmarkBtnNavigationBarProps,
) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const onBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const { text } = props;
  return (
    <div className="w-full mb-[1.6rem] my-[4.6rem] flex flex-row items-center justify-between">
      <div className="p-[1.2rem] text-main-600" onClick={onBookmarkClick}>
        {isBookmarked ? <FaBookmark size={17} /> : <FaRegBookmark size={17} />}
      </div>
      <button className="w-[28.7rem] h-[5rem] rounded-[0.5rem] bg-main-600 font-semibold text-white select-none">
        {text}
      </button>
    </div>
  );
}
