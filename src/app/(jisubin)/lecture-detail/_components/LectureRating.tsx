import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';
import Label from '@/components/common/label/Label';
import { TLectureDetail } from '@/types/TLecture';

type TLectureRatingProps = {
  id: string;
};

async function fetchLectureDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`);
  if (!res.ok) throw new Error('Failed to fetch lecture');
  return res.json();
}

export default async function LectureRating(props: TLectureRatingProps) {
  const { id } = props;
  const lecture: TLectureDetail = await fetchLectureDetail(id);
  const reviews = lecture.lectureReviews;
  return (
    <>
      <div className="mt-[3rem]">
        <TitleNavigator title="강의평점" count={reviews.length}>
          <Label isBlue={false} isStar={true}>
            {lecture.lectureRating}
          </Label>
        </TitleNavigator>
      </div>

      <div className="mx-[1.6rem] mb-[10rem] flex flex-col justify-center">
        {reviews &&
          reviews.map((review) => (
            <div className="py-[1.6rem] rounded-[0.8rem] border border-gray-300 flex items-center text-content-1 mb-[1.6rem] px-[1.6rem]">
              <div className="flex flex-col gap-y-[0.6rem]">
                <div>
                  <span>{review.reviewName}</span>
                  <span className="text-main-600"> {review.reviewRating}</span>
                </div>
                <p>{review.reviewContent}</p>
                <span>{review.reviewDate}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
