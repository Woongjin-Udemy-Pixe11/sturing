import { TBlackboard } from '@/types/TStudyBoard';
import { dateCalculate } from '@/utils/dateCalculate';
import Link from 'next/link';

type TTaskListProps = {
  taskList: TBlackboard[];
};

export default function TaskBoardList(props: TTaskListProps) {
  const { taskList } = props;
  console.log(taskList);
  return (
    <>
      <ul className="px-[1.6rem] py-[1.8rem] flex flex-col min-h-[80vh] bg-white">
        {taskList &&
          taskList.length > 0 &&
          taskList.map((task) => (
            <li
              key={task._id}
              className="px-[1.2rem] pt-[2rem] border-b border-gray-300 pb-[1.8rem]"
            >
              <Link
                href={`./task-board/${task._id}`}
                className="flex items-start [&>span]:flex-shrink-0"
              >
                <div className="w-full">
                  <div className="flex justify-between pb-[1.2rem]">
                    <span className="flex items-center gap-[0.8rem]">
                      <img
                        src={task.writerId.image}
                        alt=""
                        className="border border-gray-300 w-[3.8rem] rounded-full aspect-square object-cover"
                      />
                      <span className="text-gray-900 text-content-1 font-medium">
                        {task.writerId.nickname}
                      </span>
                    </span>
                    <span className="text-content-2 text-gray-600">
                      {dateCalculate(task.createdAt)}
                    </span>
                  </div>
                  <div className="w-full flex justify-between gap-[1.2rem]">
                    <div className="flex flex-col gap-[0.4rem] h-[6.2rem]">
                      <h3 className="text-content-1 text-gray-900 font-medium">
                        {task.title}
                      </h3>
                      <p className="h-[3.6rem] text-content-2 text-gray-700 line-clamp-2">
                        {task.content}
                      </p>
                    </div>
                    <span className="rounded-[0.5rem] ml-auto">
                      {task.image && (
                        <img
                          src={task.image}
                          className="w-[10rem] h-[10rem]  object-cover rounded-[0.5rem]"
                          alt=""
                        />
                      )}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
