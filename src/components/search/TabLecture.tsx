import { TLectureDetail } from '@/types/TLecture';
import LectureList from './LectureList';

type TtabLectureProps = {
  data: TLectureDetail[];
  userId: string;
};

export default function TabLecture(props: TtabLectureProps) {
  const { data, userId } = props;
  return (
    <>
      <LectureList isDetail={true} data={data} userId={userId} />
    </>
  );
}
