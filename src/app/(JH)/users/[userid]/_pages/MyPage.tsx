import SectionNavigator from '@/components/common/SectionNavigator';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import MyPageProfileCard from '@/components/(JH)/users/MyPageProfileCard';
import MyStudyInfo from '@/components/(JH)/users/MyStudyInfo';
import SturingRate from '@/components/(JH)/users/SturingRate';

export default async function MyPage({
  auth,
  userid,
}: {
  auth?: boolean;
  userid?: string;
}) {
  const loginbg = auth && `bg-gradient-to-r from-main-200  to-pink`;
  const data = await (
    await fetch(`http://localhost:3000/api/mypage?id=${userid}`)
  ).json();
  console.log(data);
  if (data === null) {
    return '아직 유저가 없습니다.';
  }

  //TODO: 404 페이지 혹은 유저없음 페이지 만들기

  return (
    <main>
      <MyPageHeader>{auth && '마이페이지'}</MyPageHeader>
      <section className={`${loginbg}`}>
        <MyPageProfileCard auth={auth} data={data} />
        {auth && (
          <div className="mt-[1.5rem]">
            <MyStudyInfo userid={userid} data={data} />
          </div>
        )}
      </section>
      <SturingRate data={data} />
      {/* //TODO:스터디 리뷰 스키마 */}
      <SectionNavigator
        title="받은 스터디 평가 20"
        moveLink={`/users/${userid}/mystudyreview`}
      />
      {!auth && (
        <SectionNavigator
          title={`스터디 이력 ${data.users.studyCount}`}
          moveLink={`/users/${userid}/mystudylog`}
        />
      )}
      {/* //Section Navigator 에 옆에 숫자 추가가능하도록하면 좋을거같음. */}
    </main>
  );
}
