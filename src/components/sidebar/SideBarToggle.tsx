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
        <button
          onClick={clickToggleButton}
          className="w-full flex items-center justify-between text-headline-3"
        >
          <p>분야</p>
          <span>
            {isOpen && <IoIosArrowDown />}
            {!isOpen && <IoIosArrowUp />}
          </span>
        </button>
        {isOpen && (
          <ul className="w-full flex flex-wrap gap-[.8rem] pt-[1.6rem]">
            {searchLabelList &&
              searchLabelList.map((label) => (
                <Link
                  href={`/search/result?field=${label.title}`}
                  key={label.title}
                >
                  <li className="flex gap-[0.4rem] px-[.9rem] py-[.8rem] rounded-[2.5rem] border border-gray-400 cursor-pointer text-content-1 tracking-[-0.03rem] items-center justify-center">
                    <figure className="w-[2.2rem] h-[2.2rem] bg-gray-200 rounded-[50%] flex items-center justify-center">
                      <img
                        src={label.imgSrc}
                        alt={label.imgAlt}
                        className="w-[1.5rem] h-[1.5rem]"
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
