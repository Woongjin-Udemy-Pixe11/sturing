import { getSession } from '@/utils/getSessions';
import StudyCardList from '../common/StudyCardList';

export default async function CurrentStudy() {
  const session = await getSession();
  let user = session?.user;
  let id = user?.id;
  return (
    <>
      <span className="block w-[calc(100% - 3.2rem)] px-[1.6rem] my-[4rem] text-[1.6rem] text-gray-1000 mb-[2rem]">
        최근 본 스터디
      </span>
      <StudyCardList userId={user?.id} />
    </>
  );
}
