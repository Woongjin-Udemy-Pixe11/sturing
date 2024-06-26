import MyPageHeader from '../_componets/MypageHeader';
import UserDetailInfo from '../_componets/UserDetailInfo';
import { FaCamera } from 'react-icons/fa';
import UserMatchingInfo from '../_componets/UserMatchingInfo';

export default function MyPageDetail() {
  return (
    <main>
      <MyPageHeader>내정보</MyPageHeader>
      <div className="py-[2.4rem] px-[14.3rem] ">
        <div
          className={`w-[9rem] h-[9rem] border border-gray-500 rounded-full m-auto relative `}
        >
          <img src="/images/user-card-dummy.png" className="object-fit"></img>
          <FaCamera
            size={16}
            className="text-gray-600  border  border-gray-500 rounded-full bg-gray-300 p-1 absolute right-0 bottom-0"
          />
        </div>
      </div>
      <UserDetailInfo />
      <UserMatchingInfo />
    </main>
  );
}
