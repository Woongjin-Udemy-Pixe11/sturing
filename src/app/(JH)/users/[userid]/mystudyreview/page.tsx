import { TstudyReview } from '@/types/TStudyReview';
import MyStudyReviewList from '../_pages/MyStudyReviewList';

export default async function Page({ params }: { params: any }) {
  const id: string = params.userid;
  const data: TstudyReview[] = await (
    await fetch(`http://localhost:3000/api/study-review?id=${id}`)
  ).json();

  return <MyStudyReviewList data={data} />;
}
