import TeamContainer from '@/components/(suwan)/my-study/team/TeamContainer';
import { getSession } from '@/utils/getSessions';
import Header from '../_components/Header';
import fetchStudy from '@/utils/my-study-main/fetchStudy';

export default async function Page({
  params,
}: {
  params: { studyId: string };
}) {
  const session = await getSession();
  const userid = session?.user?.id;

  const studyId = params.studyId;

  const data = await fetchStudy(studyId);

  return (
    <>
      <Header studyId={studyId} data={data} />
      <TeamContainer />
    </>
  );
}
