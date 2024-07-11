import Label from '@/components/common/label/Label';

type TLectureStudyTitleProps = {
  rating: number;
  title: string;
};
export default function LectureStudyTitle(props: TLectureStudyTitleProps) {
  const { rating, title } = props;
  return (
    <div className="mt-[3.8rem] flex flex-col items-center justify-center">
      <Label isBlue={false} isStar={true}>
        {rating}
      </Label>
      <div className="w-[30rem] h-[5.4rem] mt-[1.8rem] mb-[4rem]">
        <h1 className="text-center font-semibold">{title}</h1>
      </div>
    </div>
  );
}
