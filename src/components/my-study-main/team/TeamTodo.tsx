'use client';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import { fetchTodos } from '@/lib/actions/todoAction';
import { useMemberStore } from '@/store/memberStore';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useLayoutEffect, useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

export default function TeamTodo(props: any) {
  const { studyId, leaderId } = props;
  const { memberList } = useMemberStore();
  const today = new Date().toDateString();
  const [clickedMember, setClickedMember] = useState(leaderId);
  const [todos, setTodos] = useState([]);

  const findTodo = async (memberId: string) => {
    const todos = await fetchTodos(studyId, memberId);
    const todayTodo = todos.filter(
      (todo: any) => new Date(todo.date).toDateString() == today,
    );
    setClickedMember(memberId);
    setTodos(todayTodo);
  };

  const onClickMember = async (memberId: string) => {
    findTodo(memberId);
  };
  useLayoutEffect(() => {
    findTodo(leaderId);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex justify-between items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-medium">팀원별 현황</h2>
            <span className="text-[1.4rem] text-gray-500">
              {format(today, 'MM.dd(EEE)', { locale: ko })}
            </span>
          </div>

          <div className="text-[1.4rem] pt-[2rem]">
            <ScrollableContainer>
              <div className="w-full flex justify-around items-center text-[1.4rem] gap-[1rem]">
                {memberList.map((member: any) => (
                  <div
                    onClick={() => onClickMember(member.userId._id)}
                    key={member.userId._id}
                    className={`flex flex-col items-center justify-around min-w-[6.4rem] h-[8rem] sm:w-full ${
                      member.userId._id === clickedMember &&
                      `border border-main-600 rounded-md
                  bg-main-100`
                    }`}
                  >
                    <img
                      src={member.userId.image}
                      className="border border-gray-300 w-[4rem] h-[4rem] rounded-full object-cover"
                    />
                    <span className="mt-2 block w-full text-center whitespace-nowrap text-ellipsis overflow-hidden">
                      {member.userId.nickname}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollableContainer>

            <div className="flex flex-col text-[1.4rem] mt-[1.6rem]">
              {todos.length > 0
                ? todos.map((todo: any) => (
                    <div key={todo._id}>
                      <label className="inline-flex items-center space-x-2 gap-[.4rem] relative py-[.8rem]">
                        <label htmlFor="checkbox" className="">
                          {todo.todoCompleted ? (
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

                        <span className="text-content-1 text-ge">
                          {todo.todoContent}
                        </span>
                      </label>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function fetchTodoList(studyId: any, _id: any) {
  throw new Error('Function not implemented.');
}
