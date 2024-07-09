import BookmarkBtnNavigationBar from '@/components/(jisubin)/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/(jisubin)/lectureStudyDetail/DetailTabBar';
import CourseLink from '@/components/common/CourseLink';
import BackShareHeader from '../../_components/BackShareHeader';
import LectureStudyTitle from '../../_components/LectureStudyTitle';
import LectureDetailTitle from '../../_components/LectureDetailTitle';

type TLectureDetailLayoutProps = {
  children: React.ReactNode;
  params: { id: string };
};
export default async function LectureDetailLayout(
  props: TLectureDetailLayoutProps,
) {
  const { children, params } = props;
  return (
    <html lang="ko">
      <body className="w-full m-auto">
        <div className="bg-gradient-to-tr from-[#D9E3FF] to-[#FFE4E0] ">
          <BackShareHeader />
          <LectureStudyTitle />
        </div>

        <LectureDetailTitle id={params.id} />

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
