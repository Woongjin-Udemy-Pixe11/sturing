'use client';
import { GoChevronLeft } from 'react-icons/go';
import { IoShareOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

type TSubHeader = {
  isWhite?: boolean;
  title?: string;
  eddit?: boolean;
  share?: boolean;
  bgGray?: boolean;
  onClickMenu?: () => void;
};

export default function SubHeader(props: TSubHeader) {
  const { isWhite, title, eddit, share, bgGray, onClickMenu } = props;
  const router = useRouter();

  return (
    <>
      <div
        className={`grid grid-cols-3 items-center h-[5.4rem] px-[1rem] ${
          isWhite ? `text-white` : ''
        } ${bgGray ? 'bg-gray-100' : ''}`}
      >
        <GoChevronLeft
          size={28}
          className=""
          onClick={() => router.push('./')}
        />
        <div className="text-headline-1 font-medium justify-self-center">
          {title}
        </div>
        <div className="justify-self-end">
          {share ? <IoShareOutline size={28} /> : ''}

          {eddit ? <BsThreeDots size={28} onClick={onClickMenu} /> : ''}
        </div>
      </div>
    </>
  );
}
