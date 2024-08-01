import TabBar from '@/components/main/TabBar';

import CreateStudyButton from '@/components/common/CreateStudyButton';
import CurrentStudy from '@/components/search/CurrentStudy';
import RecommendSearch from '@/components/search/RecommendSearch';
import { getSession } from '@/utils/getSessions';
import SearchPart from './_components/SearchPart';

export default async function Search() {
  const session = await getSession();
  const userId = session?.user?.id;

  return (
    <>
      <TabBar />
      <div className="mt-[.8rem]">
        <SearchPart isList={true} />
      </div>
      <RecommendSearch />
      <CurrentStudy />
      {userId && <CreateStudyButton />}
    </>
  );
}
