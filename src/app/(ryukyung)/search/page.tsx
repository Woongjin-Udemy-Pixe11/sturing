import Header from '@/components/common/Header';
import TabBar from '@/components/main/TabBar';

import RecommendSearch from '@/components/search/RecommendSearch';
import CurrentStudy from '@/components/search/CurrentStudy';
import SearchPart from '../pages/SearchPart';

export default function Search() {
  return (
    <>
      <TabBar />
      <SearchPart isList={true} />
      <RecommendSearch />
      <CurrentStudy />
    </>
  );
}
