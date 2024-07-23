'use client';

import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/navigation';

export function MatchingBanner({ user }: { user: any }) {
  const router = useRouter();

  const onClickMathcingBanner = () => {
    if (user === undefined) {
      alert('로그인하세요!');
    } else {
      router.push('/matching');
    }
  };
  return (
    <button onClick={onClickMathcingBanner} className="w-full">
      <p className="w-full bg-gray-1000 text-gray-100 flex justify-start items-center gap-[0.8rem] px-[1.6rem] py-[1.2rem]">
        <img src="/small-logo.svg" alt="스터링 미니 로고" />
        <span className=" text-content-1">
          매칭 항목 선택하고 딱 맞는 스터디 추천받기
        </span>

        <IoIosArrowForward />
      </p>
    </button>
  );
}
