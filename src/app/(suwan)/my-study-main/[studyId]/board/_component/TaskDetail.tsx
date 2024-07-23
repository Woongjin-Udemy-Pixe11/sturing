'use client';

import { GoChevronLeft } from 'react-icons/go';
import EmojiSelectBtn from './EmojiSelectBtn';
import SubHeader from '@/components/common/SubHeader';
import { useRouter } from 'next/navigation';
import { deleteNotice, postIcon } from '@/utils/my-study-main/fetch';
import KebabModal from '@/components/common/modal/KebabModal';
import { dateCalculate } from '@/utils/my-study-main/dateCalculate';
import { TBlackboard } from '@/types/TStudyBoard';

type TProps = {
  task: TBlackboard;
  userId: string;
};

export default function TaskDetail(props: TProps) {
  const { task, userId } = props;
  const router = useRouter();
  const boardType = 'task';
  const timeAgo = dateCalculate(task.createdAt);

  const onClickEddit = () => {
    router.push(`./${task._id}/eddit`);
  };
  const onClickDelete = () => {
    deleteNotice(task._id);
    router.push(`./`);
    router.refresh();
  };

  return (
    <>
      {userId === task.writerId._id ? (
        <SubHeader
          eddit
          bgGray
          onClickEddit={onClickEddit}
          onClickDelete={onClickDelete}
        />
      ) : (
        <SubHeader />
      )}

      <div className="bg-white px-[2rem] flex flex-col gap-y-[2rem] py-[3rem]">
        <div className="flex flex-row items-center">
          <img
            src={task.writerId.image}
            alt="Picture of the author"
            className="border border-gray-300 w-[3.8rem] rounded-full aspect-square object-cover"
          />
          <div className="ml-[1rem] text-content-2 text-gray-700">
            <span className="flex gap-[0.4rem] items-center">
              <h3 className="text-content-1 font-semibold text-gray-900">
                {task.writerId.nickname}
              </h3>
            </span>
            <span>{timeAgo}</span>
            <span> ∙ 조회 {task.views}</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-[2rem]">
          <div className="flex flex-col justify-start gap-y-[2rem]">
            <h1 className="text-[1.8rem] text-gray-900 font-semibold">
              {task.title}
            </h1>
            <p className="text-gray-700">{task.content}</p>
          </div>

          {task.image && (
            <img
              src={task.image}
              alt="Picture of the author"
              className="w-[34.3rem] rounded-[0.8rem] aspect-square object-cover"
            />
          )}
        </div>
        <EmojiSelectBtn
          boardType={boardType}
          blackboardId={task._id}
          userId={userId}
          icons={task.icons}
        />
        <div className="h-[.8rem] bg-gray-100"></div>
      </div>
    </>
  );
}
