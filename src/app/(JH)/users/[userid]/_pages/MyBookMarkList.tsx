import * as Tabs from '@radix-ui/react-tabs';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import Card from '@/components/common/Card';
import { formatDate } from '@/components/common/StudyCardList';
import ScrollableContainer from '@/components/common/ScrollableContainer';

export default async function MyBookMarkList({ data }: any) {
  console.log(data);
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
            <div className="grid grid-cols-2 gap-3 m-auto w-full">
              {data &&
                data.map((study: any, index: any) => (
                  <div key={study.studyName} id={String(index)}>
                    <Card
                      studyId={study.studyId}
                      studyImage={study.studyImage}
                      studyMeetings={study.studyMeetings}
                      studyType={study.studyType}
                      studyCategory={study.studyCategory}
                      studyName={study.studyName}
                      studyStart={formatDate(study.studyStart)}
                      studyEnd={formatDate(study.studyEnd)}
                      studyPlace={study.studyPlace}
                      studyJoinMember={study.studyJoinMember}
                      studyMember={study.studyMember}
                    />
                  </div>
                ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="강의" className="flex flex-col gap-[1.4rem]">
            <div className="grid grid-cols-2 gap-3 m-auto w-full">
              {data &&
                data.map((study: any, index: any) => (
                  <div key={study.studyName} id={String(index)}>
                    <Card
                      studyId={study.studyId}
                      studyImage={study.studyImage}
                      studyMeetings={study.studyMeetings}
                      studyType={study.studyType}
                      studyCategory={study.studyCategory}
                      studyName={study.studyName}
                      studyStart={formatDate(study.studyStart)}
                      studyEnd={formatDate(study.studyEnd)}
                      studyPlace={study.studyPlace}
                      studyJoinMember={study.studyJoinMember}
                      studyMember={study.studyMember}
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
