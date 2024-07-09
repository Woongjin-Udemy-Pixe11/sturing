import Label from '@/components/common/label/Label';
import { dummyCardList } from '@/dummy/lectureRating';
import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';

type TLectureDetailRatingPageProps = {
  lectureRating: number;
  lectureReviews: Array<object>;
};
export default function LectureDetailRatingPage(
  props: TLectureDetailRatingPageProps,
) {
  const { lectureRating, lectureReviews } = props;

  return (
    <div>
      <div className="mt-[5rem]">
        <TitleNavigator
          title="강의평점"
          count={lectureReviews.length}
          moveLink="/"
        >
          <Label isBlue={false} isStar={true}>
            {lectureRating}
          </Label>
        </TitleNavigator>
      </div>

      <div className="mx-[1.6rem] mb-[10rem] flex flex-col justify-center">
        {lectureReviews &&
          lectureReviews.map((review) => (
            <div className="mt-[1.6rem] py-[1.6rem] rounded-[0.8rem] border border-gray-300 flex items-center text-content-1 mb=-[1.6rem] pl-[1.6rem]">
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
    </div>
  );
}
