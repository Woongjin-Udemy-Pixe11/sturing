'use client';
import { useState } from 'react';
import Todo from '../common/Todo';
import { studyMemberTodo } from '@/dummy/studyMemberTodo';

export default function TeamTodo(props: any) {
  const { memberData } = props;

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex justify-between items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">팀원별 현황</h2>
            <span className="text-[1.4rem] text-gray-500">06.03(월)</span>
          </div>

          <div className="text-[1.4rem] py-[2rem]">
            <div className="flex justify-around items-center mb-4 text-[1.4rem]">
              {memberData.map((member: any) => (
                <div key={member._id} className="flex flex-col items-center">
                  <img
                    src={member.userId.image}
                    className="w-[4rem] h-[4rem] rounded-full object-cover"
                  />
                  <span className="mt-2">{member.userId.nickname}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col text-[1.4rem]">
              {studyMemberTodo[0].todos.map((todo) => (
                <>
                  <Todo todo={todo.todo} checked={todo.checked} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
