import Label from '@/components/common/label/Label';

export default function LectureStudyTitle() {
  return (
    <div className="mt-[3.8rem] flex flex-col items-center justify-center">
      <Label isBlue={false} isStar={true}>
        {'4.5'}
      </Label>
      <div className="w-[30rem] h-[5.4rem] mt-[1.8rem] mb-[4rem]">
        <h1 className="text-center font-semibold">
          UXUI 디자이너가 피그마를 활용해 포트폴리오를 쌓는 법 A to Z
        </h1>
      </div>
    </div>
  );
}
