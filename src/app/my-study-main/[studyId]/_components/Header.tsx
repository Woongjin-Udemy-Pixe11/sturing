'use server';
import SubHeader from '@/components/common/SubHeader';

import { GoChevronLeft } from 'react-icons/go';
import Link from 'next/link';
import StudyInfo from '@/components/my-study-main/head/StudyInfo';
import TabBar from '@/components/my-study-main/head/Tabar';

export default async function Header({ studyId, data }: any) {
  return (
    <>
      <div className="absolute w-full h-[40rem] backdrop-dark -z-10 "></div>
      <img
        className="absolute inset-0 w-full h-[40rem] object-cover -z-20"
        src={data.studyImage}
      />

      <Link
        href="/my-study-list"
        className="flex h-[5.4rem] pl-[1rem] items-center text-white relative"
      >
        <GoChevronLeft className="text-[2.8rem]" />
      </Link>

      {/* <SubHeader isWhite={true} /> */}
      <StudyInfo data={data} />
      <TabBar studyId={studyId} />
    </>
  );
}
