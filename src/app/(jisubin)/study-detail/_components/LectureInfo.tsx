import TitleNavigator from '@/components/(jisubin)/lectureStudyDetail/TitleNavigator';
import Label from '@/components/common/label/Label';

type TLectureInfoProps = {
  rating: number;
  name: string;
  url: string;
};

export default function LectureInfo(props: TLectureInfoProps) {
  const { rating, name, url } = props;
  return (
    <div className="bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[1.2rem]">
      <div className="mt-[2.4rem]">
        <div className="pl-[0.4rem]">
          <TitleNavigator title="진행 강의 정보" moveLink={url} />
        </div>
        <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>
        <div className="flex flex-col mx-[2rem]">
          <div className="flex items-center gap-x-[0.4rem]">
            <Label isBlue={true}>{'온라인'}</Label>
            <Label isBlue={false} isStar={true}>
              {rating}
            </Label>
          </div>
          <div className="text-content-1 flex flex-col my-[1.2rem] gap-y-[0.4rem]">
            <span className="text-gray-950">{name}</span>
            <span className="text-gray-600">유데미디자인랩</span>
          </div>
        </div>
      </div>
    </div>
  );
}
