import { getSession } from '@/utils/getSessions';
import MyPage from './_pages/MyPage';

export default async function page({ params }: { params: { userid: string } }) {
  const session = await getSession();
  const userid = session?.user?.id;
  let auth;
  if (userid === params.userid) {
    auth = true;
  } else {
    auth = false;
  }
  console.log(params.userid, '🟢');
  return <MyPage userid={params.userid} auth={auth} />;
}
