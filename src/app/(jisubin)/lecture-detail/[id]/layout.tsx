import BookmarkBtnNavigationBar from '@/components/(jisubin)/lectureStudyDetail/BookmarkBtnNavigationBar';
import DetailTabBar from '@/components/(jisubin)/lectureStudyDetail/DetailTabBar';
import BackShareHeader from '../../_components/BackShareHeader';

import LectureStudyTitle from '../_components/LectureStudyTitle';
import LectureDetailTitle from '../_components/LectureDetailTitle';
import { getSession } from '@/utils/getSessions';

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

  const lecture = await fetchLectureDetail(id);

  const session = await getSession(); // 예시: next-auth 사용 시
  const userId = session?.user?.id;
  return (
    <>
      <div className="bg-gradient-to-tr from-[#D9E3FF] to-[#FFE4E0] ">
        <BackShareHeader />
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
      <div className="flex justify-center">
        <BookmarkBtnNavigationBar
          text="이 강의로 스터디 개설하기"
          link={`/make-study-form/${id}`}
          userId={userId}
          targetId={id}
        />
      </div>
    </>
  );
}
