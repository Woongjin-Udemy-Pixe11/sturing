import SectionNavigator from '@/components/common/SectionNavigator';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import MyPageProfileCard from '@/components/(JH)/users/MyPageProfileCard';
import MyStudyInfo from '@/components/(JH)/users/MyStudyInfo';
import SturingRate from '@/components/(JH)/users/SturingRate';

export default function MyPage({
  auth,
  userid,
}: {
  auth?: boolean;
  userid: string;
}) {
  const loginbg = auth && `bg-gradient-to-r from-main-200  to-pink`;
  return (
    <main>
      <MyPageHeader>{auth && '마이페이지'}</MyPageHeader>
      <section className={`${loginbg}`}>
        <MyPageProfileCard auth={auth} />
        {auth && (
          <div className="mt-[1.5rem]">
            <MyStudyInfo userid={userid} />
          </div>
        )}
      </section>
      <SturingRate />
      <SectionNavigator
        title="받은 스터디 평가 20"
        moveLink={`/users/${userid}/mystudyreview`}
      />
      {!auth && (
        <SectionNavigator
          title="스터디 이력 5"
          moveLink={`/users/${userid}/mystudylog`}
        />
      )}
      {/* //Section Navigator 에 옆에 숫자 추가가능하도록하면 좋을거같음. */}
    </main>
  );
}
