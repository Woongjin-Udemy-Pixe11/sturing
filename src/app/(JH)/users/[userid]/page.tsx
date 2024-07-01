import MyBookMarkList from './_pages/MyBookMarkList';
import MyPage from './_pages/MyPage';
import MyPageDetail from './_pages/MyPageDetail';
import MyStudyReviewList from './_pages/MyStudyReviewList';
import StudyLog from './_pages/StudyLog';

export default function page({ params }: { params: { userid: string } }) {
  const { userid } = params;
  return <MyPage userid={userid} auth={true} />;
}
