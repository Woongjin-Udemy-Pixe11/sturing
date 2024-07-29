'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type TDetailTabBarProps = {
  text1: string;
  text1Link: string;
  text2: string;
  text2Link: string;
  text3: string;
  text3Link: string;
};
export default function DetailTabBar(props: TDetailTabBarProps) {
  const { text1, text1Link, text2, text2Link, text3, text3Link } = props;
  const pathname = usePathname();
  const tabs = [
    { name: text1, href: text1Link },
    { name: text2, href: text2Link },
    { name: text3, href: text3Link },
  ];

  return (
    <ul className="w-full px-[1.6rem] flex justify-center items-center text-center border-b-2 text-gray-700 text-content-1">
      {tabs.map((tab) => (
        <li
          key={tab.name}
          className={`${
            pathname === tab.href ? 'font-semibold text-main-600' : ''
          } w-[33%] py-[1.2rem]`}
        >
          <Link href={tab.href}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
}
