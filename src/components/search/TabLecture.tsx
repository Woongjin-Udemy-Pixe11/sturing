import { TLectureDetail } from '@/types/TLecture';
import LectureList from './LectureList';

type TtabLectureProps = {
  data: TLectureDetail[];
};

export default function TabLecture(props: TtabLectureProps) {
  const { data } = props;
  return (
    <>
      <LectureList isDetail={true} data={data} />
    </>
  );
}
