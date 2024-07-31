import ApplicationList from '@/components/(yejin)/my-study/ApplicationList';
import StudyList from '@/components/(yejin)/my-study/StudyList';
import UpcomingStudy from '@/components/(yejin)/my-study/UpcomingStudy';
import CreateStudyButton from '@/components/common/CreateStudyButton';
import TabBar from '@/components/main/TabBar';

import { getUserStudies } from '@/lib/actions/userStudies';
import { getSession } from '@/utils/getSessions';
import OpenLoginModal from './_components/OpenLoginModal';

export default async function page() {
  const session: Tsession = await getSession();
  let studies;

  if (!session?.user?.id) {
    return (
      <>
        <OpenLoginModal />
      </>
    );
  } else {
    studies = await getUserStudies(session.user.id);
  }

  return (
    <>
      <TabBar />
      <UpcomingStudy upcomingStudies={studies.upcoming} />
      <StudyList
        activeStudies={studies.active}
        completedStudies={studies.completed}
      />
      <ApplicationList userId={session.user.id} />
      <CreateStudyButton />
    </>
  );
}
