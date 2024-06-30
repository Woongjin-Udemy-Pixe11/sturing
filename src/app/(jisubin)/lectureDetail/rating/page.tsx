import Label from '@/components/common/label/Label';
import { dummyCardList } from '@/dummy/lectureRating';
import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';

export default function LectureDetailRatingPage() {
  const rating = (
    <Label isBlue={false} isStar={true}>
      {'4.5'}
    </Label>
  );
  return (
    <div>
      <div className="mt-[5rem]">
        <TitleNavigator title="강의평점" count={13} moveLink="/">
          {rating}
        </TitleNavigator>
      </div>

      <div className="mx-[1.6rem] mb-[10rem] flex flex-col justify-center">
        {dummyCardList &&
          dummyCardList.map((card) => (
            <div className=" h-[12.2rem] rounded-[0.8rem] border border-gray-300 flex items-center text-content-1 mb-[1.6rem] pl-[1.6rem]">
              <div className="h-[9.5rem] flex flex-col gap-y-[0.6rem]">
                <div>
                  <span>{card.user}</span>
                  <span>{card.rating}</span>
                </div>
                <p>{card.comment}</p>
                <span>{card.date}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
