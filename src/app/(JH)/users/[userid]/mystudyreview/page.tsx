import MyStudyReviewList from '../_pages/MyStudyReviewList';

export default async function Page({ params }: { params: any }) {
  const id = params.userid;
  const data = await (
    await fetch(`http://localhost:3000/api/study-review?id=${id}`)
  ).json();
  // console.log(data);
  return <MyStudyReviewList data={data} />;
}
