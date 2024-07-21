// SearchDetail.tsx
'use client';
import useLocalStorage from '@/utils/useLocalStorage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import Footer from '../common/Footer';
import TabAll from '../search/TabAll';
import TabBarBlue from '../search/TabBarBlue';
import TabLecture from '../search/TabLecture';
import TabStudy from '../search/TabStudy';

type SearchDetailProps = {
  searchstudies: any[];
  searchlectures: any[];
  filters: any;
};

export default function SearchDetail({
  searchstudies,
  searchlectures,
  filters,
}: SearchDetailProps) {
  const tabList = [
    {
      name: '전체',
      component: <TabAll study={searchstudies} lecture={searchlectures} />,
      isLecture: false,
    },
    {
      name: '스터디',
      component: <TabStudy data={searchstudies} />,
      isLecture: false,
    },
    {
      name: '강의',
      component: <TabLecture data={searchlectures} />,
      isLecture: true,
    },
  ];
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [recentSearches, addSearchToLocalStorage, removeFromLocal] =
    useLocalStorage('recent', []);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const onSearch = () => {
    if (recentSearches.includes(inputValue)) {
      setInputValue('');
      router.push(`/search/result?keyword=${inputValue}`);
      return;
    }
    if (inputValue.trim() != '') {
      addSearchToLocalStorage(inputValue);
      setInputValue('');
      router.push(`/search/result?keyword=${inputValue}`);
    }
  };
  const onInputKeyword = (e: any) => {
    setInputValue(e.target.value);
  };
  if (!isClient) {
    return null; // 또는 로딩 상태를 반환
  }
  return (
    <>
      <header className="w-full px-[1.6rem] flex justify-between items-center gap-[.8rem] py-[1.2rem]">
        <button>
          <IoIosArrowBack className="w-[2.4rem] h-[2.4rem]" />
        </button>
        <label
          htmlFor="search-input"
          className="w-full flex gap-[.4rem] bg-main-100 justify-between px-[2rem] rounded-[2.5rem]"
        >
          <input
            type="text"
            name="search-input"
            id="search-input"
            className="w-full text-content-1 py-[.4rem] bg-inherit"
            placeholder="관심 스터디 분야나 강의명을 검색해 보세요"
            onChange={onInputKeyword}
            value={inputValue}
          />
          <button onClick={onSearch}>
            <IoSearch className="w-[2rem] h-[2rem] text-gray-800" />
          </button>
        </label>
      </header>
      <TabBarBlue tabList={tabList} initialFilters={filters} />
      <Footer />
    </>
  );
}
