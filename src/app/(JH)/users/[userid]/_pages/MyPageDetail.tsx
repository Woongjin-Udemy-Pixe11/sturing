import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import UserDetailInfo from '@/components/(JH)/users/UserDetailInfo';
import { FaCamera } from 'react-icons/fa';
import UserMatchingInfo from '@/components/(JH)/users/UserMatchingInfo';
import { logout } from '@/lib/actions/userAction';
import Link from 'next/link';
import LongButton from '@/components/common/LongButton';
import EditProfileImage from '@/components/(JH)/users/EditProfileImage';

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
  console.log(data, '🟢');

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
          <EditProfileImage id={data.users._id} />
        </div>
      </div>
      <UserDetailInfo data={data} />
      {data.matchinginfo ? (
        <UserMatchingInfo data={data} />
      ) : (
        <section className="mt-10 flex flex-col gap-3 ">
          <div>아직 매칭정보가 없습니다.</div>
          <Link className="w-[30%]" href="/matching">
            <LongButton color="gray">함께 매칭을 하러가요!</LongButton>{' '}
          </Link>
        </section>
      )}
      <section className="flex justify-center gap-5">
        <form>
          <button formAction={logout}>로그아웃</button>
        </form>
        <Link href={`/users/${data.users._id}/detail/delete`}>회원탈퇴</Link>
      </section>
    </main>
  );
}
