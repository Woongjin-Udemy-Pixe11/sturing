'use client';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import SearchPart from '../../_components/SearchPart';

export default function BackSearchBar({ keyword }: { keyword: string }) {
  const router = useRouter();

  return (
    <div className="w-full flex items-center px-[1.2rem] ">
      <button onClick={() => router.back()} className="w-[6%]">
        <IoIosArrowBack className="w-[2.4rem] h-[2.4rem]" />
      </button>
      <div className="mb-[1.2rem] w-[92%] ml-[2%]">
        <SearchPart isList={false} initialKeyword={keyword} />
      </div>
    </div>
  );
}
