import { ReactNode } from 'react';

type TMypageLabelProps = {
  content: string;
  icon?: ReactNode;
};

export default function MyPageLabel(props: TMypageLabelProps) {
  const { content, icon } = props;
  const classList = `bg-main-100 rounded-[0.3rem] py-2 px-4 text-content-2 font-medium flex gap-[0.2rem] items-center`;
  return (
    <>
      <span className={classList}>
        {icon}
        {content}
      </span>
    </>
  );
}
