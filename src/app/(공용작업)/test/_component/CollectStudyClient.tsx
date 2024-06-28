'use client';

import { useState } from 'react';
import SelectCateGory from './SelectCateGory';
import LongButton from '@/components/common/LongButton';
import StudyDetailInfoForm from './StudyDetailInfoForm';

export default function CollectStudyClient() {
  const [step, setStep] = useState<number>(1);
  return (
    <main className="h-100vh">
      <header>
        <h2 className="text-content-1 text-gray-700 p-[1.5rem]">취소</h2>
        <div className="w-full bg-gray-400 rounded-full h-[0.4rem]  ">
          <div
            className="bg-main-500 h-[0.4rem] rounded-full"
            style={{ width: `${step * 20}%` }}
          ></div>
        </div>
      </header>
      <StudyDetailInfoForm />
      <div className="flex m-auto gap-2 w-full p-4">
        <LongButton color="white" className="w-[40%]">
          이전
        </LongButton>
        <LongButton color="blue">다음</LongButton>
      </div>
    </main>
  );
}
