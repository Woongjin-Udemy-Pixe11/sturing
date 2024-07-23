'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import GrayFullLink from './GrayFullLink';
const LectureCard = dynamic(() => import('./LectureCard'));

type TLectureListProps = {
  isDetail?: boolean;
  data?: any[];
  limit?: number;
  keyword?: string;
  filters?: any;
};

export default function LectureList(props: TLectureListProps) {
  const { isDetail, data, limit, keyword, filters } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  let isFull = false;
  let cardList = data || [];

  if (!isDetail && limit) {
    isFull = cardList.length > limit;
    cardList = cardList.slice(0, limit);
  }

  const handleViewAllLectures = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('tab', '강의');

    if (keyword) {
      newSearchParams.set('keyword', keyword);
    }

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          newSearchParams.set(key, value.join(','));
        } else if (value) {
          newSearchParams.set(key, value.toString());
        }
      });
    }

    router.push(`/search/result?${newSearchParams.toString()}`);
  };

  return (
    <>
      <div className=" pb-[4rem]">
        {!isDetail && (
          <span className="block text-headline-3 font-semibold py-[2rem]">
            강의
          </span>
        )}
        <ul className="w-full flex gap-[1.2rem] flex-col">
          {cardList && cardList.length > 0 ? (
            cardList.map((lecture: any, index) => (
              <li key={index}>
                <Link href={`/lecture-detail/${lecture._id}`}>
                  <LectureCard
                    name={lecture.lectureName}
                    author={lecture.lectureInstructor}
                    star={lecture.lectureRating}
                  />
                </Link>
              </li>
            ))
          ) : (
            <div>검색결과가 없습니다!</div>
          )}
        </ul>
        {/* TODO: url 경로 수정 필요 */}
        {isFull && (
          <GrayFullLink
            content="강의 전체보기"
            onClick={handleViewAllLectures}
          />
        )}
      </div>
    </>
  );
}
