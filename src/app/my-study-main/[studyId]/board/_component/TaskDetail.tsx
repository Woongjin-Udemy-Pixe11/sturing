'use client';

import SubHeader from '@/components/common/SubHeader';
import { deleteNotice, fetchBlackboard } from '@/lib/actions/studyMainAction';
import { TBlackboard } from '@/types/TStudyBoard';
import { dateCalculate } from '@/utils/dateCalculate';
import { useRouter } from 'next/navigation';
import EmojiSelectBtn from './EmojiSelectBtn';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type TProps = {
  task?: TBlackboard;
  taskId: string;
  userId: string;
};

export default function TaskDetail(props: TProps) {
  const { taskId, userId, task } = props;

  console.log('🍔', task);

  const router = useRouter();
  const boardType = 'task';

  const timeAgo = task && dateCalculate(task.createdAt);

  const onClickEddit = () => {
    task && router.push(`./${task._id}/eddit`);
  };
  const onClickDelete = () => {
    task && deleteNotice(task._id);
    router.push(`./`);
    router.refresh();
  };

  return (
    <>
      {task && userId === task.writerId?._id ? (
        <SubHeader
          eddit
          bgGray
          onClickEddit={onClickEddit}
          onClickDelete={onClickDelete}
        />
      ) : (
        <SubHeader bgGray />
      )}

      {task && (
        <div className="bg-white px-[2rem] flex flex-col gap-y-[2rem] py-[2rem]">
          <div className="flex flex-row items-center">
            <Link href={`/users/${task.writerId?._id}`}>
              <img
                src={task.writerId?.image}
                alt="Picture of the author"
                className="border border-gray-300 w-[3.8rem] rounded-full aspect-square object-cover"
              />
            </Link>
            <div className="ml-[1rem] text-content-2 text-gray-700">
              <span className="flex gap-[0.4rem] items-center">
                <h3 className="text-content-1 font-medium text-gray-900">
                  {task.writerId?.nickname}
                </h3>
              </span>
              <span>{timeAgo}</span>
              <span> ∙ 조회 {task.views}</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-[2rem]">
            <div className="flex flex-col justify-start gap-y-[2rem]">
              <h1 className="text-[1.8rem] text-gray-900 font-medium">
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
      )}
    </>
  );
}
