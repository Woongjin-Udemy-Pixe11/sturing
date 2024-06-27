type TMypageLabelProps = {
  content: string;
};

export default function MyPageLabel(props: TMypageLabelProps) {
  const { content } = props;
  const classList = `bg-main-200 rounded-[0.3rem] py-2 px-4 text-content-2 font-medium`;
  return (
    <>
      <span className={classList}>{content}</span>
    </>
  );
}
