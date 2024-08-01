import BookmarkBtnNavigationBar from '@/components/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/lectureStudyDetail/DetailTabBar';

import LectureStudyTitle from '../_components/LectureStudyTitle';
import LectureDetailTitle from '../_components/LectureDetailTitle';
import { getSession } from '@/utils/getSessions';
import { TLectureDetail } from '@/types/TLecture';
import { Tsession } from '@/types/TSession';
import BackShareHeader from '@/components/lectureStudyDetail/BackShareHeader';

type TLectureDetailLayoutProps = {
  children: React.ReactNode;
  params: { id: string };
};

async function fetchLectureDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch lecture');
  return res.json();
}

export default async function LectureDetailLayout(
  props: TLectureDetailLayoutProps,
) {
  const { children, params } = props;
  const id = params.id;

  const lecture: TLectureDetail = await fetchLectureDetail(id);

  const session: Tsession = await getSession(); // 예시: next-auth 사용 시
  const userId = session?.user?.id;
  return (
    <>
      <div className="bg-gradient-to-tr from-[#D9E3FF] to-[#FFE4E0] ">
        <BackShareHeader iconColor="black" />
        <LectureStudyTitle
          rating={lecture.lectureRating}
          title={lecture.lectureName}
        />
      </div>

      <LectureDetailTitle
        title={lecture.lectureName}
        link={lecture.lectureURL}
      />

      <div className="mx-[1.6rem]">
        <DetailTabBar
          text1="강의소개"
          text1Link={`/lecture-detail/${id}`}
          text2="스터디"
          text2Link={`/lecture-detail/${id}/study`}
          text3="평점"
          text3Link={`/lecture-detail/${id}/rating`}
        />
      </div>

      {children}

      <div className="fixed bottom-0 z-20 bg-white w-full">
        <BookmarkBtnNavigationBar
          isApply={true}
          link={`/make-study-form/${id}`}
          userId={userId}
          targetId={id}
          target="lecture"
        />
      </div>
    </>
  );
}
