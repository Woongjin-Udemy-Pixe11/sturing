'use server';
import { getSession } from '@/utils/getSessions';
import Header from '../_components/Header';
import { fetchStudy } from '@/utils/my-study-main/fetch';
import Calendar from './_components/Calendar';
import Schedule from './_components/Schedule';
import CalendarInitializer from './_components/CalendarInitializer';

const scheduleList = [
  {
    leaderId: '668c8cc789017e9fea0f9dc4',
    title: '등촌역 집합',
    place: '등촌동',
    date: '06.08(토)',
    time: '오후 8:00 - 9:00',
    studyId: '6697daf94cb179ed2b8159cd',
  },
];

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
      <CalendarInitializer studyId={studyId} />
      <div className="bg-gray-100 p-[2rem]">
        <Calendar />
        <Schedule
          isLeader={isLeader}
          scheduleList={scheduleList}
          userid={userid}
        />
      </div>
    </>
  );
}
