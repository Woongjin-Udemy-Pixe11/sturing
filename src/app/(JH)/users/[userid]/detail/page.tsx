import { getSession } from '@/utils/getSessions';
import MyPageDetail from '../_pages/MyPageDetail';
export default async function page({ params }: any) {
  const session = await getSession();
  const userid = session?.user?.id;
  let auth;
  if (userid === params.userid) {
    auth = true;
  } else {
    auth = false;
  }
  const data = await (
    await fetch(`http://localhost:3000/api/mypage?id=${params.userid}`, {
      cache: 'no-store',
    })
  ).json();
  if (!auth) {
    return <div>접근권한이없는 페이지입니다.</div>;
  }

  //TODO: 없는유저정보

  return <MyPageDetail auth={auth} data={data} />;
}
