import CheckBox from './CheckBox';

const checkList = [
  { name: '3~5명', count: 150, isChecked: false },
  { name: '6~9명', count: 41, isChecked: true },
  { name: '10~15명', count: 22, isChecked: false },
  { name: '상관없음', count: 35, isChecked: false },
];

export default function People() {
  return (
    <>
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
    </>
  );
}
