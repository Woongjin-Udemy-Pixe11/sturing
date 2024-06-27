import { dummyCardList } from '@/dummy/mainPage';
import Card from '../common/Card';
import GrayFullLink from './GrayFullLink';

type TStudyListProps = {
  isDetail?: boolean;
};

export default function StudyList(props: TStudyListProps) {
  const { isDetail } = props;
  let isFull = false;
  let cardList = dummyCardList;

  if (!isDetail) {
    isFull = dummyCardList.length > 4;
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
        <ul className="w-full flex justify-between items-center flex-wrap gap-y-[.8rem] py-[2rem]">
          {cardList &&
            cardList.map((card, index) => (
              <li key={index}>
                <Card
                  width="167"
                  studyImage={card.studyImage}
                  studyMeetings={card.studyMettings}
                  studyTypeisBlue={card.studyTypeisBlue}
                  studyType={card.studyType}
                  studyCategoryisBlue={card.studyCategoryisBlue}
                  studyCatecory={card.studyCatecory}
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