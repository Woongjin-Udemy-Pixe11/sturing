import StudyList from './StudyList';
import { TStudyInfo } from '@/types/TStudyInfo';

type TtabStudyProps = {
  data: TStudyInfo[];
  userId: string;
};

export default async function TabStudy(props: TtabStudyProps) {
  const { data, userId } = props;
  return (
    <>
      <StudyList isDetail={true} data={data} userId={userId} />
    </>
  );
}
