import CommonTab from '@/components/common/Tab/CommonTab';

type Tregionprops = {
  regions: string[];
  onClickRegion: (region: string) => void;
  nickname: string;
};

export default function Region(props: Tregionprops) {
  const { regions, onClickRegion, nickname } = props;
  return (
    <div className="w-full">
      <section className="pt-[2rem] px-[1.6rem]">
        <h1 className="font-semibold text-headline-3">
          {nickname}님이 선호하는
        </h1>
        <h1 className="font-semibold text-headline-3">
          스터디 장소를 선택해 주세요.
        </h1>
        <p className="text-gray-700 mt-4 text-content-2">
          최대 3개까지 선택 가능합니다.
        </p>
      </section>
      <CommonTab regions={regions} onClickRegion={onClickRegion} />
    </div>
  );
}
