import TabAll from '@/components/search/TabAll';
import TabLecture from '@/components/search/TabLecture';
import TabStudy from '@/components/search/TabStudy';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import TabBarBlue from '@/components/search/TabBarBlue';
import Footer from '@/components/common/Footer';
import SearchPart from '../../pages/SearchPart';

export default async function page({ searchParams }: { searchParams: any }) {
  console.log('검색결과 페이지가 렌더링됩니다.');
  const keyword = searchParams.keyword;
  const data = await (
    await fetch(`http://localhost:3000/api/search?keyword=${keyword}`, {
      cache: 'no-store',
    })
  ).json();
  console.log(data);

  let searchstudy = data.searchstudies;
  const tabList = [
    {
      name: '전체',
      component: <TabAll data={searchstudy} />,
      isLecture: false,
    },
    {
      name: '스터디',
      component: <TabStudy data={searchstudy} />,
      isLecture: false,
    },
    { name: '강의', component: <TabLecture />, isLecture: true },
  ];
  return (
    <>
      <div className="w-full px-[1.6rem] flex  items-center gap-[.8rem] py-[1.2rem]">
        <button>
          <IoIosArrowBack className="w-[2.4rem] h-[2.4rem]" />
        </button>
        <div className="w-full">
          <SearchPart isList={false} />
        </div>
      </div>
      <TabBarBlue tabList={tabList} />
      <Footer />
    </>
  );
}
