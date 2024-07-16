//'use client';
import { study } from '@/dummy/studyList 2';
import { getSession } from '@/utils/getSessions';
import Link from 'next/link';
//import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
type TBookmarkBtnNavigationBarProps = {
  text: string;
  link: string;
  studyId: string;
};

async function fetchBookmark(userId: string, studyId: string) {
  if (!userId || !studyId) throw new Error('Invalid ID');
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-detail/bookmark/?userId=${userId}?studyId=${studyId}`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch bookmark');
  return res.json();
}

/*
/study-detail/{스터디아이디}

GET
접속시, 유저아이디, 스터디 아이디로 북마크리스트를 조회한다.

있으면 북마크 색칠되도록 표시, 없으면 비어있도록 표시한다.


비어있는 북마크 클릭시,
유저아이디, 스터디 아이디로 로 북마크를 조회

북마크 데이터 없으면, 
현재 유저아이디, 타겟아이디(스터디아이디), checked=true로 POST 요청

북마크 데이터 있으면,
-> checked=true로 변경 // PATCH

PATCH
채워져있는 북마크 클릭시,
유저아이디, 스터디 아이디로 로 북마크를 조회
-> checked: false로
*/

export default async function BookmarkBtnNavigationBar(
  props: TBookmarkBtnNavigationBarProps,
) {
  const { text, link, studyId } = props;
  const session = await getSession(); // 예시: next-auth 사용 시
  const userId = session?.user?.id;

  const bookmark = await fetchBookmark(userId, studyId);
  console.log('⭕️', bookmark);

  let isBookmarked = false;
  const onBookmarkClick = async () => {
    isBookmarked = bookmark ? true : false;
  };
  // const [isBookmarked, setIsBookmarked] = useState(false);
  // const onBookmarkClick = () => {
  //   setIsBookmarked(!isBookmarked);
  // };

  return (
    <div className="w-full mb-[1.6rem] px-[1.6rem] my-[4.6rem] flex flex-row items-center justify-between">
      <div className="m-[1.2rem] text-main-600" onClick={onBookmarkClick}>
        {isBookmarked ? <FaBookmark size={17} /> : <FaRegBookmark size={17} />}
      </div>
      <button className="w-full ml-[2rem] h-[5rem] rounded-[0.5rem] bg-main-600 font-semibold text-white select-none">
        <Link href={link}>{text}</Link>
      </button>
    </div>
  );
}
