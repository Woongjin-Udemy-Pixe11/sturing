import Link from 'next/link';

type TGrayFullLink = {
  moveLink: string;
  content: string;
};

export default function GrayFullLink(props: TGrayFullLink) {
  const { moveLink, content } = props;
  return (
    <>
      <Link
        href={moveLink}
        className="block w-full border  border-gray-400 text-gray-800 text-[1.6rem] rounded-[.5rem] text-center py-[1.2rem] mt-[2.4rem]"
      >
        {content}
      </Link>
    </>
  );
}
