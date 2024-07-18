'use client';

import {
  DeleteTodoInfo,
  fetchTodoInfo,
} from '@/utils/study-checklist/studycheckUtils';
import { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
type TTdo = {
  todo: string;
  checked: boolean;
  id: any;
};

export default function Todo(props: TTdo) {
  const { todo, checked, id } = props;
  const [check, setCheck] = useState(checked);
  const fetchChecked = (id: any) => {
    fetchTodoInfo(id);
    setCheck(!check);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <label className="inline-flex items-center space-x-2 relative py-[1rem] my-[.3rem]">
          <label
            htmlFor="checkbox"
            className=""
            onClick={() => {
              fetchChecked(id);
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
          <img className="h-[2rem]" src="/images/studyLabel/pencil.svg" />
          <img
            className="h-[2rem]"
            src="/images/studyLabel/trashcan.svg"
            onClick={() => {
              DeleteTodoInfo(id);
            }}
          />
        </div>
      </div>
    </>
  );
}
