'use client';
import { TTdo } from '@/dummy/studyMemberTodo';
import Todo from '../common/Todo';
import { useState } from 'react';
import { postTodoInfo } from '@/utils/study-checklist/studycheckUtils';

export function formatingDate(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default function Todos({
  studyId,
  userId,
  dateData,
}: {
  studyId: any;
  userId: any;
  dateData: any;
}) {
  const date = formatingDate(new Date().toISOString());
  const [todoInfo, setTodoInfo] = useState({
    studyId: studyId,
    userId: userId,
    todoContent: '',
    todoCompleted: false,
    date: date,
  });

  const onChangeTodo = (e: any) => {
    setTodoInfo((prev) => ({
      ...prev,
      todoContent: e.target.value,
    }));
  };

  const postTodo = (todoInfo: any) => {
    postTodoInfo(todoInfo);
    setTodoInfo({
      studyId: studyId,
      userId: userId,
      todoContent: '',
      todoCompleted: false,
      date: date,
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">체크리스트</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              {dateData ? dateData.length : '0'}
            </span>
            <img src="/images/studyLabel/add-square.svg" className="ml-auto" />
          </div>

          <div className=" bg-white p-6 rounded-lg w-full px-[1rem]">
            <div className="text-[1.4rem]">
              <div className="flex flex-col text-[1.4rem] gap-[.4rem]">
                {dateData &&
                  dateData.map((todo: any) => (
                    <div key={todo._id}>
                      <Todo
                        todo={todo.todoContent}
                        checked={todo.todoCompleted}
                        id={todo._id}
                      />
                    </div>
                  ))}
                <div className="flex-inline relative">
                  <input
                    type="text"
                    className="border rounded-[.5rem] px-[1.6rem] py-[1.2rem] w-full"
                    placeholder="오늘 할 일을 입력하세요"
                    value={todoInfo.todoContent}
                    onChange={onChangeTodo}
                  ></input>
                  <img
                    className="absolute top-6 right-6"
                    src="/images/studyLabel/check.svg"
                    onClick={() => {
                      postTodo(todoInfo);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
