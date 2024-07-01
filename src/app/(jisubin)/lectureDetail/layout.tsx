import BookmarkBtnNavigationBar from '@/components/(jisubin)/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/(jisubin)/lectureStudyDetail/DetailTabBar';
import CourseLink from '@/components/common/CourseLink';
import BackShareHeader from '../_components/BackShareHeader';
import LectureStudyTitle from '../_components/LectureStudyTitle';

export default function LectureDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="w-full m-auto">
        <div className="bg-gradient-to-tr from-[#D9E3FF] to-[#FFE4E0] ">
          <BackShareHeader />
          <LectureStudyTitle />
        </div>

        <div className="mx-[1.6rem] my-[2rem]">
          <CourseLink
            courseTitle="UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z"
            courseLink="/"
          />
        </div>
        <div className="mx-[1.6rem]">
          <DetailTabBar
            text1="강의소개"
            text1Link="/lectureDetail"
            text2="스터디"
            text2Link="/lectureDetail/study"
            text3="평점"
            text3Link="/lectureDetail/rating"
          />
        </div>

        {children}

        <div className="flex justify-center">
          <BookmarkBtnNavigationBar
            text="이 강의로 스터디 개설하기"
            link="/make-study-form"
          />
        </div>
      </body>
    </html>
  );
}
