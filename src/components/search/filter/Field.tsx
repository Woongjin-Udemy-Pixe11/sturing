import CheckBox from './CheckBox';

const checkList = [
  { name: '전체', count: 204, isChecked: false },
  { name: '디자인', count: 41, isChecked: true },
  { name: '개발∙테크', count: 22, isChecked: false },
  { name: '마케팅', count: 35, isChecked: false },
  { name: '비즈니스', count: 12, isChecked: false },
  { name: '경제', count: 15, isChecked: false },
  { name: '외국어', count: 21, isChecked: false },
  { name: '자격증', count: 22, isChecked: false },
  { name: '자기계발', count: 12, isChecked: false },
  { name: '기타', count: 12, isChecked: false },
];

export default function Field({ state, onClickField }: any) {
  const field = state.field;
  return (
    <>
      <ul className="w-full flex gap-[.8rem] flex-col">
        {checkList &&
          checkList.map((checkbox) => (
            <li key={checkbox.name}>
              <CheckBox
                name={checkbox.name}
                count={checkbox.count}
                isChecked={field.includes(checkbox.name)}
                onClick={onClickField}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
