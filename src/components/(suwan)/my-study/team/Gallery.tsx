import Image from 'next/image';
import Link from 'next/link';

export default function Gallery({ taskList }: { taskList: any }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] my-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem] ">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-medium">팀원 사진 인증</h2>
          </div>
          <div className="grid grid-cols-3 gap-[.4rem] py-[2rem] w-[100%]">
            {taskList &&
              taskList.slice(0, 6).map(
                (task: any) => (
                  // task.image && (
                  <div className="relative w-[100%] h-[100%] object-cover after:pb-[100%] after:block">
                    <Link href={`./board/task-board/${task._id}`}>
                      <Image
                        src={task.image}
                        alt={'대체글'}
                        layout="fill"
                        className="object-cover rounded-[.5rem]"
                      />
                    </Link>
                  </div>
                ),
                // );
              )}
          </div>
        </div>
      </div>
    </>
  );
}
