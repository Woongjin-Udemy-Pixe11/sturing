type TFilterButtonProps = {
  isBlue: boolean;
  content: string;
};

export default function FilterButton(props: TFilterButtonProps) {
  const { isBlue, content } = props;
  return (
    <>
      <span
        className={`${
          isBlue ? 'text-main-600' : 'text-gray-800'
        } px-[1.6rem] py-[.8rem] rounded-[.5rem] text-main-600 border border-main-300 whitespace-nowrap`}
      >
        {content}
      </span>
    </>
  );
}
