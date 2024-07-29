'use client';

import SubHeader from '@/components/common/SubHeader';
import Label from '@/components/common/label/Label';
import { deleteNotice } from '@/lib/actions/studyMainAction';
import { TBlackboard } from '@/types/TStudyBoard';
import { dateCalculate } from '@/utils/dateCalculate';
import { useRouter } from 'next/navigation';
import EmojiSelectBtn from './EmojiSelectBtn';

type TProps = {
  blackboard: TBlackboard;
  userId: string;
};

export default function NoticeBoardDetail(props: TProps) {
  const { blackboard, userId } = props;
  const router = useRouter();

  const title = blackboard.title;
  const content = blackboard.content;

  const timeAgo = dateCalculate(blackboard.createdAt);

  const boardType = 'notice';

  const onClickEddit = () => {
    console.log('수정');
    router.push(`./${blackboard._id}/eddit`);
  };
  const onClickDelete = () => {
    console.log('삭제');
    deleteNotice(blackboard._id);
    router.push(`./`);
    router.refresh();
  };
  return (
    <>
      {userId === blackboard.writerId._id ? (
        <SubHeader
          eddit
          bgGray
          onClickEddit={onClickEddit}
          onClickDelete={onClickDelete}
        />
      ) : (
        <SubHeader />
      )}
      <div className="bg-white p-[2rem] pt-[2.5rem] h-[85vh]">
        <div className="flex justify-between items-center pb-[1.8rem] mb-[1.8rem] border-b border-gray-300">
          <div className="flex flex-grow gap-[0.8rem]">
            <div className="w-[4rem] h-[4rem]">
              <img
                src={blackboard.writerId.image}
                alt=""
                className="rounded-full aspect-square object-cover"
              />
            </div>
            <div className="text-content-2 text-gray-700">
              <span className="flex gap-[0.4rem] items-center">
                <h3 className="text-content-1 font-medium text-gray-900">
                  {blackboard.writerId.nickname}
                </h3>
                <p>팀장</p>
              </span>
              <span>{timeAgo}</span>
              <span> ∙ 조회 {blackboard.views}</span>
            </div>
          </div>
          <div className="shrink-0">
            <Label children={'필독'} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-headline-3 text-gray-900">
            {title}
          </h2>
          <p className="text-content-1  text-gray-600 border-gray-300 py-[1.6rem] pb-[2.5rem]">
            {content}
          </p>
          <EmojiSelectBtn
            boardType={boardType}
            blackboardId={blackboard._id}
            userId={userId}
            icons={blackboard.icons}
          />
        </div>
      </div>
    </>
  );
}
