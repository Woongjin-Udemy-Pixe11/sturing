import MyPageProfileCard from '@/components/(JH)/users/MyPageProfileCard';
import MyStudyInfo from '@/components/(JH)/users/MyStudyInfo';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import SturingRate from '@/components/(JH)/users/SturingRate';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

export default async function MyPage({
  auth,
  userid,
  activestudy,
  completedstudy,
}: {
  auth?: boolean;
  userid?: string;
  completedstudy: number;
  activestudy: number;
}) {
  const loginbg = `bg-gradient-to-tr from-[rgba(217,227,255,0.55)] to-[rgba(255,228,224,0.55)]`;
  const data = await (
    await fetch(`http://localhost:3000/api/mypage?id=${userid}`, {
      cache: 'no-store',
    })
  ).json();
  if (data === null) {
    return '아직 유저가 없습니다.';
  }
  console.log(data);

  //TODO: 404 페이지 혹은 유저없음 페이지 만들기

  return (
    <main className="mb-[5rem]">
      <MyPageHeader>{auth && '마이페이지'}</MyPageHeader>
      <section className={`${loginbg} px-[1.6rem] py-[2.4rem]`}>
        <MyPageProfileCard auth={auth} data={data} />
        {auth && (
          <div className="mt-[1.5rem]">
            <MyStudyInfo
              userid={userid}
              activestudy={activestudy}
              completedstudy={completedstudy}
            />
          </div>
        )}
      </section>
      <SturingRate data={data} />
      <div className="border mt-[2rem]">
        <div className="w-full px-[1.6rem] py-[2rem] flex justify-between items-center text-headline-3 font-semibold">
          <span>{`받은 스터디 평가 ${
            data.numberReview ? data.numberReview : 0
          }`}</span>
          <Link href={`/users/${userid}/mystudyreview`}>
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
      {!auth && (
        <div className="border-b">
          <div className="w-full px-[1.6rem] py-[2rem] flex justify-between items-center text-headline-3 font-semibold">
            <span>{`스터디 이력 ${completedstudy}`}</span>
            <Link href={`/users/${userid}/mystudylog`}>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
