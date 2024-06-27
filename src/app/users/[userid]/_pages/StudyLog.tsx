import Card from '@/components/common/Card';
import MyPageHeader from '@/components/users/MypageHeader';

import { dummyCardList } from '@/dummy/mainPage';

export default function StudyLog() {
  return (
    <main>
      <MyPageHeader>스터디 이력</MyPageHeader>
      <section className="flex flex-wrap gap-2  py-[2rem] ">
        {dummyCardList &&
          dummyCardList.map((card) => (
            <div key={card.studyName}>
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
            </div>
          ))}
      </section>
    </main>
  );
}
