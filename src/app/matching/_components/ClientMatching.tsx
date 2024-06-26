'use client';

import MatchingFooter from '@/components/(jonghoo)/MatchingFooter';
import { GoChevronLeft } from 'react-icons/go';
import Type from './Type';
import { useState } from 'react';
import Interest from './Interest';
import Field from './Field';
import Region from './Region';
import Mood from './Mood';
import MatchingCompleted from './MatchingCompleted';

export default function ClientMatching() {
  const [step, setStep] = useState<number>(1);
  const onClickForwardStep = () => {
    if (step === 6) {
      return;
    }
    setStep((prev) => prev + 1);
  };
  const onClickBackwardStep = () => {
    if (step === 1) {
      return;
    }
    setStep((prev) => prev - 1);
  };
  const stepComponet: any = {
    1: <Interest />,
    2: <Field />,
    3: <Type />,
    4: <Region />,
    5: <Mood />,
    6: <MatchingCompleted />,
  };
  return (
    <main className="flex flex-col w-full h-[750px] relative ">
      <header>
        <GoChevronLeft size={30} className="mb-4" />

        {step <= 5 && (
          <div className="w-full bg-gray-400 rounded-full h-[0.4rem] ">
            <div
              className="bg-main-500 h-[0.4rem] rounded-full"
              style={{ width: `${step * 20}%` }}
            ></div>
          </div>
        )}
      </header>
      {stepComponet[step]}
      {step <= 5 && (
        <MatchingFooter
          step={step}
          Forward={() => {
            onClickForwardStep();
          }}
          Backward={() => {
            onClickBackwardStep();
          }}
        />
      )}
    </main>
  );
}
