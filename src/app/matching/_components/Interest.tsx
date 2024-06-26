import SelectMatching from '@/components/(jonghoo)/SelectMatching';
import { searchLabelList } from '@/constant/searchLabelList';
import FlexContainer from '@/components/(jonghoo)/FlexContainer';

export default function Interest() {
  return (
    <div className="w-[37.5rem] px-[1.6rem] py-[2rem]">
      <section>
        <h1 className="font-black text-headline-3">웅진님 안녕하세요.</h1>{' '}
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
          .map((label) => (
            <SelectMatching key={label.title} type="interest">
              <img src={label.imgSrc} alt={label.imgAlt} />
              <div className="ml-2">{label.title}</div>
            </SelectMatching>
          ))}
      </FlexContainer>
    </div>
  );
}
