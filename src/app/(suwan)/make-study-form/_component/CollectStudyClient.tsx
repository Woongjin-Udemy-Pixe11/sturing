'use client';
//TODO: 이미지 기본값 넣기
//TODO: reducer만 써보기

import LongButton from '@/components/common/LongButton';
import { useState, useReducer } from 'react';
import SelectCateGory from './SelectCateGory';
import StudyDetailInfoForm from './StudyDetailInfoForm';
import StudyInfoForm from './StudyInfoForm';
import StudyTeammateForm from './StudyTeammateForm';
import { postStudy } from '@/utils/study/studyUtils';
import { TFetchStudy } from '@/types/TStudy';

import { studyReducer } from '@/utils/study/studyReducer';
import { useRouter } from 'next/navigation';

export default function CollectStudyClient(props: { id: string }) {
  const { id } = props;
  const router = useRouter();

  const lectureID = '';

  const mockdata: TFetchStudy = {
    leaderId: id,
    studyImage: '/images/study-img1.png',
    studyName: '',
    studyContent: '',
    studyType: '',
    studyLevel: '',
    studyMember: 0,
    studyLecture: lectureID,
    studyCategory: '',
    studyDeadline: '',
    studyStart: '',
    studyEnd: '',
    studyPlace: '',
    studyMeetings: '',
    studyMood: '',
  };

  const [step, setStep] = useState<number>(1);

  const [study, dispatch] = useReducer<React.Reducer<TFetchStudy, any>>(
    studyReducer,
    mockdata,
  );
  console.log('리듀서 state', study);

  const onClickStepOne = (category: string) => {
    dispatch({ type: 'setCategory', payload: category });
  };

  //TODO: any 수정
  const onClickStepTwo = (data: any) => {
    dispatch({ type: 'setImage', payload: data.image });
    dispatch({ type: 'setName', payload: data.title });
    dispatch({ type: 'setContent', payload: data.content });
    dispatch({ type: 'setStudyType', payload: data.studyType });
    dispatch({ type: 'setLocation', payload: data.location });
  };

  const onClickStepThree = (data: any) => {
    dispatch({ type: 'setStart', payload: data.start });
    dispatch({ type: 'setDeadline', payload: data.deadline });
    dispatch({ type: 'setEnd', payload: data.end });
    dispatch({ type: 'setMeetings', payload: data.meetings });
    dispatch({ type: 'setMood', payload: data.mood });
  };

  const onClickLevel = (level: any) => {
    dispatch({ type: 'setLevel', payload: level });
  };

  const onClickMember = (member: any) => {
    dispatch({ type: 'setMember', payload: member });
  };
  //TODO:any 수정
  const collectstep: any = {
    1: (
      <SelectCateGory
        step={step}
        setStep={setStep}
        study={study}
        onClickStepOne={onClickStepOne}
      />
    ),
    2: (
      <StudyInfoForm
        step={step}
        setStep={setStep}
        onClickStepTwo={onClickStepTwo}
      />
    ),
    3: (
      <StudyDetailInfoForm
        step={step}
        setStep={setStep}
        study={study}
        onClickStepThree={onClickStepThree}
      />
    ),
    4: (
      <StudyTeammateForm
        step={step}
        setStep={setStep}
        study={study}
        onClickLevel={onClickLevel}
        onClickMember={onClickMember}
        dispatch={dispatch}
      />
    ),
  };
  return (
    <main>
      <header>
        <h2
          onClick={() => router.back()}
          className="text-content-1 text-gray-700 p-[1.5rem]"
        >
          취소
        </h2>
        <div className="w-full bg-gray-400 rounded-full h-[0.4rem]  ">
          <div
            className="bg-main-500 h-[0.4rem] rounded-full"
            style={{ width: `${step * 25}%` }}
          ></div>
        </div>
      </header>
      <section className="min-h-[62rem]"> {collectstep[step]}</section>
    </main>
  );
}
