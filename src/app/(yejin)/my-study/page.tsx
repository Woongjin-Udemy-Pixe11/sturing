import ApplicationList from '@/components/(yejin)/my-study/ApplicationList';
import StudyList from '@/components/(yejin)/my-study/StudyList';
import UpcomingStudy from '@/components/(yejin)/my-study/UpcomingStudy';
import Header from '@/components/common/Header';
import TabBar from '@/components/main/TabBar';

const study = [
  {
    studyId: 1,
    studyName: 'UXUI 디자이너 본질 강화 피그마 스터디',
    studyPlace: '서울시 종로구',
    studyStart: '07.01(토)',
    studyEnd: '08.01(토)',
    studyType: '온라인',
    studyMember: 4,
    studyJoinMember: 3,
    studyScheduleDate: '오후 8:00 - 9:00',
    studyDaysLeft: 3,
    studyFormDate: '2024.06.15 14:30',
  },
];

export default function page() {
  return (
    <>
      <Header />
      <TabBar />
      <UpcomingStudy studies={study} />
      <StudyList studies={study} />
      <ApplicationList studies={study} />
    </>
  );
}
