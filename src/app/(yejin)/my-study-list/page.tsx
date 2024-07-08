import { getUserStudies } from '@/app/api/study/user/route';
import ApplicationList from '@/components/(yejin)/my-study/ApplicationList';
import StudyList from '@/components/(yejin)/my-study/StudyList';
import UpcomingStudy from '@/components/(yejin)/my-study/UpcomingStudy';
import CreateStudyButton from '@/components/common/CreateStudyButton';
import TabBar from '@/components/main/TabBar';
import { getSession } from '@/utils/getSessions';

export default async function page() {
  const session = await getSession();

  if (!session || !session.user || !session.user.id) {
    return <div>로그인이 필요합니다.</div>;
  }

  const userId = session.user.id;
  const studies = await getUserStudies(userId);

  return (
    <>
      <TabBar />
      <UpcomingStudy upcomingStudies={studies.upcoming} />
      <StudyList
        activeStudies={studies.active}
        completedStudies={studies.completed}
      />
      <ApplicationList userId={userId} />
      <CreateStudyButton />
    </>
  );
}
