'use client';

import { deleteTodoInfo, patchTodoInfo } from '@/lib/actions/todoAction';
import { useCalendarStore } from '@/store/calendarStore';
import { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
type TTdo = {
  todo: string;
  checked: boolean;
  id: any;
};

export default function Todo(props: TTdo) {
  const { todo, checked, id } = props;
  const { fetchTodoList } = useCalendarStore();
  const [check, setCheck] = useState(checked);
  const [edit, setEdit] = useState(false);

  const patchChecked = (id: any) => {
    patchTodoInfo(id);
    setCheck(!check);
    fetchTodoList();
  };

  const onClickDelete = (id: string) => {
    deleteTodoInfo(id);
    fetchTodoList();
  };
  return (
    <>
      <div className="flex justify-between items-center mx-[.6rem]">
        <label className="inline-flex items-center space-x-2 relative py-[1rem] my-[.3rem]">
          <label
            htmlFor="checkbox"
            className=""
            onClick={() => {
              patchChecked(id);
            }}
          >
            {check ? (
              <FaCircleCheck size={20} color="rgba(65, 113, 255, 1)" />
            ) : (
              <FaCircleCheck size={20} color="rgba(227, 227, 227, 1)" />
            )}
          </label>

          <span className="text-content-1 text-ge">{todo}</span>
        </label>
        <div className="flex gap-[1rem]">
          {/* <img
            onClick={() => setEdit(!edit)}
            className="h-[2rem]"
            src="/images/studyLabel/pencil.svg"
          /> */}
          <img
            className="h-[2rem]"
            src="/images/studyLabel/trashcan.svg"
            onClick={() => {
              onClickDelete(id);
            }}
          />
        </div>
      </div>
    </>
  );
}
