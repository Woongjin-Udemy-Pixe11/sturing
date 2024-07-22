import CheckBox from './CheckBox';

const defaultCheckList = [
  { name: '전체', isChecked: false },
  { name: '디자인', isChecked: false },
  { name: '개발 테크', isChecked: false },
  { name: '마케팅', isChecked: false },
  { name: '비즈니스', isChecked: false },
  { name: '경제', isChecked: false },
  { name: '외국어', isChecked: false },
  { name: '자격증', isChecked: false },
  { name: '자기계발', isChecked: false },
  { name: '기타', isChecked: false },
];

export default function Field({ state, onClickField, filterCounts }: any) {
  const field = state.field;

  const checkList = defaultCheckList.map((item) => ({
    ...item,
    isChecked: field.includes(item.name),
    count: filterCounts[item.name] || 0,
  }));

  const handleFieldClick = (name: string) => {
    let newField;
    if (name === '전체') {
      newField = field.includes('전체') ? [] : ['전체'];
    } else {
      if (field.includes('전체')) {
        newField = [name];
      } else {
        newField = field.includes(name)
          ? field.filter((item: any) => item !== name)
          : [...field, name];
      }
    }
    onClickField(newField);
  };

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
                onClick={handleFieldClick}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
