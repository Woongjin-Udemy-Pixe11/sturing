import { dummyCardList } from '@/dummy/mainPage';
import Card from '../common/Card';
import GrayFullLink from './GrayFullLink';

type TStudyListProps = {
  isDetail?: boolean;
  data?: any;
};

export default async function StudyList(props: TStudyListProps) {
  const { isDetail,data } = props;
  let isFull = false;
  let cardList = dummyCardList;

  if (!isDetail) {
    isFull = dummyCardList.length > 4 ? true : false;
    cardList = dummyCardList.slice(0, 4);
  }

  return (
    <>
      <div>
        {!isDetail && (
          <span className="block text-headline-3 font-semibold pt-[2rem]">
            스터디
          </span>
        )}
        <ul className="w-full grid grid-cols-2 justify-stretch items-center flex-wrap gap-x-[1.6rem] gap-y-[.8rem] py-[2rem]">
          {data &&
            data.map((card:any) => (
              <li key={card.id}>
                <Card
                  studyImage={card.studyImage}
                  studyMeetings={card.studyMettings}
                  studyTypeisBlue={card.studyTypeisBlue}
                  studyType={card.studyType}
                  studyCategoryisBlue={card.studyCategoryisBlue}
                  studyCategory={card.studyCategory}
                  studyName={card.studyName}
                  studyStart={card.studyStart}
                  studyEnd={card.studyEnd}
                  studyPlace={card.studyPlace}
                  studyJoinMember={card.studyJoinMember}
                  studyMember={card.studyMember}
                />
              </li>
            ))}
        </ul>
        {isFull && (
          <GrayFullLink moveLink={'/search/study'} content="스터디 전체보기" />
        )}
      </div>
    </>
  );
}
