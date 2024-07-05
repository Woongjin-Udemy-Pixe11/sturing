'use client';
import Label from '@/components/common/label/Label';
import { useState } from 'react';

export const level: string[] = [
  '비기너',
  '신입(1년 이하)',
  '주니어(1~3년차)',
  '시니어(4년 이상)',
  '상관없음',
];
export default function StudyTemmateForm() {
  const [isChecked, setChecked] = useState(false);
  const [studyMembers, setStudyMembers] = useState(1);
  const onClickStudyMembers = (type: string) => {
    if (type == 'plus') {
      setStudyMembers((prev) => prev + 1);
    } else if (type == 'minus') {
      setStudyMembers((prev) => prev - 1);
    }
  };
  const onChangeCheckBox = () => {
    setChecked(!isChecked);
  };
  return (
    <section>
      <article className="px-[1rem] py-[2rem] border-b border-gray-300">
        <h1 className="font-bold text-headline-2 py-[2rem] px-[0.6rem]">
          원하는 팀원의 정보를 입력해 주세요
        </h1>
        <h3 className="font-bold text-content-1 px-[0.6rem]">
          함께하고 싶은 팀원
        </h3>
        <div className=" flex flex-wrap gap-[0.8rem] py-[1.3rem]">
          {level.map((item, index) => {
            return <Label key={index}>{item}</Label>;
          })}
        </div>
      </article>
      <article className="px-[1.6rem] py-[3rem] border-b border-gray-300">
        <h2>스터디 총 인원 수(본인 포함)</h2>
        <div className="flex w-full">
          <div className="flex-1 text-center">
            <button
              className="group cursor-pointer outline-none "
              title="Add New"
              onClick={() => {
                onClickStudyMembers('minus');
              }}
            >
              <svg
                className="stroke-gray-300 fill-none "
                height="50px"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="1.5"
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                ></path>
                <path strokeWidth="1.5" d="M8 12H16"></path>
              </svg>
            </button>
          </div>
          <h2 className="flex-1 text-center">{studyMembers}명</h2>
          <div className="flex-1 text-center">
            <button
              className="group cursor-pointer outline-none "
              title="Add New"
              onClick={() => {
                onClickStudyMembers('plus');
              }}
            >
              <svg
                className="stroke-gray-300 fill-none "
                height="50px"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="1.5"
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                ></path>
                <path strokeWidth="1.5" d="M8 12H16"></path>
                <path strokeWidth="1.5" d="M12 16V8"></path>
              </svg>
            </button>
          </div>
        </div>
        <label className="inline-flex items-center space-x-2 py-[1.1rem] relative">
          <input
            id="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={onChangeCheckBox}
            className="form-checkbox h-[2rem] w-[2rem]  border-gray-300 border rounded-full  appearance-none checked:bg-blue-500 peer bg-gray-400 "
          />
          <label
            htmlFor="checkbox"
            className='peer-checked:after:content-["✔"]  peer-checked:after:text-white peer-checked:after:text-content-2 absolute top-[1rem] left-0 after:content-["✔"] after:text-white after:text-content-2'
          ></label>

          <span className="text-gray-700">제한없음</span>
        </label>
      </article>
    </section>
  );
}
