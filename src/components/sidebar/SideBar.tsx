import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import SideBarToggle from './SideBarToggle';
import UserProfile from './UserProfile';

export default function SideBar({ onClose }: { onClose: () => void }) {
  return (
    <>
      <dialog className="block fixed top-0 left-0 w-[32.4rem] px-[2.4rem] h-screen z-10 ">
        <button className="absolute top-[4rem] right-[2.4rem] w-[2.4rem] h-[2.4rem]">
          <IoClose />
        </button>
        <UserProfile />
        <div className="py-[4rem] border-y-2 my-[4rem] w-full flex justify-center flex-col gap-[2.4rem]">
          <Link className="block w-full text-headline-3" href="/">
            추천
          </Link>
          <Link className="block w-full text-headline-3" href="/search">
            검색
          </Link>
          <SideBarToggle />
          <Link href="/my-study" className="block w-full text-headline-3">
            내 스터디
          </Link>
        </div>
        <div className="w-full flex justify-center flex-col gap-[2.4rem]">
          <Link className="block w-full text-headline-3" href="/notice">
            공지사항
          </Link>
          <Link
            className="block w-full text-headline-3"
            href="/customer-center"
          >
            고객센터
          </Link>
        </div>
      </dialog>
    </>
  );
}
