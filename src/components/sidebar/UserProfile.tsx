import { logout } from '@/lib/actions/userAction';
import Link from 'next/link';
import GitHubLoginBtn from '../common/GitHubLoginBtn';

type TUserProfileProps = {
  user?: any;
  onClose: () => void;
};

export default function UserProfile(props: TUserProfileProps) {
  const { user, onClose } = props;
  const isLogined = user._id ? true : false;
  return (
    <>
      <div className="mt-[10rem]">
        {!isLogined && <GitHubLoginBtn />}
        {isLogined && (
          <>
            <div className="w-full flex justify-between mb-[3.2rem]">
              <p>
                <span className="block text-large-title mb-[.4rem] text-semibold">
                  {user.nickname}님
                </span>
                <span className="block text-content-1 text-gray-600">
                  {user.email}
                </span>
              </p>
              <div className="w-[6rem] h-[6rem] rounded-[50%] overflow-hidden">
                <img
                  src={user.image}
                  alt={`${user.nickname} 프로필 이미지`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <Link href={`/users/${user._id}`} className="text-headline-3">
                <span onClick={onClose}>마이 프로필</span>
              </Link>
              <form action={logout}>
                <button className="text-gray-600">로그아웃</button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
