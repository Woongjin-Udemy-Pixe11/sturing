import { dummyLectureList } from '@/dummy/searchPage';
import Link from 'next/link';
import GrayFullLink from './GrayFullLink';
import dynamic from 'next/dynamic';
const LectureCard = dynamic(() => import('./LectureCard'));

type TLectureListProps = {
  isDetail?: boolean;
  data?: any[];
};

export default function LectureList(props: TLectureListProps) {
  const { isDetail, data } = props;
  let isFull = false;
  let cardList = dummyLectureList;

  if (!isDetail) {
    isFull = dummyLectureList.length > 2;
    cardList = dummyLectureList.slice(0, 2);
  }
  console.log(data);

  return (
    <>
      <div className=" pb-[4rem]">
        {!isDetail && (
          <span className="block text-headline-3 font-semibold py-[2rem]">
            강의
          </span>
        )}
        <ul className="w-full flex gap-[1.2rem] flex-col">
          {data && data.length > 0 ? (
            data.map((lecture: any, index) => (
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
          <GrayFullLink moveLink={'/search/lecture'} content="강의 전체보기" />
        )}
      </div>
    </>
  );
}
