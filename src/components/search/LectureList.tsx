import { dummyLectureList } from '@/dummy/searchPage';
import LectureCard from './LectureCard';
import GrayFullLink from './GrayFullLink';

type TLectureListProps = {
  isDetail?: boolean;
};

export default function LectureList(props: TLectureListProps) {
  const { isDetail } = props;
  let isFull = false;
  let cardList = dummyLectureList;

  if (!isDetail) {
    isFull = dummyLectureList.length > 2;
    cardList = dummyLectureList.slice(0, 2);
  }

  return (
    <>
      <div className=" pb-[4rem]">
        {!isDetail && (
          <span className="block text-headline-3 font-semibold py-[2rem]">
            강의
          </span>
        )}
        <ul className="w-full flex gap-[1.2rem] flex-col">
          {cardList &&
            cardList.map((lecture, index) => (
              <li key={index}>
                <LectureCard
                  name={lecture.name}
                  author={lecture.author}
                  star={lecture.star}
                />
              </li>
            ))}
        </ul>
        {/* TODO: url 경로 수정 필요 */}
        {isFull && (
          <GrayFullLink moveLink={'/search/lecture'} content="강의 전체보기" />
        )}
      </div>
    </>
  );
}
