import TabBar from '@/components/main/TabBar';

import RecommendSearch from '@/components/search/RecommendSearch';
import CurrentStudy from '@/components/search/CurrentStudy';
import SearchPart from '../pages/SearchPart';
import CreateStudyButton from '@/components/common/CreateStudyButton';
import { getSession } from '@/utils/getSessions';

export default async function Search() {
  const session = await getSession();
  const userId = session?.user?.id;

  return (
    <>
      <TabBar />
      <SearchPart isList={true} />
      <RecommendSearch />
      <CurrentStudy />
      {userId && <CreateStudyButton />}
    </>
  );
}
