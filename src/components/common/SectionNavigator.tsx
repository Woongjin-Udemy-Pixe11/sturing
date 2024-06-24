import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

type TSectionNavigator = {
  title: string;
  moveLink?: string;
};
export default function SectionNavigator(props: TSectionNavigator) {
  const { title, moveLink = '/' } = props;
  return (
    <>
      <div className="w-full px-[1.6rem] flex justify-between items-center text-headline-3 font-semibold mb-[2rem]">
        <span>{title}</span>
        <Link href={moveLink}>
          <IoIosArrowForward />
        </Link>
      </div>
    </>
  );
}
