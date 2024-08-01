import FlexContainer from '@/components/matching/FlexContainer';
import SelectMatching from '@/components/matching/SelectMatching';
import { emojiLabelList } from '@/constant/emojiLabelList';

type Tmoodprops = {
  moods: string[];
  onClickMood: (mood: string) => void;
  nickname: string;
};

export default function Mood(props: Tmoodprops) {
  const { moods, onClickMood, nickname } = props;
  return (
    <div className="w-full px-[1.6rem] py-[2rem]">
      <section>
        <h1 className="font-medium text-[2rem]">{nickname}님이 선호하는</h1>
        <h1 className="font-medium text-[2rem]">
          스터디 분위기를 선택해 주세요.
        </h1>
        <p className="text-gray-700 mt-4 text-content-2">
          최대 3개까지 선택 가능합니다.
        </p>
      </section>
      <FlexContainer>
        {emojiLabelList.map((label) => {
          let count = moods.indexOf(label.title);
          return (
            <div className="relative" key={label.title}>
              <SelectMatching
                type="mood"
                onClick={() => {
                  onClickMood(label.title);
                }}
                active={moods.includes(label.title) && true}
              >
                <img src={label.imgSrc} alt={label.imgAlt} />
                <div className="ml-2">{label.title}</div>
              </SelectMatching>
              {count !== -1 && (
                <div className="text-blue-600 border border-blue-600 p-[.7rem] rounded-full absolute top-[.7rem] right-[.8rem] text-content-2 w-[12px] h-[12px] flex items-center justify-center">
                  {count + 1}
                </div>
              )}
            </div>
          );
        })}
      </FlexContainer>
    </div>
  );
}
