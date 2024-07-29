'use server';
import { getSession } from '@/utils/getSessions';
import Header from '../_components/Header';
import { fetchStudy } from '@/utils/my-study-main/fetch';
import Calendar from '../_components/Calendar';
import Schedule from './_components/Schedule';
import RenderCalendar from './_components/RenderCalendar';

export default async function Calender({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const session = await getSession();
  const userid = session?.user?.id;

  const data = await fetchStudy(studyId);
  const isLeader = data.leaderId === userid;

  return (
    <>
      <Header studyId={studyId} data={data} />
      <RenderCalendar studyId={studyId} />
      <div className="bg-gray-100 p-[2rem] h-[100%]">
        <Calendar type="schedule" />
        <Schedule isLeader={isLeader} userid={userid} />
      </div>
    </>
  );
}
