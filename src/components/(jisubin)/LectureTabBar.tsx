'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LectureTabBar() {
  const pathname = usePathname();
  const tabs = [
    { name: '강의소개', href: '/lectureDetail' },
    { name: '스터디', href: '/lectureDetail/study' },
    { name: '평점', href: '/lectureDetail/rating' },
  ];

  return (
    <ul className="w-full px-[1.6rem] flex justify-center items-center text-center border-b-2 text-gray-700 text-content-1">
      {tabs.map((tab) => (
        <li
          key={tab.name}
          className={`${
            pathname === tab.href ? 'font-bold text-main-600' : ''
          } w-[33%] py-[1.2rem]`}
        >
          <Link href={tab.href}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
}
