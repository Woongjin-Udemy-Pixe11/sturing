import Label from '@/components/common/label/Label';
import Link from 'next/link';

export type TNotice = {
  blackboardId: number;
  blackboardWriteId?: number;
  blackboardTitle?: string;
  blackboardContent?: string;
  blackboardImage?: string;
  blackboardViews?: number;
};

export type TNoticeListProps = {
  notices: TNotice[];
};

export default function NoticeBoardList(props: TNoticeListProps) {
  const { notices } = props;
  return (
    <>
      <ul className="px-[1.6rem] py-[2rem] flex flex-col gap-[1.5rem] min-h-[80vh] bg-white ">
        {notices.map((notice) => (
          <li
            key={notice.blackboardId}
            className="border border-gray-300 p-[1.8rem] rounded-[0.5rem]"
          >
            <Link
              href={`./notice-board/${notice.blackboardId}`}
              className="flex items-start gap-[1.4rem] [&>span]:flex-shrink-0"
            >
              <Label children={'필독'} />
              <p className="text-gray-800 text-content-1 flex-grow">
                {notice.blackboardTitle}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
