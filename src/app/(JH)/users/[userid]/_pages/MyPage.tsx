import SectionNavigator from '@/components/common/SectionNavigator';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import MyPageProfileCard from '@/components/(JH)/users/MyPageProfileCard';
import MyStudyInfo from '@/components/(JH)/users/MyStudyInfo';
import SturingRate from '@/components/(JH)/users/SturingRate';

export default async function MyPage({
  auth,
  userid,
  activestudy,
  completedstudy,
}: {
  auth?: boolean;
  userid?: string;
  completedstudy: number;
  activestudy: number;
}) {
  const loginbg = auth && `bg-gradient-to-r from-main-200  to-pink`;
  const data = await (
    await fetch(`http://localhost:3000/api/mypage?id=${userid}`, {
      cache: 'no-store',
    })
  ).json();
  if (data === null) {
    return '아직 유저가 없습니다.';
  }
  console.log(data);

  //TODO: 404 페이지 혹은 유저없음 페이지 만들기

  return (
    <main>
      <MyPageHeader>{auth && '마이페이지'}</MyPageHeader>
      <section className={`${loginbg}`}>
        <MyPageProfileCard auth={auth} data={data} />
        {auth && (
          <div className="mt-[1.5rem]">
            <MyStudyInfo
              userid={userid}
              activestudy={activestudy}
              completedstudy={completedstudy}
            />
          </div>
        )}
      </section>
      <SturingRate data={data} />
      <SectionNavigator
        title={`받은 스터디 평가 ${data.numberReview ? data.numberReview : 0}`}
        moveLink={`/users/${userid}/mystudyreview`}
      />
      {!auth && (
        <SectionNavigator
          title={`스터디 이력 ${completedstudy}`}
          moveLink={`/users/${userid}/mystudylog`}
        />
      )}
    </main>
  );
}
