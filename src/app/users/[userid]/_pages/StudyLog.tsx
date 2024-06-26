import Card from '@/components/common/Card';
import MyPageHeader from '../_componets/MypageHeader';
import { dummyCardList } from '@/dummy/mainPage';

export default function StudyLog() {
  return (
    <main>
      <MyPageHeader>스터디 이력</MyPageHeader>
      <section className="flex flex-wrap gap-2 px-[1.6rem] py-[2.0rem]">
        {dummyCardList &&
          dummyCardList.map((card) => (
            <div key={card.studyName}>
              <Card
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
            </div>
          ))}
      </section>
    </main>
  );
}
