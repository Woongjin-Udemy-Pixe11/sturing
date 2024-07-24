'use client';
import SelectMatching from '@/components/(JH)/matching/SelectMatching';
import { searchLabelList } from '@/constant/searchLabelList';
import FlexContainer from '@/components/(JH)/matching/FlexContainer';

type TInterestProps = {
  interest: string[];
  onClickInterest: (field: string) => void;
  nickname: string;
};

export default function Interest(props: TInterestProps) {
  const { interest, onClickInterest, nickname } = props;

  return (
    <div className="w-full px-[1.6rem] py-[2rem]">
      <section>
        <h1 className="font-black text-headline-3">{nickname}님 안녕하세요.</h1>{' '}
        <h1 className="font-black text-headline-3">
          현재 관심있는 분야는 무엇인가요?
        </h1>
        <p className="text-gray-700 mt-2 text-content-2">
          최대 3개까지 선택 가능합니다.
        </p>
      </section>
      <FlexContainer>
        {searchLabelList
          .filter((label) => label.title !== '기타')
          .map((label) => {
            let count = interest.indexOf(label.title);
            return (
              <div className="relative" key={label.title}>
                <SelectMatching
                  type="interest"
                  onClick={() => {
                    onClickInterest(label.title);
                  }}
                  active={interest.includes(label.title) ? true : false}
                >
                  <img src={label.imgSrc} alt={label.imgAlt} />
                  <div>{label.title}</div>
                </SelectMatching>
                {count !== -1 && (
                  <div className="text-blue-600 border border-blue-600 p-2 rounded-full absolute top-1 right-2 text-content-2 w-[12px] h-[12px] flex items-center justify-center">
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
