'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
type TBookmarkBtnNavigationBarProps = {
  text: string;
  link: string;
};
export default function BookmarkBtnNavigationBar(
  props: TBookmarkBtnNavigationBarProps,
) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const onBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const { text, link } = props;
  return (
    <div className="w-full mb-[1.6rem] px-[1.6rem] my-[4.6rem] flex flex-row items-center justify-between">
      <div className="m-[1.2rem] text-main-600" onClick={onBookmarkClick}>
        {isBookmarked ? <FaBookmark size={17} /> : <FaRegBookmark size={17} />}
      </div>
      <button className="w-full ml-[2rem] h-[5rem] rounded-[0.5rem] bg-main-600 font-semibold text-white select-none">
        <Link href={link}>{text}</Link>
      </button>
    </div>
  );
}
