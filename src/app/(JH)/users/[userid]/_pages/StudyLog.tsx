import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import Card from '@/components/common/Card';
import { getUserStudies } from '@/app/api/study/user/route';

export default async function StudyLog({ id }: { id: any }) {
  const userstudy = await getUserStudies(id);
  if (userstudy.completed.length === 0) {
    return <div>아직 스터디 이력이없습니다.</div>;
  }
  return (
    <main>
      <MyPageHeader>스터디 이력</MyPageHeader>
      <section className="flex flex-wrap gap-2 px-[1.6rem] py-[2rem] ">
        <div className="grid grid-cols-2 gap-3 m-auto w-full">
          {userstudy.completed &&
            userstudy.completed.map((study) => (
              <div key={study.studyName} id={study.studyId}>
                <Card
                  studyId={study.studyId}
                  studyImage={study.studyImage}
                  studyMeetings={study.studyMeetings}
                  studyType={study.studyType}
                  studyCategory={study.studyCategory}
                  studyName={study.studyName}
                  studyStart={new Date(study.studyStart).toISOString()}
                  studyEnd={new Date(study.studyEnd).toISOString()}
                  studyPlace={study.studyPlace}
                  studyJoinMember={study.studyJoinMember}
                  studyMember={study.studyMember}
                />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
