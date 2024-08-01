'use client';
import Link from 'next/link';
import { GoChevronLeft } from 'react-icons/go';
import { useRouter } from 'next/navigation';

type TBoardTopProps = {
  title?: string;
  isButton?: boolean;
  href?: string;
};

export default function BoardTop(props: TBoardTopProps) {
  const { title, isButton, href } = props;
  const router = useRouter();

  const onClickBack = () => {
    router.push('./');
    router.refresh();
  };
  return (
    <div className="flex justify-between items-center py-[1.4rem] px-[1.6rem] bg-gray-100">
      <button>
        <GoChevronLeft size={28} className="" onClick={onClickBack} />
      </button>
      <h1 className="text-headline-3 font-medium">{title}</h1>
      <div>
        <span className="w-[2.4rem]"></span>
        {isButton && href && (
          <Link
            href={href}
            className="flex items-center gap-[0.4rem] bg-main-600 px-[0.6rem] py-[0.4rem] rounded-[0.3rem]"
          >
            <img src="/images/boardIcon/pencil.svg" alt="" />
            <span className="text-white text-content-2">작성하기</span>
          </Link>
        )}
      </div>
    </div>
  );
}
