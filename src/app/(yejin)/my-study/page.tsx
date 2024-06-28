import ApplicationList from '@/components/(yejin)/my-study/ApplicationList';
import StudyList from '@/components/(yejin)/my-study/StudyList';
import UpcomingStudy from '@/components/(yejin)/my-study/UpcomingStudy';
import CreateStudyButton from '@/components/common/CreateStudyButton';
import TabBar from '@/components/main/TabBar';
import { study } from '@/dummy/studyList';

export default function page() {
  return (
    <>
      <TabBar />
      <UpcomingStudy studies={study} />
      <StudyList studies={study} />
      <ApplicationList studies={study} />
      <CreateStudyButton />
    </>
  );
}
