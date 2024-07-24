import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';
import Card from '@/components/common/Card';
import { TStudyInfo } from '@/types/TStudyInfo';
import Link from 'next/link';

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
  const studies: TStudyInfo[] = await fetchLectureStudy(id);
  return (
    <div className="w-full">
      <div className="mt-[5rem]">
        <TitleNavigator
          title="이 강의를 수강하는 스터디"
          count={studies.length}
          moveLink="/"
        />
      </div>

      <div className="min-w-[34.4rem] grid grid-cols-2 gap-[2rem] mx-[1.6rem]">
        {/* //TODO:북마크가 안뜨는게맞나? */}
        {studies &&
          studies.map((study) => (
            <Link href={`/study-detail/${study._id}`} key={study._id}>
              <Card
                studyId={study._id}
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
            </Link>
          ))}
      </div>
    </div>
  );
}
