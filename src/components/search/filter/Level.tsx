import { useFilterStore } from '@/store/filterStore';
import CheckBox from './CheckBox';

const defaultCheckList = [
  { name: '비기너', isChecked: false },
  { name: '신입(1년 이하)', isChecked: false },
  { name: '주니어(1~3년차)', isChecked: false },
  { name: '시니어(4년 이상)', isChecked: false },
  { name: '상관없음', isChecked: false },
];

type LevelProps = {
  filterCounts: Record<string, number>;
};

export default function Level({ filterCounts }: LevelProps) {
  const { level, setLevel } = useFilterStore();

  const checkList = defaultCheckList.map((item) => ({
    ...item,
    isChecked: level.includes(item.name),
    count: filterCounts[item.name] || 0,
  }));

  return (
    <ul className="w-full flex flex-col gap-[1.2rem]">
      {checkList.map((checkbox) => (
        <li key={checkbox.name}>
          <CheckBox
            name={checkbox.name}
            count={checkbox.count}
            isChecked={level.includes(checkbox.name)}
            onClick={setLevel}
          />
        </li>
      ))}
    </ul>
  );
}
