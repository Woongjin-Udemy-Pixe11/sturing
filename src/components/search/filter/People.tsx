import CheckBox from './CheckBox';

const defaultCheckList = [
  { name: '3~5명', isChecked: false },
  { name: '6~9명', isChecked: false },
  { name: '10~15명', isChecked: false },
  { name: '상관없음', isChecked: false },
];

export default function People({ state, onClickPeople, filterCounts }: any) {
  const people = state.people;

  const checkList = defaultCheckList.map((item) => ({
    ...item,
    isChecked: people.includes(item.name),
    count: filterCounts[item.name] || 0,
  }));

  const handlePeopleClick = (name: string) => {
    let newField;
    if (name === '상관없음') {
      newField = people.includes('상관없음') ? [] : ['상관없음'];
    } else {
      if (people.includes('상관없음')) {
        newField = [name];
      } else {
        newField = people.includes(name)
          ? people.filter((item: any) => item !== name)
          : [...people, name];
      }
    }
    onClickPeople(newField);
  };

  return (
    <>
      <ul className="w-full flex flex-col gap-[.8rem]">
        {checkList.map((checkbox) => (
          <li key={checkbox.name}>
            <CheckBox
              name={checkbox.name}
              count={checkbox.count}
              isChecked={people.includes(checkbox.name)}
              onClick={handlePeopleClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
