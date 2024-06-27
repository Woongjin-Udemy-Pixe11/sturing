import * as Tabs from '@radix-ui/react-tabs';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import { dummyCardList } from '@/dummy/mainPage';
import Card from '@/components/common/Card';

export default function MyBookMarkList() {
  return (
    <main>
      <MyPageHeader>내 관심 목록</MyPageHeader>
      <Tabs.Root defaultValue="스터디" className="mt-[2rem]">
        <Tabs.List className="flex">
          <Tabs.Trigger value="스터디" className="flex-1 minitab-trigger">
            스터디
          </Tabs.Trigger>
          <Tabs.Trigger value="강의" className="flex-1 minitab-trigger">
            강의
          </Tabs.Trigger>
        </Tabs.List>
        <div className="py-5">
          <Tabs.Content value="스터디" className="flex flex-col gap-[1rem]">
            <div className="flex flex-wrap gap-3 m-auto">
              {dummyCardList &&
                dummyCardList.map((card, index) => (
                  <div key={card.studyName} id={String(index)}>
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
            </div>
          </Tabs.Content>
          <Tabs.Content value="강의" className="flex flex-col gap-[1.4rem]">
            <div className="flex flex-wrap gap-3">
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
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </main>
  );
}
