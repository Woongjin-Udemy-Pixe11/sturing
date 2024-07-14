import Footer from '@/components/common/Footer';
import SearchInput from '@/components/common/SearchInput';
import SectionNavigator from '@/components/common/SectionNavigator';
import StudyCardList from '@/components/common/StudyCardList';
import Banner from '@/components/main/Banner';
import SearchLabelList from '@/components/main/SearchLabelList';
import TabBar from '@/components/main/TabBar';
import UserCardList from '@/components/main/UserCardList';
import { getSession } from '@/utils/getSessions';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import SearchPart from './(ryukyung)/pages/SearchPart';
export default async function page() {
  const session = await getSession();
  let user = session?.user;

  return (
    <>
      <TabBar />
      <Banner />
      <p className="w-full bg-gray-1000 text-gray-100 flex justify-start items-center gap-[0.8rem] px-[1.6rem] py-[1.2rem]">
        <img src="/small-logo.svg" alt="스터링 미니 로고" />
        <span className=" text-content-1">
          매칭 항목 선택하고 딱 맞는 스터디 추천받기
        </span>
        <Link href="/">
          <IoIosArrowForward />
        </Link>
      </p>
      <SearchPart isList={false} />
      <SectionNavigator title="분야별 스터디 탐색하기" moveLink="/search" />
      <SearchLabelList />
      {/* TODO: 스터디 카드 클릭 시 페이지 이동, Tab으로 접근, cursor-pointer */}
      <hr className="w-full block h-[0.8rem] bg-gray-100 border-0 my-[4rem]" />
      {!session ? (
        <>
          <SectionNavigator title="이번주 인기 스터디" moveLink="/search" />
          <StudyCardList sort={'popular'} />
          <SectionNavigator title="새로 개설된 스터디" moveLink="/search" />
          <StudyCardList sort={'recent'} />
        </>
      ) : (
        <>
          <SectionNavigator
            title={`${user?.nickname}님을 위한 스터디`}
            moveLink="/search"
          />
          <StudyCardList userId={user?.id} sort={'category'} />
          <SectionNavigator
            title={`${user?.nickname}님을 위한 새로 개설된 스터디`}
            moveLink="/search"
          />
          <StudyCardList userId={user?.id} sort={'type'} />
        </>
      )}
      <span className="w-full px-[1.6rem] flex justify-between items-center text-headline-3 font-semibold mb-[2rem] mt-[4rem]">
        스터링 활동 우수 팀원
      </span>
      <UserCardList />
      <Footer />
    </>
  );
}
