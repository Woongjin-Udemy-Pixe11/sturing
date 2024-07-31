import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';
import Card from '@/components/common/Card';
import { TStudyInfo } from '@/types/TStudyInfo';
import { getSession } from '@/utils/getSessions';
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
  const session = await getSession();
  const userId = session?.user?.id;
  return (
    <div className="w-full pb-[2rem]">
      <div className="mt-[3rem]">
        <TitleNavigator
          title="이 강의를 수강하는 스터디"
          count={studies.length}
        />
      </div>

      <div className="min-w-[34.4rem] grid grid-cols-2 gap-[2rem] mx-[1.6rem]">
        {studies &&
          studies.map((study) => (
            <Link href={`/study-detail/${study._id}`} key={study._id}>
              <Card
                userId={userId}
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
