import Link from 'next/link';
import { IoClose } from 'react-icons/io5';

type TCurrentWordProps = {
  moveLink: string;
  content: string;
  remove: any;
};

export default function CurrentWord(props: TCurrentWordProps) {
  const { moveLink, content, remove } = props;
  return (
    <>
      <li className="w-auto flex items-center px-[1.2rem] py-[.8rem] border border-gray-300 rounded-[.5rem]">
        <Link
          className="text-gray-800 text-content-1 leading-tight mr-[.4rem]"
          href={moveLink}
        >
          {content}
        </Link>
        <button onClick={remove}>
          <IoClose className="inline w-[1.6rem] h-[1.6rem] text-gray-600" />
        </button>
      </li>
    </>
  );
}
