'use client';
import { TTdo } from '@/dummy/studyMemberTodo';

import { useLayoutEffect, useState } from 'react';
import Todo from './Todo';
import { useCalendarStore } from '@/store/calendarStore';
import { postTodoInfo } from '@/lib/actions/todoAction';

export default function Todos() {
  const { date, todoList, studyId, userId, fetchTodoList } = useCalendarStore();
  let selectedDate = date.toDateString();

  const [todoInfo, setTodoInfo] = useState({
    studyId: studyId,
    userId: userId,
    todoContent: '',
    todoCompleted: false,
    date: date,
  });
  const [count, setCout] = useState(0);
  const onChangeTodo = (e: any) => {
    setTodoInfo((prev) => ({
      ...prev,
      todoContent: e.target.value,
    }));
  };
  const onSubmitTodo = async () => {
    postTodoInfo(todoInfo);
    setTodoInfo((prev) => ({
      ...prev,
      todoContent: '',
    }));

    fetchTodoList();
  };

  console.log('✅', todoList);

  useLayoutEffect(() => {
    const todoCount = todoList.filter(
      (todo: any) => new Date(todo.date).toDateString() === selectedDate,
    ).length;
    setCout(todoCount);
  }, [date, todoList]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">체크리스트</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              {count}
            </span>
          </div>

          <div className=" bg-white p-6 rounded-lg w-full px-[1rem]">
            <div className="text-[1.4rem]">
              <div className="flex flex-col text-[1.4rem] gap-[.4rem]">
                {todoList &&
                  todoList.map(
                    (todo: any) =>
                      new Date(todo.date).toDateString() === selectedDate && (
                        <div key={todo._id}>
                          <Todo
                            todo={todo.todoContent}
                            checked={todo.todoCompleted}
                            id={todo._id}
                          />
                        </div>
                      ),
                  )}
                <form
                  action={onSubmitTodo}
                  className="flex-inline relative mt-[1rem]"
                >
                  <input
                    name="todoContent"
                    type="text"
                    className="border rounded-[.5rem] px-[1.6rem] py-[1.2rem] w-full"
                    placeholder="오늘 할 일을 입력하세요"
                    value={todoInfo.todoContent}
                    onChange={onChangeTodo}
                  ></input>
                  <button
                    type="submit"
                    // onClick={() => {
                    //   postTodo(todoInfo);
                    // }}
                  >
                    <img
                      className="absolute top-6 right-6"
                      src="/images/studyLabel/check.svg"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
