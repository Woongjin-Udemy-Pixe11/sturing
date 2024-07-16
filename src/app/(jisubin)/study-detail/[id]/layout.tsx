import BackShareHeader from '@/app/(jisubin)/_components/BackShareHeader';
import StudyDetailTitle from '@/app/(jisubin)/study-detail/_components/StudyDetailTitle';
import BookmarkBtnNavigationBar from '@/components/(jisubin)/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/(jisubin)/lectureStudyDetail/DetailTabBar';
import CourseLink from '@/components/common/CourseLink';

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

export default async function StudyDetailLayout(
  props: TStudyDetailLayoutProps,
) {
  const { children, params } = props;
  const id = params.id;

  const study = await fetchStudyDetail(id);
  let lecture = '';
  if (study.studyLecture) {
    lecture = await fetchLectureDetail(study.studyLecture);
  }
  return (
    <html lang="ko">
      <body className="w-full m-auto">
        <div
          style={{ backgroundImage: `url(${study.studyImage})` }}
          className={`text-white`}
        >
          {/*뒤로가기, 공유버튼 색상 흰색으로 변경 필요*/}
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

        <BookmarkBtnNavigationBar
          text="스터디 지원하기"
          link={`/study-apply/${id}`}
          studyId={id}
        />
      </body>
    </html>
  );
}
