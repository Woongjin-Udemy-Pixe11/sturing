'use client';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import SearchPart from '@/app/(ryukyung)/pages/SearchPart';

export default function BackSearchBar() {
  const router = useRouter();

  return (
    <div className="w-full flex items-center px-[1.2rem] pb-[2rem]">
      <button
        onClick={() => router.back()}
        className="flex-shrink-0 mt-[2.4rem]"
      >
        <IoIosArrowBack className="w-[2.4rem] h-[2.4rem]" />
      </button>
      <div className="flex-grow max-w-[97%]">
        <SearchPart isList={false} />
      </div>
    </div>
  );
}
