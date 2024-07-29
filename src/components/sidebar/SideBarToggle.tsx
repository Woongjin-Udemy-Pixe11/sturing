'use client';
import { searchLabelList } from '@/constant/searchLabelList';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function SideBarToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const clickToggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <p className="w-full flex items-center justify-between text-headline-3 mb-[1rem]">
          분야
          <button>
            {isOpen && <IoIosArrowDown onClick={clickToggleButton} />}
            {!isOpen && <IoIosArrowUp onClick={clickToggleButton} />}
          </button>
        </p>
        {isOpen && (
          <ul className="w-full flex flex-wrap gap-[.4rem]">
            {searchLabelList &&
              searchLabelList.map((label) => (
                <Link
                  href={`/search/result?field=${label.title}`}
                  key={label.title}
                >
                  <li className="flex gap-[0.8rem] px-[0.8rem] py-[0.6rem] rounded-[2.5rem] border border-gray-400 cursor-pointer">
                    <figure className="w-[2.4rem] h-[2.4rem] bg-gray-200 rounded-[50%] flex items-center  justify-center">
                      <img
                        src={label.imgSrc}
                        alt={label.imgAlt}
                        className="w-[1.6rem] h-[1.6rem]"
                      />
                      <figcaption className="sr-only">
                        {label.title}를 검색하러 이동합니다.
                      </figcaption>
                    </figure>
                    <span className="whitespace-nowrap">{label.title}</span>
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </div>
    </>
  );
}
