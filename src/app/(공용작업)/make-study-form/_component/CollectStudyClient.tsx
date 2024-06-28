'use client';

import LongButton from '@/components/common/LongButton';
import { useState } from 'react';
import SelectCateGory from './SelectCateGory';
import StudyDetailInfoForm from './StudyDetailInfoForm';
import StudyInfoForm from './StudyInfoForm';
import StudyTeammateForm from './StudyTeammateForm';

export default function CollectStudyClient() {
  const [step, setStep] = useState<number>(1);
  //TODO:any 수정
  const collectstep: any = {
    1: <SelectCateGory />,
    2: <StudyInfoForm />,
    3: <StudyDetailInfoForm />,
    4: <StudyTeammateForm />,
  };
  return (
    <main>
      <header>
        <h2 className="text-content-1 text-gray-700 p-[1.5rem]">취소</h2>
        <div className="w-full bg-gray-400 rounded-full h-[0.4rem]  ">
          <div
            className="bg-main-500 h-[0.4rem] rounded-full"
            style={{ width: `${step * 25}%` }}
          ></div>
        </div>
      </header>
      <section className="min-h-[62rem]"> {collectstep[step]}</section>

      <footer className="flex m-auto gap-2 w-full p-4 py-[2rem]">
        <LongButton
          color="white"
          className="w-[40%]"
          onClick={() => {
            setStep((prev) => prev - 1);
          }}
        >
          이전
        </LongButton>
        <LongButton
          color="blue"
          onClick={() => {
            setStep((prev) => prev + 1);
          }}
        >
          {step === 4 ? '등록하기' : '다음'}
        </LongButton>
      </footer>
    </main>
  );
}
