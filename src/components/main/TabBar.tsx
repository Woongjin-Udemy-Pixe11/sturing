'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathname = usePathname();
  const tabs = [
    { name: '추천', href: '/' },
    { name: '검색', href: '/search' },
    { name: '내 스터디', href: '/my-study' },
  ];

  return (
    <ul className="w-full px-[1.6rem] flex justify-center items-center text-center border-b-2 border-t-2">
      {tabs.map((tab) => (
        <li
          key={tab.name}
          className={`${
            pathname === tab.href ? 'font-bold' : ''
          } w-[33%] py-[1.2rem]`}
        >
          <Link href={tab.href}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
}
