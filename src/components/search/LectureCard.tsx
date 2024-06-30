'use client';
import { useState } from 'react';
import Label from '../common/label/Label';
import { FaStar } from 'react-icons/fa';
import { CiBookmark } from 'react-icons/ci';
import { IoIosBookmark } from 'react-icons/io';

type TLectureCardProps = {
  name: string;
  author: string;
  star: number;
};

export default function LectureCard(props: TLectureCardProps) {
  const { name, author, star } = props;
  const [isBookMarked, setIsBookMarked] = useState(false);
  const onClickBookMarkButton = () => {
    setIsBookMarked(!isBookMarked);
  };
  return (
    <>
      <div className="p-[1.7rem] border border-gray-300 rounded-[.5rem]">
        <span className="block text-content-1 mb-[.4rem]">{name}</span>

        <p className="w-full flex justify-between items-center">
          <button onClick={onClickBookMarkButton}>
            {isBookMarked && (
              <CiBookmark className="w-[1.8rem] h-[1.8rem] mr-[.4rem]" />
            )}
            {!isBookMarked && (
              <IoIosBookmark className="text-main-600 w-[1.8rem] h-[1.8rem] mr-[.4rem]" />
            )}
          </button>
          <span className="text-content-2 text-gray-600 flex-1">{author}</span>
          <Label isStar={true}>{star}</Label>
        </p>
      </div>
    </>
  );
}
