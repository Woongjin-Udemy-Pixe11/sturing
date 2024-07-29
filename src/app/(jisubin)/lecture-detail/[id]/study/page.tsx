import LectureStudy from '@/app/(jisubin)/lecture-detail/_components/LectureStudy';

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
