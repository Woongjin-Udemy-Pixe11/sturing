type TCheckBoxProps = {
  name: string;
  count: number;
  isChecked: boolean;
  onClick: any;
};

export default function CheckBox(props: TCheckBoxProps) {
  const { name, count, isChecked, onClick } = props;
  return (
    <>
      <label
        htmlFor="temp"
        className=" flex w-full gap-[.4rem] "
        onClick={() => {
          onClick(name);
        }}
      >
        <input type="checkbox" name="temp" checked={isChecked} />
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
    </>
  );
}
