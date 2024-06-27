import Label from '@/components/common/Label';
import { dummyCardList } from '@/dummy/lectureRating';
import TitleNavigator from '@/components/lectureStudyDetail/TitleNavigator';

export default function LectureDetailRatingPage() {
  const rating = <Label isBlue={false}>{'4.5'}</Label>;
  return (
    <div>
      <div className="mt-[5rem]">
        <TitleNavigator title="강의평점" count={13} moveLink="/">
          {rating}
        </TitleNavigator>
      </div>

      <div className="mx-[1.6rem] mb-[10rem] flex flex-col items-center justify-center">
        {dummyCardList &&
          dummyCardList.map((card) => (
            <div className="w-[34.3rem] h-[12.2rem] rounded-[0.8rem] bg-slate-300 border-gray-950 flex justify-center items-center text-content-1 mb-[1.6rem]">
              <div className="w-[31.1rem] h-[9.5rem] flex flex-col gap-y-[0.6rem]">
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
