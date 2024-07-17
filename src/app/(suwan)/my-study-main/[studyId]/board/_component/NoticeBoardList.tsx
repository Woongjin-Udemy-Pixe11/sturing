import Label from '@/components/common/label/Label';
import Link from 'next/link';

export type TNotice = {
  _id: string;
  studyId: string;
  writerId?: string;
  type: string;
  title?: string;
  content?: string;
  image?: string;
  views?: number;
};

export type TNoticeListProps = {
  noticeList: TNotice[];
};

export default function NoticeBoardList(props: TNoticeListProps) {
  const { noticeList } = props;
  return (
    <>
      <ul className="bg-white px-[1.6rem] py-[2rem] flex flex-col gap-[1.5rem] min-h-[80vh]">
        {noticeList.length > 0 &&
          noticeList.map((notice) => (
            <li
              key={notice._id}
              className="border border-gray-300 p-[1.8rem] rounded-[0.5rem]"
            >
              <Link
                href={`./notice-board/${notice._id}`}
                className="flex items-start gap-[1.4rem] [&>span]:flex-shrink-0"
              >
                <Label children={'필독'} />
                <p className="text-gray-800 text-content-1 flex-grow">
                  {notice.title}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
