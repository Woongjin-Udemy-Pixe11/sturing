import { getSession } from '@/utils/getSessions';
import MyStudyReviewList from '../_pages/MyStudyReviewList';

export default async function Page() {
  const session = await getSession();
  const id = session?.user?.id;
  const data = await (
    await fetch(`http://localhost:3000/api/study-review?id=${id}`)
  ).json();
  // console.log(data);
  return <MyStudyReviewList data={data} />;
}
