'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabBar({ studyId }: any) {
  const pathname = usePathname();
  const tabs = [
    { name: '팀', href: `/my-study-main/${studyId}/team` },
    { name: '개인', href: `/my-study-main/${studyId}/my-todo` },
    { name: '일정', href: `/my-study-main/${studyId}/calendar` },
    { name: '게시판', href: `/my-study-main/${studyId}/board` },
  ];

  return (
    <ul className="w-full px-[1.6rem] flex justify-center items-center text-center border-b-2 border-t-2 bg-white">
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
