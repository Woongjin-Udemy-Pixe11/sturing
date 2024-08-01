'use client';

import { postTodo } from '@/lib/actions/todoAction';
import { useCalendarStore } from '@/store/calendarStore';
import { useMyStudyStore } from '@/store/myStudyStore';
import { useEffect, useLayoutEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import Todo from './Todo';

export default function Todos() {
  const { studyId, userId } = useMyStudyStore();
  const { date, todoList, fetchTodoList } = useCalendarStore();

  let selectedDate = date.toDateString();

  const [todoInfo, setTodoInfo] = useState({
    studyId,
    userId,
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
    try {
      const result = await postTodo(todoInfo);
      console.log(result);
      if (result.success) {
        setTodoInfo((prev) => ({
          ...prev,
          todoContent: '',
        }));
        fetchTodoList();
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useLayoutEffect(() => {
    const todoCount = todoList.filter(
      (todo: any) => new Date(todo.date).toDateString() === selectedDate,
    ).length;
    setCout(todoCount);
  }, [date, todoList]);

  useEffect(() => {
    setTodoInfo((prev) => ({
      ...prev,
      studyId,
      userId,
      date,
    }));
  }, [studyId, userId, date]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-medium">체크리스트</h2>
            <span className="text-[1.4rem] font-medium text-main-600 px-[1rem]">
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
                  <button type="submit">
                    <IoMdCheckmark className="text-main-600 text-[2rem] absolute top-5 right-6" />
                    {/* <img
                      className="absolute top-6 right-6"
                      src="/images/studyLabel/check.svg"
                    /> */}
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
