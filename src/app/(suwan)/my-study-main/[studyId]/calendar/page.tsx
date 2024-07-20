import { getSession } from '@/utils/getSessions';
import Header from '../_components/Header';
import { fetchStudy } from '@/utils/my-study-main/fetch';
import Calendar from './_components/Calendar';
import Schedule from './_components/Schedule';

const schedule = {
  leaderId: '668c8cc789017e9fea0f9dc4',
  title: '등촌역 집합',
  place: '등촌동',
  date: '',
  time: '오후 8:00 - 9:00',
  studyId: '6697daf94cb179ed2b8159cd',
};

export default async function Calender({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const session = await getSession();
  const userid = session?.user?.id;

  const data = await fetchStudy(studyId);

  return (
    <>
      <Header studyId={studyId} data={data} />
      <div className="bg-gray-100 p-[2rem]">
        <Calendar studyId={studyId} userId={userid} data={schedule} />
        <Schedule />
      </div>
    </>
  );
}
