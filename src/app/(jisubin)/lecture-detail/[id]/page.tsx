import LectureDetailRatingPage from './rating/page';
import LectureStudyInfo from '../_components/LectureStudyInfo';
import LectureStudy from '../_components/LectureStudy';
import LectureRating from '../_components/LectureRating';

type TLectureDetailProps = {
  params: { id: string };
};

async function fetchLectureDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`);
  if (!res.ok) throw new Error('Failed to fetch lecture');
  return res.json();
}

export default async function LectureDetail(props: TLectureDetailProps) {
  const { params } = props;
  const id = params.id;

  const lecture = await fetchLectureDetail(id);
  return (
    <div className="flex flex-col mt-[2.8rem]">
      <LectureStudyInfo
        lectureInstructor={lecture.lectureInstructor}
        lectureDescription={lecture.lectureDescription}
      />
      <LectureStudy id={id} />
      <LectureRating id={id} />
    </div>
  );
}
