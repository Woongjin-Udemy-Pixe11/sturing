import StudyList from './StudyList';
import { TStudyInfo } from '@/types/TStudyInfo';

type TtabStudyProps = {
  data: TStudyInfo[];
};

export default async function TabStudy(props: TtabStudyProps) {
  const { data } = props;
  return (
    <>
      <StudyList isDetail={true} data={data} />
    </>
  );
}
