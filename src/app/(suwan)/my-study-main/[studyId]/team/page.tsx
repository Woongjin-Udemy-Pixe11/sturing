import TeamContainer from '@/components/(suwan)/my-study/team/TeamContainer';
// import Header from './_components/Header';
import { getSession } from '@/utils/getSessions';

export default async function Page({
  params,
  children,
}: {
  params: { studyId: string };
  children: React.ReactNode;
}) {
  const session = await getSession();
  const userid = session?.user?.id;

  const studyId = params.studyId;

  // const data = await (
  //   await fetch(`http://localhost:3000/api/study?id=${studyId}`)
  // ).json();
  // console.log('스터디 데이터', data);
  return (
    <>
      {/* <Header data={data} /> */}
      <TeamContainer />
    </>
  );
}
