import Image from 'next/image';

type TTaskInfoProps = {
  userImg: string;
  user: string;
  isLeader?: boolean;
  time: string;
  taskTitle: string;
  taskContent: string;
  taskImg: string;
};

export default function TaskInfo(props: TTaskInfoProps) {
  const { userImg, user, isLeader, time, taskTitle, taskContent, taskImg } =
    props;

  return (
    <div className="flex flex-col mx-[1.6rem] gap-y-[1.6rem]">
      <div className="flex flex-row items-center justify-between py-[1.2rem]">
        <div className="flex flex-row items-center">
          <Image
            src={userImg}
            width={28}
            height={28}
            alt="Picture of the author"
            className="rounded-full aspect-square object-cover"
          />
          <div className="flex flex-row items-center justify-center gap-x-[0.4rem]">
            <div className="text-content-1 text-gray-900 ml-[0.8rem] font-semibold">
              {user}
            </div>
            {isLeader ? (
              <div className="text-content-2 text-gray-700">팀장</div>
            ) : (
              <></>
            )}
          </div>
          <div className="text-content-2 text-gray-700 ml-[0.4rem]"></div>
        </div>
        <div className="text-content-2 text-gray-600">{time}</div>
      </div>
      <div className="flex flex-row justify-between gap-x-[1.2rem]">
        <div className="flex flex-col gap-x-[1.2rem] gap-y-[0.4rem]">
          <div className="text-content-1 text-gray-900 font-semibold">
            {taskTitle}
          </div>
          <p className="text-content-2 text-gray-700">{taskContent}</p>
        </div>
        <div className="min-w-[6.4rem] min-h-[6.4rem] relative">
          <Image
            fill
            src={taskImg}
            alt="Picture of the Task"
            className="object-cover"
          />
        </div>
      </div>
      <hr className=" my-[1.8rem] border-b-gray-300 border-b-1"></hr>
    </div>
  );
}
