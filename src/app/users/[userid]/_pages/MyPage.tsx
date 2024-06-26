import SectionNavigator from '@/components/common/SectionNavigator';
import MyPageHeader from '../_componets/MypageHeader';
import MyPageProfileCard from '../_componets/MyPageProfileCard';
import MyStudyInfo from '../_componets/MyStudyInfo';
import SturingRate from '../_componets/SturingRate';

export default function MyPage({ auth }: { auth?: boolean }) {
  return (
    <main>
      <MyPageHeader>{auth && '마이페이지'}</MyPageHeader>
      <section className="bg-gradient-to-r from-main-200  to-pink">
        <MyPageProfileCard auth={auth} />
        {auth && (
          <div className="mt-[1.5rem]">
            <MyStudyInfo />
          </div>
        )}
      </section>
      <SturingRate />
      <SectionNavigator title="받은 스터디 평가 20" />
      <SectionNavigator title="스터디 이력 5" />
      {/* //Section Navigator 에 옆에 숫자 추가가능하도록하면 좋을거같음. */}
    </main>
  );
}
