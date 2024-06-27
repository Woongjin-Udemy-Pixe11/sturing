import ScrollableContainer from './ScrollableContainer';
import { dummyCardList } from '@/dummy/mainPage';
import Card from './Card';

export default function StudyCardList() {
  return (
    <ScrollableContainer>
      {dummyCardList &&
        dummyCardList.map((card, index) => (
          <li key={index}>
            <Card
              width="182"
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
    </ScrollableContainer>
  );
}
