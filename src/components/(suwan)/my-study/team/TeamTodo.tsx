'use client';

import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { FaCircleCheck } from 'react-icons/fa6';
type TStudyMember = {
  name: string;
  profileImage: any;
  progress?: number;
  isLeader?: boolean;
  todos: TTdo[];
};
type TTdo = {
  todo: string;
  checked: boolean;
};

const teamMembers: TStudyMember[] = [
  {
    name: '웅진',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '1강 5분 복습하기', checked: true },
      { todo: '2강 듣고 과제노트 작성하기', checked: false },
    ],
  },
  {
    name: '갓생살자',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '밥먹기', checked: true },
      { todo: '빵먹기', checked: false },
    ],
  },
  {
    name: '취뽀기원',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '밥먹기', checked: true },
      { todo: '빵먹기', checked: false },
    ],
  },
  {
    name: '마스터',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '밥먹기', checked: true },
      { todo: '빵먹기', checked: false },
    ],
  },
];

export default function TeamTodo() {
  const [checked, setChecked] = useState(false);

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
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <img
                    src={member.profileImage}
                    className="w-[4rem] rounded-full"
                  />
                  <span className="mt-2">{member.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-[1.2rem] text-[1.4rem]">
              {teamMembers[0].todos.map((todo) => (
                <>
                  <label className="inline-flex items-center space-x-2  relative">
                    <input
                      id="checkbox"
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => {
                        setChecked(!checked);
                      }}
                      className="form-checkbox hidden "
                    />

                    <label htmlFor="checkbox" className="">
                      {checked ? (
                        <FaCircleCheck
                          size={20}
                          color="rgba(65, 113, 255, 1)"
                        />
                      ) : (
                        <FaCircleCheck
                          size={20}
                          color="rgba(227, 227, 227, 1)"
                        />
                      )}
                    </label>

                    <span className="text-content-1 text-ge">{todo.todo}</span>
                  </label>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
