import { study } from '@/dummy/studyList';
// import { useSelectedLayoutSegments } from 'next/navigation';
import { getSession } from '@/utils/getSessions';
import { usePathname } from 'next/navigation';
import Header from './_components/Header';
import { headers } from 'next/headers';

async function getData(studyId: string) {
  const res = await fetch(`http://localhost:3000/api/study?id=${studyId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Layout({
  params,
  children,
}: {
  params: { studyId: string };
  children: React.ReactNode;
}) {
  const session = await getSession();
  const userid = session?.user?.id;
  const data = await getData(params.studyId);

  // 현재 경로 확인
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  console.log('pathname', headersList);

  let isHeader = !pathname.includes(
    `/my-study-main/${params.studyId}/board/notice-board`,
  );
  return (
    <>
      {isHeader && (
        <>
          <Header data={data} />
          <img
            className="absolute inset-0 w-full h-full object-cover -z-10"
            src={data.studyImage}
          />
        </>
      )}

      <main>{children}</main>
    </>
  );
}
