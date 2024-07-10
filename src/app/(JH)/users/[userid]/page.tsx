import { getSession } from '@/utils/getSessions';
import MyPage from './_pages/MyPage';
import { getUserStudies } from '@/app/api/study/user/route';

export default async function page({ params }: { params: { userid: string } }) {
  const session = await getSession();
  const userid = session?.user?.id;
  const userstudy = await getUserStudies(userid!);
  const activestudy = userstudy.active.length;
  const completedstudy = userstudy.completed.length;

  let auth;
  if (userid === params.userid) {
    auth = true;
  } else {
    auth = false;
  }

  return <MyPage userid={params.userid} auth={auth} activestudy={activestudy} completedstudy={completedstudy} />;
}
