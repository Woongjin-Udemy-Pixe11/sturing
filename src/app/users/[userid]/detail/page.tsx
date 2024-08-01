import { Tsession } from '@/types/TSession';
import { TmypageDetails } from '@/types/TmypageDetail';
import { getSession } from '@/utils/getSessions';
import MyPageDetail from '../_pages/MyPageDetail';
export default async function page({ params }: any) {
  const session: Tsession = await getSession();
  const userid = session?.user?.id;

  let auth;
  if (userid === params.userid) {
    auth = true;
  } else {
    auth = false;
  }
  const data: TmypageDetails = await (
    await fetch(`${process.env.LOCAL_URL}/api/mypage?id=${params.userid}`, {
      cache: 'no-store',
    })
  ).json();
  if (!auth) {
    return <div>접근권한이없는 페이지입니다.</div>;
  }

  //TODO: 없는유저정보

  return <MyPageDetail auth={auth} data={data} />;
}
