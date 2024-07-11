import Label from '@/components/common/label/Label';

type TStudyDetailTitleProps = {
  type: string;
  category: string;
  name: string;
  meeting: string;
  start: string;
  end: string;
};

export default function StudyDetailTitle(props: TStudyDetailTitleProps) {
  const { type, category, name, meeting, start, end } = props;

  const startDate = start.split('T')[0].split('-').slice(1).join('.');
  const endDate = end.split('T')[0].split('-').slice(1).join('.');

  return (
    <div className="mt-[3.8rem] pb-[4rem] flex flex-col items-center justify-center">
      <div className="flex flex-row gap-x-[0.4rem]">
        <Label isBlue={true}>{type}</Label>
        <Label isBlue={false}>{category}</Label>
      </div>
      <div className="w-[30rem] h-[5.4rem] mt-[1.8rem]">
        <h1 className="text-center font-semibold">{name} </h1>
      </div>
      <div className="flex flex-row items-center justify-center text-content-2">
        <span>{meeting}</span>
        <div className="h-[1.2rem] leading-[1.2rem] border-l border-gray-400 mx-[1rem]"></div>
        <span>
          {startDate} ~ {endDate}
        </span>
      </div>
    </div>
  );
}
