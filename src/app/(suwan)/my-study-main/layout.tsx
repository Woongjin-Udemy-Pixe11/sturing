'use client';
import Header from '@/components/(suwan)/my-study/common/Header';
import TabBar from '@/components/(suwan)/my-study/head/Tabar';
import StudyInfo from '@/components/(suwan)/my-study/head/StudyInfo';
import { study } from '@/dummy/studyList';
import { useSelectedLayoutSegments } from 'next/navigation';
import { getSession } from '@/utils/getSessions';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segement = useSelectedLayoutSegments();
  let isHeader = segement.length === 1 ? true : false;

  const session = await getSession();
  const userid = session?.user?.id;

  return (
    <>
      {isHeader && (
        <>
          <Header />
          <StudyInfo />
          <TabBar />
          <img
            className="absolute inset-0 w-full h-full object-cover -z-10"
            src="/images/study-img1.png"
          />
        </>
      )}

      <main>{children}</main>
    </>
  );
}
