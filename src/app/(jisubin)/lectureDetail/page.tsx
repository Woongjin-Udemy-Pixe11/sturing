import LectureDetailStudyPage from './study/page';
import LectureDetailRatingPage from './rating/page';
import LectureStutyInfo from '../_components/LectureStutyInfo';

export default function LectureDetail() {
  return (
    <div className="flex flex-col mt-[2.8rem]">
      <LectureStutyInfo />
      <LectureDetailStudyPage />
      <LectureDetailRatingPage />
    </div>
  );
}
