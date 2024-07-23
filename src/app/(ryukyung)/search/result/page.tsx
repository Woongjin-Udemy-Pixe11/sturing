import Footer from '@/components/common/Footer';
import TabAll from '@/components/search/TabAll';
import TabBarBlue from '@/components/search/TabBarBlue';
import TabLecture from '@/components/search/TabLecture';
import TabStudy from '@/components/search/TabStudy';
import { getFilteredResults } from '@/lib/actions/filterAction';
import { IoIosArrowBack } from 'react-icons/io';
import SearchPart from '../../pages/SearchPart';

export default async function page({ searchParams }: { searchParams: any }) {
  const keyword = searchParams.keyword;

  const filters = {
    field: searchParams.field?.split(',') || [],
    region: searchParams.region?.split(',') || [],
    people: searchParams.people?.split(',') || [],
    period: searchParams.period || '',
    level: searchParams.level?.split(',') || [],
  };

  let data;
  if (keyword) {
    data = await (
      await fetch(`http://localhost:3000/api/search?keyword=${keyword}`, {
        cache: 'no-store',
      })
    ).json();
  } else {
    data = await getFilteredResults(filters);
  }

  let searchstudies = data.searchstudies;

  let searchlectures = data.searchlectures;

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
  return (
    <>
      <div className="w-full flex items-center px-[1.2rem] pb-[2rem]">
        <button className="flex-shrink-0 mt-[2.4rem]">
          <IoIosArrowBack className="w-[2.4rem] h-[2.4rem]" />
        </button>
        <div className="flex-grow max-w-[97%]">
          <SearchPart isList={false} />
        </div>
      </div>
      <TabBarBlue tabList={tabList} initialFilters={filters} />
      <Footer />
    </>
  );
}
