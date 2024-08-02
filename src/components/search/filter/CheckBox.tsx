type TCheckBoxProps = {
  name: string;
  count: number;
  isChecked: boolean;
  onClick: (name: string) => void;
};

export default function CheckBox(props: TCheckBoxProps) {
  const { name, count, isChecked, onClick } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onClick(name);
  };

  return (
    <label htmlFor={name} className="flex w-full gap-[.4rem] items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        className={`${
          isChecked ? 'text-main-600' : 'text-gray-1000'
        } text-[1.6rem]`}
      >
        {name}
      </span>
      <span
        className={`${
          isChecked ? 'text-main-600' : 'text-gray-500'
        } text-[1.6rem]`}
      >
        {count}
      </span>
    </label>
  );
}
