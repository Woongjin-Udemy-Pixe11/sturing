import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import Card from '@/components/common/Card';
import { TStudyInfo } from '@/types/TStudyInfo';
import { Tsession } from '@/types/TSession';
import { getSession } from '@/utils/getSessions';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';

export default async function MyBookMarkList() {
  const session: Tsession = await getSession();
  const id = session?.user?.id;
  const data: TStudyInfo[] = await (
    await fetch(`http://localhost:3000/api/bookmark?id=${id}`, {
      cache: 'no-store',
    })
  ).json();
  return (
    <main>
      <MyPageHeader>내 관심 목록</MyPageHeader>
      <Tabs.Root defaultValue="스터디">
        <Tabs.List className="flex">
          <Tabs.Trigger
            value="스터디"
            className="flex-1 minitab-trigger py-[1.2rem]"
          >
            스터디
          </Tabs.Trigger>
          <Tabs.Trigger value="강의" className="flex-1 minitab-trigger">
            강의
          </Tabs.Trigger>
        </Tabs.List>
        <div className="px-[1.6rem] py-[2rem]">
          <Tabs.Content value="스터디" className="flex flex-col gap-[1rem]">
            <div className="grid grid-cols-2 gap-[1rem] m-auto w-full">
              {data &&
                data.map((study, index: number) => (
                  <div key={study._id}>
                    <Link href={`/study-detail/${study._id}`}>
                      <Card
                        userId={id}
                        studyId={study._id}
                        studyImage={study.studyImage}
                        studyMeetings={study.studyMeetings}
                        studyType={study.studyType}
                        studyCategory={study.studyCategory}
                        studyName={study.studyName}
                        studyStart={study.studyStart}
                        studyEnd={study.studyEnd}
                        studyPlace={study.studyPlace}
                        studyJoinMember={study.studyJoinMember}
                        studyMember={study.studyMember}
                      />
                    </Link>
                  </div>
                ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="강의" className="flex flex-col gap-[1.4rem]">
            {/* <div className="grid grid-cols-2 gap-3 m-auto w-full">
              {data &&
                data.map((study: any, index: any) => (
                  <div key={study.studyName} id={String(index)}>
                    <Card
                      studyId={study._id}
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
            </div> */}
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </main>
  );
}
