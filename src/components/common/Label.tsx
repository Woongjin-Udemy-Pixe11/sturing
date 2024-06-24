type TLabelProps = {
  isBlue?: boolean;
  content: string;
};

export default function Label(props: TLabelProps) {
  const { isBlue, content } = props;
  const classList = `${
    isBlue ? 'bg-main-600 text-white' : 'bg-main-100 text-main-600'
  } border border-main-600 px-[0.6rem] py-[0.2rem] text-content-2 rounded ml-2`;
  return (
    <>
      <span className={classList}>{content}</span>
    </>
  );
}
