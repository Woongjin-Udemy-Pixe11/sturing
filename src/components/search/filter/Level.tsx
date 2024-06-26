import CheckBox from './CheckBox';

const checkList = [
  { name: '비기너', count: 150, isChecked: false },
  { name: '신입(1년 이하)', count: 41, isChecked: true },
  { name: '주니어(1~3년차)', count: 22, isChecked: false },
  { name: '시니어(4년 이상)', count: 35, isChecked: false },
  { name: '상관없음', count: 35, isChecked: false },
];

export default function Level() {
  return (
    <ul className="w-full flex flex-col gap-[.8rem]">
      {checkList &&
        checkList.map((checkbox) => (
          <li key={checkbox.name}>
            <CheckBox
              name={checkbox.name}
              count={checkbox.count}
              isChecked={checkbox.isChecked}
            />
          </li>
        ))}
    </ul>
  );
}
