import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import UserDetailInfo from '@/components/(JH)/users/UserDetailInfo';
import { FaCamera } from 'react-icons/fa';
import UserMatchingInfo from '@/components/(JH)/users/UserMatchingInfo';

export default function MyPageDetail({
  auth,
  data,
}: {
  auth: boolean;
  data: any;
}) {
  if (!auth) {
    return;
  }
  // console.log(data, '🟢');

  return (
    <main>
      <MyPageHeader>내정보</MyPageHeader>
      <div className="py-[2.4rem] px-[14.3rem] ">
        <div
          className={`w-[9rem] h-[9rem] border border-gray-500 rounded-full m-auto relative `}
        >
          <img
            src={`${data.users.image}`}
            className="cover w-full h-full"
          ></img>
          <FaCamera
            size={16}
            className="text-gray-600  border  border-gray-500 rounded-full bg-gray-300 p-1 absolute right-0 bottom-0"
          />
        </div>
      </div>
      <UserDetailInfo data={data} />
      <UserMatchingInfo data={data} />
    </main>
  );
}
