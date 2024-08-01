import ApplicationList from '@/components/my-study-list/ApplicationList';
import StudyList from '@/components/my-study-list/StudyList';
import UpcomingStudy from '@/components/my-study-list/UpcomingStudy';
import CreateStudyButton from '@/components/common/CreateStudyButton';
import TabBar from '@/components/main/TabBar';

import { getUserStudies } from '@/lib/actions/userStudies';
import { getSession } from '@/utils/getSessions';
import OpenLoginModal from './_components/OpenLoginModal';
import { Tsession } from '@/types/TSession';

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
