import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

type TTitleNavigatorProps = {
  title: string;
  count?: number;
  moveLink: string;
  children?: React.ReactNode;
};
export default function TitleNavigator(props: TTitleNavigatorProps) {
  const { title, count, moveLink, children } = props;
  return (
    <div className="flex flex-row justify-between items-center font-medium mb-[2rem] mx-[1.6rem]">
      <div className="flex flex-row justify-between items-center">
        <span className="pr-[0.5rem]">{title}</span>
        {count ? (
          <span className="text-main-600 pr-[0.5rem]">{count}개</span>
        ) : (
          <></>
        )}
        {children}
      </div>
      <Link href={moveLink}>
        <IoIosArrowForward />
      </Link>
    </div>
  );
}
