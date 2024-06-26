import MyPageHeader from '../_componets/MypageHeader';
import UserDetailInfo from '../_componets/UserDetailInfo';
import UserProfile from '../_componets/UserProfile';

export default function MyPageDetail() {
  return (
    <main>
      <MyPageHeader>내정보</MyPageHeader>
      <div className="py-[2.4rem] px-[14.3rem]">
        <div
          className={`w-[9rem] h-[9rem] border border-gray-500 rounded-full m-auto `}
        >
          <img src="/images/user-card-dummy.png" className="object-fit"></img>
        </div>
      </div>
      <UserDetailInfo />
    </main>
  );
}
