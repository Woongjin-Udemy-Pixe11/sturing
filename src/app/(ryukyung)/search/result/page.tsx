import TabAll from '@/components/search/TabAll';
import TabLecture from '@/components/search/TabLecture';
import TabStudy from '@/components/search/TabStudy';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import TabBarBlue from '@/components/search/TabBarBlue';
import Footer from '@/components/common/Footer';

export default async function page({ searchParams }: { searchParams: any }) {
  const keyword = searchParams.keyword;
  const data = await (
    await fetch(`http://localhost:3000/api/search?keyword=${keyword}`, {
      cache: 'no-store',
    })
  ).json();
  let searchstudy = data.searchstudies;
  const tabList = [
    { name: '전체', component: <TabAll data={searchstudy} />, isLecture: false },
    {
      name: '스터디',
      component: <TabStudy data={searchstudy} />,
      isLecture: false,
    },
    { name: '강의', component: <TabLecture />, isLecture: true },
  ];
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
          />
          <button>
            <IoSearch className="w-[2rem] h-[2rem] text-gray-800" />
          </button>
        </label>
      </header>
      <TabBarBlue tabList={tabList} />
      <Footer />
    </>
  );
}
