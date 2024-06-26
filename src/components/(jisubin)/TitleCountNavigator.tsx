import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

type TTitleCountNavigatorProps = {
  title: string;
  count: number;
  moveLink: string;
  children?: React.ReactNode;
};
export default function TitleCountNavigator(props: TTitleCountNavigatorProps) {
  const { title, count, moveLink, children } = props;
  return (
    <div className="flex flex-row justify-between items-center font-semibold mb-[2rem] mx-[1.6rem]">
      <div className="flex flex-row justify-between items-center">
        <span className="pr-[0.5rem]">{title}</span>
        <span className="text-main-600 pr-[0.5rem]">{count}개</span>
        {children}
      </div>
      <Link href={moveLink}>
        <IoIosArrowForward />
      </Link>
    </div>
  );
}
