'use client';
//TODO:username 넣을것, Footer 분리해서 각 컴포넌트에 넣고, 스타일 및 함수재정리

import MatchingFooter from '@/components/(JH)/matching/MatchingFooter';
import { postMatchingInfo, updateMatchingInfo } from '@/utils/matchingUtils';
import matchingreducer, { TActionType } from '@/utils/matchingreducer';
import { useReducer, useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import Field from './Field';
import Interest from './Interest';
import MatchingCompleted from './MatchingCompleted';
import Mood from './Mood';
import Region from './Region';
import Type from './Type';

export type Tmatching = {
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

export default function ClientMatching({ data, session, exist }: any) {
  let username = session.user.name;
  let nickname = session.user.nickname;
  const id = session.user.id;
  const [state, dispatch] = useReducer<React.Reducer<Tmatching, TActionType>>(
    matchingreducer,
    data,
  );

  const [step, setStep] = useState<number>(1);

  const onClickInterest = (field: string) => {
    dispatch({ type: 'setInterest', payload: field });
  };

  const onClickLevel = (field: string, level: string, interest: string[]) => {
    dispatch({ type: 'setLevel', payload: { field, level, interest } });
  };
  const onClickStudyType = (field: string) => {
    dispatch({ type: 'setStudyType', payload: field });
  };

  const onClickMood = (mood: string) => {
    dispatch({ type: 'setMood', payload: mood });
  };

  const onClickRegions = (region: string) => {
    dispatch({ type: 'setRegion', payload: region });
  };
  const onClickClearLevel = (personlevel: object, interests: string[]) => {
    dispatch({ type: 'clearlevel', payload: { personlevel, interests } });
  };
  const onClickForwardStep = () => {
    if (step === 6) {
      return;
    }
    if (state.interests.length === 0 && step === 1) {
      return;
    } else if (step === 1) {
      onClickClearLevel(state.level, state.interests);
    }
    if (
      Object.keys(state.level).length !== state.interests.length &&
      step === 2
    ) {
      console.log('안됨!');
      return;
    }
    if (state.studyType === '' && step === 3) {
      return;
    }
    if (state.preferRegion.length === 0 && step === 4) {
      return;
    }
    if (state.preferMood.length === 0 && step === 5) {
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
  //TODO:dispatch 함수의 타입작성하기
  const stepComponet: any = {
    1: (
      <Interest
        interest={state.interests}
        onClickInterest={onClickInterest}
        nickname={nickname}
      />
    ),
    2: (
      <Field
        interest={state.interests}
        onClickLevel={onClickLevel}
        Level={state.level}
      />
    ),
    3: (
      <Type
        studyType={state.studyType}
        onClickStudyType={onClickStudyType}
        nickname={nickname}
      />
    ),
    4: (
      <Region
        regions={state.preferRegion}
        onClickRegion={onClickRegions}
        nickname={nickname}
      />
    ),
    5: (
      <Mood
        moods={state.preferMood}
        onClickMood={onClickMood}
        nickname={nickname}
      />
    ),
    6: <MatchingCompleted username={nickname} userId={id} />,
  };

  return (
    <main className="flex flex-col w-full  relative  ">
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
        {/* //TODO:Footer 분리 및 active 시 색깔들어가게하기 */}
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
            serverAction={async () => {
              exist ? updateMatchingInfo(state) : postMatchingInfo(state);
              onClickForwardStep();
            }}
          />
        )}
      </div>
    </main>
  );
}
