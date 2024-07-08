import Link from 'next/link';
import GitHubLoginBtn from '../common/GitHubLoginBtn';
import { logout } from '@/lib/actions/userAction';

const dummyUser = {
  name: '웅진',
  email: 'sturing@kakao.com',
  imgSrc: '/images/user-card-dummy.png',
};

type TUserProfileProps = {
  id?: string;
};
export default function UserProfile(props: TUserProfileProps) {
  const { id } = props;
  const isLogined = id ? true : false;
  return (
    <>
      <div className="mt-[10rem]">
        {!isLogined && <GitHubLoginBtn />}
        {isLogined && (
          <>
            <div className="w-full flex justify-between mb-[3.2rem]">
              <p>
                <span className="block text-large-title mb-[.4rem] text-semibold">
                  {dummyUser.name}님
                </span>
                <span className="block text-content-1 text-gray-600">
                  {dummyUser.email}
                </span>
              </p>
              <img
                src={dummyUser.imgSrc}
                alt={`${dummyUser.name} 프로필 이미지`}
                className="w-[6rem] h-[6rem] rounded-[50%]"
              />
            </div>
            <p className="w-full flex justify-between items-center">
              <Link href="my-page" className="text-headline-3">
                마이 프로필
              </Link>
              <form action={logout}>
                <button className="text-gray-600">로그아웃</button>
              </form>
            </p>
          </>
        )}
      </div>
    </>
  );
}
