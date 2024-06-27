import { dummyCardList } from '@/dummy/lectureStudy';
import Card from '@/components/common/Card';
import TitleNavigator from '@/components/(jisubin)/TitleNavigator';

export default function LectureDetailStudyPage() {
  return (
    <>
      <div className="mt-[5rem]">
        <TitleNavigator
          title="이 강의를 수강하는 스터디"
          count={10}
          moveLink="/"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-[0.9rem] gap-y-[2rem] mx-[1.6rem]">
        {dummyCardList &&
          dummyCardList.map((card) => (
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
          ))}
      </div>
    </>
  );
}
