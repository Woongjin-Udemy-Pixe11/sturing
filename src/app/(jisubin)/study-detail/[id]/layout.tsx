import BackShareHeader from '@/app/(jisubin)/_components/BackShareHeader';
import StudyDetailTitle from '@/app/(jisubin)/study-detail/_components/StudyDetailTitle';
import BookmarkBtnNavigationBar from '@/components/(jisubin)/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/(jisubin)/lectureStudyDetail/DetailTabBar';
import CourseLink from '@/components/common/CourseLink';
import { TLectureDetail } from '@/types/TLecture';
import { Tsession } from '@/types/TSession';
import { TStudyInfo } from '@/types/TStudyInfo';
import { getSession } from '@/utils/getSessions';

type TStudyDetailLayoutProps = {
  children: React.ReactNode;
  params: { id: string };
};

async function fetchStudyDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-detail/?id=${id}`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch study detail');
  return res.json();
}

async function fetchLectureDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch lecture');
  return res.json();
}

async function fetchStudyForm(userId: string, studyId: string) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-form/detail?studyid=${studyId}&userid=${userId}`,
  );
  return res.json();
}

export default async function StudyDetailLayout(
  props: TStudyDetailLayoutProps,
) {
  const { children, params } = props;
  const id = params.id;

  const study: TStudyInfo = await fetchStudyDetail(id);

  let lecture: TLectureDetail | null = null;

  if (study.studyLecture) {
    lecture = await fetchLectureDetail(study.studyLecture);
  }

  const session: Tsession = await getSession();
  const userId = session?.user?.id;
  const studyForm = await fetchStudyForm(userId, id);

  let isApply: boolean = true;
  if (
    new Date(study.studyStart).getTime() <= new Date().getTime() ||
    study.studyJoinMember == study.studyMember
  ) {
    isApply = false;
  }
  let isExistApply = false;
  if (studyForm && studyForm.studyFormSure) {
    isExistApply = true;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${study.studyImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className={`text-white object-cover`}
      >
        <BackShareHeader />
        <StudyDetailTitle
          type={study.studyType}
          category={study.studyCategory}
          name={study.studyName}
          meeting={study.studyMeetings}
          start={study.studyStart}
          end={study.studyEnd}
        />
      </div>

      <div className="bg-gray-100">
        {lecture && (
          <div className="mx-[1.6rem] py-[2rem]">
            <CourseLink
              courseTitle={lecture.lectureName}
              courseLink={lecture.lectureURL}
            />
          </div>
        )}

        <div className="mx-[1.6rem]">
          <DetailTabBar
            text1="정보"
            text1Link={`/study-detail/${id}`}
            text2="팀원"
            text2Link={`/study-detail/${id}/teamMembers`}
            text3="댓글"
            text3Link={`/study-detail/${id}/comment`}
          />
        </div>

        {children}
      </div>

      <div className="fixed bottom-0 z-20 bg-white w-full">
        <BookmarkBtnNavigationBar
          isApply={isApply}
          link={`/study-apply/${id}`}
          targetId={id}
          userId={userId}
          target="study"
        />
      </div>
    </>
  );
}
