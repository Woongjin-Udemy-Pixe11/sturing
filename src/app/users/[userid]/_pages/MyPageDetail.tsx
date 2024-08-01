import EditProfileImage from '@/components/users/EditProfileImage';
import MyPageHeader from '@/components/users/MypageHeader';
import UserDetailInfo from '@/components/users/UserDetailInfo';
import UserMatchingInfo from '@/components/users/UserMatchingInfo';
import LongButton from '@/components/common/LongButton';
import { logout } from '@/lib/actions/userAction';
import { TmypageDetails } from '@/types/TmypageDetail';
import Link from 'next/link';

type TmypageDetailProps = {
  auth: boolean;
  data: TmypageDetails;
};

export default function MyPageDetail(props: TmypageDetailProps) {
  const { auth, data } = props;
  if (!auth) {
    return;
  }

  return (
    <main>
      <MyPageHeader>내정보</MyPageHeader>
      <div className="py-[2.4rem] relative flex justify-center">
        <div
          className={`w-[9rem] h-[9rem] border border-main-200 rounded-full overflow-hidden`}
        >
          <img
            src={`${data.users.image}`}
            className="object-cover w-full h-full "
          ></img>
        </div>
        <div className="absolute bottom-[2.4rem] right-1/2 translate-x-[4.5rem]">
          <EditProfileImage
            id={data.users._id}
            currentImage={data.users.image}
          />
        </div>
      </div>
      <UserDetailInfo data={data} />
      {data.matchinginfo ? (
        <UserMatchingInfo data={data} />
      ) : (
        <section className="mt-[3rem] flex flex-col gap-3 ">
          <div className="px-[1.6rem]">아직 매칭정보가 없습니다.</div>
          <Link
            className="w-[100%] px-[1.6rem] py-[.8rem] pb-[4rem]"
            href="/matching"
          >
            <LongButton color="gray">함께 매칭을 하러가요!</LongButton>{' '}
          </Link>
        </section>
      )}
      <section className="flex justify-center gap-5 mb-[3rem] text-gray-600 font-light">
        <form>
          <button formAction={logout}>로그아웃</button>
        </form>
        <Link href={`/users/${data.users._id}/detail/delete`}>회원탈퇴</Link>
      </section>
    </main>
  );
}
