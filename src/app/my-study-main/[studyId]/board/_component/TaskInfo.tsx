import { dateCalculate } from '@/utils/dateCalculate';
import Link from 'next/link';

type TTaskInfoProps = {
  userImg: string;
  user: string;
  leaderId: string;
  time: string;
  taskTitle: string;
  taskContent: string;
  taskImg: string;
};

export default function TaskInfo(props: any) {
  const { task, leaderId } = props;
  return (
    <div className="flex flex-col gap-y-[1.6rem] py-[1.6rem]">
      <div className="flex flex-row items-center justify-between py-[1.2rem]">
        <Link href={`/users/${task.writerId._id}`}>
          <div className="flex flex-row items-center">
            <img
              src={task.writerId.image}
              alt="Picture of the author"
              className="border border-gray-300 w-[2.8rem] rounded-full aspect-square object-cover"
            />
            <div className="flex flex-row items-center justify-center gap-x-[0.4rem]">
              <div className="text-content-1 text-gray-900 ml-[0.8rem] font-medium">
                {task.writerId.nickname}
              </div>
              {task.writerId._id === leaderId ? (
                <div className="text-content-2 text-gray-700">팀장</div>
              ) : (
                <></>
              )}
            </div>
            <div className="text-content-2 text-gray-700 ml-[0.4rem]"></div>
          </div>
        </Link>
        <div className="text-content-2 text-gray-600">
          {dateCalculate(task.createdAt)}
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-[1.2rem]">
        <div className="flex flex-col gap-x-[1.2rem] gap-y-[0.4rem]">
          <div className="text-content-1 text-gray-900 font-medium">
            {task.title}
          </div>
          <p className="text-content-2 text-gray-700">{task.content}</p>
        </div>
        <div className="min-w-[6.4rem] min-h-[6.4rem] relative">
          {task.image && (
            <img
              src={task.image}
              alt="Picture of the Task"
              className="w-[10rem] h-[10rem] object-cover rounded-[0.5rem]"
            />
          )}
        </div>
      </div>
      <hr className="my-[1.8rem] border-b-gray-300 border-b-1"></hr>
    </div>
  );
}
