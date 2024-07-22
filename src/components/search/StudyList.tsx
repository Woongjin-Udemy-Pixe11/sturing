import { dummyCardList } from '@/dummy/mainPage';
import Link from 'next/link';
import Card from '../common/Card';
import GrayFullLink from './GrayFullLink';

type TStudyListProps = {
  isDetail?: boolean;
  data?: any[];
};

export default async function StudyList(props: TStudyListProps) {
  const { isDetail, data } = props;
  let isFull = false;
  let cardList = dummyCardList;

  if (!isDetail) {
    isFull = dummyCardList.length > 4 ? true : false;
    cardList = dummyCardList.slice(0, 4);
  }
  console.log(data);

  return (
    <>
      <div>
        {!isDetail && (
          <span className="block text-headline-3 font-semibold pt-[2rem]">
            스터디
          </span>
        )}
        <ul className="w-full grid grid-cols-2 justify-stretch items-start flex-wrap gap-x-[1.6rem] gap-y-[1.6rem] py-[2rem]">
          {data && data.length > 0 ? (
            data.map((card: any) => (
              <Link href={`/study-detail/${card._id}`}>
                <Card
                  key={card.id}
                  studyId={card._id}
                  studyImage={card.studyImage}
                  studyMeetings={card.studyMeetings}
                  studyType={card.studyType}
                  studyCategory={card.studyCategory}
                  studyName={card.studyName}
                  studyStart={card.studyStart}
                  studyEnd={card.studyEnd}
                  studyPlace={card.studyPlace}
                  studyJoinMember={card.studyJoinMember}
                  studyMember={card.studyMember}
                />
              </Link>
            ))
          ) : (
            <div>검색결과가 없습니다!</div>
          )}
        </ul>
        {isFull && (
          <GrayFullLink moveLink={'/search/study'} content="스터디 전체보기" />
        )}
      </div>
    </>
  );
}
