import Header from '@/components/common/Header';
import TabBar from '@/components/main/TabBar';
import Banner from '@/components/main/Banner';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import SectionNavigator from '@/components/common/SectionNavigator';
import SearchLabelList from '@/components/main/SearchLabelList';
import StudyCardList from '@/components/common/StudyCardList';
import UserCardList from '@/components/main/UserCardList';
import Footer from '@/components/common/Footer';

export default function page() {
  return (
    <>
      <Header />
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
      <SectionNavigator title="분야별 스터디 탐색하기" moveLink="/search" />
      <SearchLabelList />
      <hr className="w-full block h-[0.8rem] bg-gray-100 border-0 my-[4rem]" />
      <SectionNavigator title="이번주 인기 스터디" moveLink="/search" />
      <StudyCardList />
      <SectionNavigator title="새로 개설된 스터디" moveLink="/search" />
      <StudyCardList />
      <span className="w-full px-[1.6rem] flex justify-between items-center text-headline-3 font-semibold mb-[2rem] mt-[4rem]">
        스터링 활동 우수 팀원
      </span>
      <UserCardList />
      <Footer />
    </>
  );
}
