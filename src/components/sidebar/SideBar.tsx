import Link from 'next/link';
import { VscClose } from 'react-icons/vsc';
import SideBarToggle from './SideBarToggle';
import UserProfile from './UserProfile';

type TSideBarProps = {
  onClose: () => void;
  user?: any;
};
export default function SideBar(props: TSideBarProps) {
  const { onClose, user } = props;

  return (
    <>
      <div className="block bg-white fixed overflow-auto left-0 w-[32.4rem] px-[2.4rem] h-screen z-[9999] ">
        <button
          className="absolute top-[2.4rem] right-[2.4rem] w-[3.2rem] h-[3.2rem]"
          onClick={onClose}
        >
          <VscClose className="text-large-title" />
        </button>
        <UserProfile user={user} onClose={onClose} />
        <div className="py-[4rem] border-y-2 my-[4rem] w-full flex justify-center flex-col gap-[2.4rem]">
          <Link className="block w-full text-headline-3" href="/">
            <span onClick={onClose}>추천</span>
          </Link>
          <Link className="block w-full text-headline-3" href="/search">
            <span onClick={onClose}>검색</span>
          </Link>
          <SideBarToggle />
          {user._id && (
            <Link
              href="/my-study-list"
              className="block w-full text-headline-3"
            >
              <span onClick={onClose}> 내 스터디</span>
            </Link>
          )}
        </div>
        <div className="w-full flex justify-center flex-col gap-[2.4rem] mb-[4rem]">
          <Link className="block w-full text-headline-3" href="/notice">
            <span onClick={onClose}> 공지사항</span>
          </Link>
          <Link
            className="block w-full text-headline-3"
            href="/customer-center"
          >
            <span onClick={onClose}> 고객센터</span>
          </Link>
        </div>
      </div>
    </>
  );
}
