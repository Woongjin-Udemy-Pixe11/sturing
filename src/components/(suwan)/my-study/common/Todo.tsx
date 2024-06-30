'use client';

import { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
type TTdo = {
  todo: string;
  checked: boolean;
};

export default function Todo(props: TTdo) {
  const { todo, checked } = props;

  const [check, setCheck] = useState(checked);
  return (
    <>
      <label className="inline-flex items-center space-x-2 relative py-[1rem] my-[.3rem]">
        <input
          id="checkbox"
          type="checkbox"
          checked={check}
          onChange={() => {
            setCheck(!check);
          }}
          className="form-checkbox hidden"
        />

        <label htmlFor="checkbox" className="">
          {check ? (
            <FaCircleCheck size={20} color="rgba(65, 113, 255, 1)" />
          ) : (
            <FaCircleCheck size={20} color="rgba(227, 227, 227, 1)" />
          )}
        </label>

        <span className="text-content-1 text-ge">{todo}</span>
      </label>
    </>
  );
}
