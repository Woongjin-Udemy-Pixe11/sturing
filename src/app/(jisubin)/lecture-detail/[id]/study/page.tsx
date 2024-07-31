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
    <div className="pb-[10rem]">
      <LectureStudy id={id} />
    </div>
  );
}
