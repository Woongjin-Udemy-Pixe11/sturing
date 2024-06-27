type TFormButtonProps = {
  isBlue: boolean;
  content: string;
};

export default function FormButton(props: TFormButtonProps) {
  const { isBlue, content } = props;
  return (
    <>
      <button
        className={`${
          isBlue ? 'text-white bg-main-600 w-[60%]' : 'text-gray-700 w-[35%]'
        } px-[1.6rem] py-[0.8rem] rounded-[.5rem] border border-gray-300 whitespace-nowrap`}
      >
        {content}
      </button>
    </>
  );
}
