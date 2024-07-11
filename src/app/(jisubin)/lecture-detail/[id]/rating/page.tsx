import LectureRating from '@/app/(jisubin)/lecture-detail/_components/LectureRating';

type TLectureDetailRatingPageProps = {
  params: { id: string };
};

export default function LectureDetailRatingPage(
  props: TLectureDetailRatingPageProps,
) {
  const { params } = props;
  const id = params.id;
  return (
    <>
      <LectureRating id={id} />
    </>
  );
}
