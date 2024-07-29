'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathname = usePathname();
  const tabs = [
    { name: '추천', href: '/' },
    { name: '검색', href: '/search' },
    { name: '내 스터디', href: '/my-study-list' },
  ];

  return (
    <ul className="w-full px-[1.6rem] flex justify-center items-center text-center border-b border-t border-gray-300">
      {tabs.map((tab) => (
        <li
          key={tab.name}
          className={`${
            pathname === tab.href
              ? 'font-medium text-gray-1000'
              : 'text-gray-700'
          } w-[33%] py-[1.2rem] `}
        >
          <Link href={tab.href}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
}
