import StudyReviewCard from './_componets/StudyReviewCard';
import MyBookMarkList from './_pages/MyBookMarkList';
import MyPage from './_pages/MyPage';
import MyStudyReviewList from './_pages/MyStudyReviewList';
import StudyLog from './_pages/StudyLog';

export default function page() {
  return (
    <div>
      {/* <MyPage auth={true} /> */}
      <StudyLog />
      <MyBookMarkList />
    </div>
  );
}
