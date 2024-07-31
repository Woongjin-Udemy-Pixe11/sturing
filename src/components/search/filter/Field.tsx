import { useFilterStore } from '@/store/filterStore';
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

type FieldProps = {
  filterCounts: Record<string, number>;
};

export default function Field({ filterCounts }: FieldProps) {
  const { field, setField } = useFilterStore();

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
          ? field.filter((item) => item !== name)
          : [...field, name];
      }
    }
    setField(newField);
  };

  return (
    <ul className="w-full flex gap-[1.2rem] flex-col">
      {checkList.map((checkbox) => (
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
  );
}
