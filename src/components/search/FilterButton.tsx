type TFilterButtonProps = {
  isBlue: boolean;
  content: string;
};

export default function FilterButton(props: TFilterButtonProps) {
  const { isBlue, content } = props;
  return (
    <>
      <span
        className={`
        ${
          isBlue
            ? 'text-main-600 border-main-400 font-medium'
            : 'text-gray-700 border-main-200'
        }
        px-[1.6rem] py-[1rem] rounded-[.5rem] text-content-1 border whitespace-nowrap
      `}
      >
        {content}
      </span>
    </>
  );
}
