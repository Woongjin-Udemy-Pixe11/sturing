import Footer from '@/components/common/Footer';
import TabAll from '@/components/search/TabAll';
import TabContainer from '@/components/search/TabContainer';
import TabLecture from '@/components/search/TabLecture';
import TabStudy from '@/components/search/TabStudy';
import { getFilteredResults } from '@/lib/actions/filterAction';
import { TLectureDetail } from '@/types/TLecture';
import { TStudyInfo } from '@/types/TStudyInfo';
import { getSession } from '@/utils/getSessions';
import BackSearchBar from './_components/BackSearchBar';

type TSearchResultProps = {
  searchParams: { [key: string]: string };
};

type TSearchResult = {
  searchstudies: TStudyInfo[];
  searchlectures: TLectureDetail[];
};

export default async function page(props: TSearchResultProps) {
  const { searchParams } = props;
  const keyword = searchParams.keyword;
  const activeTab = searchParams.tab || '전체';
  const session = await getSession();
  const userId = session?.user?.id;
  const filters = {
    field: searchParams.field?.split(',') || [],
    region: searchParams.region?.split(',') || [],
    people: searchParams.people?.split(',') || [],
    period: searchParams.period || '',
    level: searchParams.level?.split(',') || [],
  };

  let data: TSearchResult = null;
  if (keyword) {
    data = await (
      await fetch(`http://localhost:3000/api/search?keyword=${keyword}`, {
        cache: 'no-store',
      })
    ).json();
  } else {
    data = await getFilteredResults(filters);
  }

  const searchstudies = data.searchstudies || [];
  const searchlectures = data.searchlectures || [];

  const tabList = [
    {
      name: '전체',
      component: (
        <TabAll
          study={searchstudies}
          lecture={searchlectures}
          studyLimit={4}
          lectureLimit={2}
          userId={userId}
        />
      ),
      isLecture: false,
    },
    {
      name: '스터디',
      component: <TabStudy data={searchstudies} userId={userId} />,
      isLecture: false,
    },
    {
      name: '강의',
      component: <TabLecture data={searchlectures} userId={userId} />,
      isLecture: true,
    },
  ];
  return (
    <>
      <BackSearchBar />
      <TabContainer
        keyword={keyword}
        tabList={tabList}
        initialFilters={filters}
        activeTab={activeTab}
      />
      <Footer />
    </>
  );
}
