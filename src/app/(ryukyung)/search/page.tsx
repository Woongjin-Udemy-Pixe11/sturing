import Header from '@/components/common/Header';
import TabBar from '@/components/main/TabBar';
import SearchInput from '@/components/common/SearchInput';
import CurrentSearch from '@/components/search/CurrentSearch';
import RecommendSearch from '@/components/search/RecommendSearch';
import CurrentStudy from '@/components/search/CurrentStudy';

export default function Search() {
  return (
    <>
      <Header />
      <TabBar />
      <SearchInput placeholderText="관심 스터디 분야나 강의명을 검색해 보세요" />
      <CurrentSearch />
      <RecommendSearch />
      <CurrentStudy />
    </>
  );
}
