'use client';

import MatchingFooter from '@/components/(JH)/matching/MatchingFooter';
import { GoChevronLeft } from 'react-icons/go';
import Type from './Type';
import { useState } from 'react';
import Interest from './Interest';
import Field from './Field';
import Region from './Region';
import Mood from './Mood';
import MatchingCompleted from './MatchingCompleted';

type Tmatching = {
  userid: string;
  interests: string[];
  level: {
    [key: string]: string;
  };
  studyType: string;
  preferRegion: string[];
  preferMood: string[];
};

//TODO:전역으로 Tmatching 을 제외하는 방향도 나쁘지않을것같다.

export default function ClientMatching() {
  const [step, setStep] = useState<number>(1);
  const [interest, setInterest] = useState<string[]>([]);
  const [level, setLevel] = useState<{ [key: string]: string }>({});
  const [studyType, setStudyType] = useState<string>('');
  const [moods, setMood] = useState<string[]>([]);
  const onClickInterest = (field: string) => {
    if (interest.length === 3) {
      interest.shift();
    }
    if (interest.includes(field)) {
      console.log('true');
      setInterest((prev) => prev.filter((item) => item !== field));
    } else {
      setInterest((prev) => [...prev, field]);
    }
  };
  const onClickLevel = (field: string, level: string) => {
    setLevel((prev) => ({ ...prev, [field]: level }));
  };
  const onClickStudyType = (field: string) => {
    setStudyType((prev) => field);
  };
  const onClickMood = (mood: string) => {
    if (moods.length === 3) {
      moods.shift();
    }
    if (moods.includes(mood)) {
      setMood((prev) => prev.filter((item) => item !== mood));
    } else {
      setMood((prev) => [...prev, mood]);
    }
  };
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
    1: <Interest interest={interest} onClickInterest={onClickInterest} />,
    2: <Field interest={interest} onClickLevel={onClickLevel} Level={level} />,
    3: <Type studyType={studyType} onClickStudyType={onClickStudyType} />,
    4: <Region />,
    5: <Mood moods={moods} onClickMood={onClickMood} />,
    6: <MatchingCompleted />,
  };
  return (
    <main className="flex flex-col w-full  relative mt-[6rem] ">
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
      <div className="w-full m-auto relative">
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
      </div>
    </main>
  );
}
