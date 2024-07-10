import { dummyCardList } from '@/dummy/lectureStudy';
import Card from '@/components/common/Card';
import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';
import LectureStudy from '@/app/(jisubin)/_components/LectureStudy';

type TLectureDetailStudyPageProps = {
  params: { id: string };
};

export default async function LectureDetailStudyPage(
  props: TLectureDetailStudyPageProps,
) {
  const { params } = props;
  const id = params.id;
  return (
    <>
      <LectureStudy id={id} />
    </>
  );
}
