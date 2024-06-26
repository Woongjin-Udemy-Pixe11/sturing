type TMainLabelProps = {
  content: string;
};

export default function MainLabel(props: TMainLabelProps) {
  const { content } = props;
  return (
    <span className="border text-main-600 border-main-600 px-[0.6rem] py-[0.2rem] text-content-2 rounded ml-2">
      {content}
    </span>
  );
}
