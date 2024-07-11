import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';
import Card from '@/components/common/Card';

type TLectureStudyProps = {
  id: string;
};

async function fetchLectureStudy(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/study/${id}`);
  if (!res.ok) throw new Error('Failed to fetch lecture study');
  return res.json();
}

export default async function LectureStudy(props: TLectureStudyProps) {
  const { id } = props;
  const studies = await fetchLectureStudy(id);
  return (
    <div className="w-full">
      <div className="mt-[5rem]">
        <TitleNavigator
          title="이 강의를 수강하는 스터디"
          count={studies.length}
          moveLink="/"
        />
      </div>

      {/* <div className="min-w-[34.4rem] grid grid-cols-2 gap-[2rem] mx-[1.6rem]">
        {dummyCardList &&
          dummyCardList.map((card) => (
            <Card
              studyImage={card.studyImage}
              studyMeetings={card.studyMettings}
              studyTypeisBlue={card.studyTypeisBlue}
              studyType={card.studyType}
              studyCategoryisBlue={card.studyCategoryisBlue}
              studyCategory={card.studyCatecory}
              studyName={card.studyName}
              studyStart={card.studyStart}
              studyEnd={card.studyEnd}
              studyPlace={card.studyPlace}
              studyJoinMember={card.studyJoinMember}
              studyMember={card.studyMember}
            />
          ))}
      </div> */}
      <div className="min-w-[34.4rem] grid grid-cols-2 gap-[2rem] mx-[1.6rem]">
        {studies &&
          studies.map((study) => (
            <Card
              studyImage={study.studyImage}
              studyMeetings={study.studyMeetings}
              studyTypeisBlue={true}
              studyType={study.studyType}
              studyCategoryisBlue={false}
              studyCategory={study.studyCategory}
              studyName={study.studyName}
              studyStart={study.studyStart}
              studyEnd={study.studyEnd}
              studyPlace={study.studyPlace}
              studyJoinMember={study.studyJoinMember}
              studyMember={study.studyMember}
            />
          ))}
      </div>
    </div>
  );
}
