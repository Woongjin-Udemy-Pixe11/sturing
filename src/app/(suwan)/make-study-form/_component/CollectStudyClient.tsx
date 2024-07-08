'use client';

import LongButton from '@/components/common/LongButton';
import { useState, useReducer } from 'react';
import SelectCateGory from './SelectCateGory';
import StudyDetailInfoForm from './StudyDetailInfoForm';
import StudyInfoForm from './StudyInfoForm';
import StudyTeammateForm from './StudyTeammateForm';
import { postStudy } from '@/utils/study/studyUtils';
import { TFetchStudy } from '@/types/TStudy';
import { studyReducer } from '@/utils/study/studyReducer';

export default function CollectStudyClient(props: { id: string }) {
  const { id } = props;
  // console.log(id);
  const mockdata: TFetchStudy = {
    leaderId: id,
    studyImage: '',
    studyName: '',
    studyContent: '',
    studyType: '',
    studyLevel: '',
    studyMember: 0,
    studySubject: '',
    studyCategory: '',
    studyDeadline: '',
    studyStart: '',
    studyEnd: '',
    studyPlace: '',
    studyMeetings: '',
  };

  const [step, setStep] = useState<number>(1);
  const [study, dispatch] = useReducer<React.Reducer<TFetchStudy, any>>(
    studyReducer,
    mockdata,
  );

  const onClickCategory = (category: string) => {
    dispatch({ type: 'setCategory', payload: category });
  };

  const onStudyInfoSubmit = (data: {
    image: File;
    title: string;
    content: string;
    locationType: 'online' | 'offline' | null;
    location: string;
    isPostponed: boolean;
  }) => {
    dispatch({ type: 'setImage', payload: data.image });
    dispatch({ type: 'setName', payload: data.title });
    dispatch({ type: 'setContent', payload: data.content });
    dispatch({ type: 'setType', payload: data.locationType });
    dispatch({ type: 'setPlace', payload: data.location });

    setStep((prev) => prev + 1);
  };

  const onClickType = (type: string) => {
    dispatch({ type: 'setType', payload: type });
  };

  const onClickLevel = (level: string) => {
    dispatch({ type: 'setLevel', payload: level });
  };

  const onClickMember = (member: number) => {
    dispatch({ type: 'setMember', payload: member });
  };

  const onClickDeadline = (deadline: string) => {
    dispatch({ type: 'setDeadline', payload: deadline });
  };

  const onClickStart = (start: string) => {
    dispatch({ type: 'setStart', payload: start });
  };

  const onClickEnd = (end: string) => {
    dispatch({ type: 'setEnd', payload: end });
  };

  const onClickMeetings = (meetings: string) => {
    dispatch({ type: 'setMeetings', payload: meetings });
  };

  const onClickBtn = () => {
    switch (step) {
      case 1:
        setStep((prev) => prev + 1);
        return;
      case 2:
        setStep((prev) => prev + 1);

        return;
      case 3:
        setStep((prev) => prev + 1);
        return;
      case 4:
        return;
    }
  };
  //TODO:any 수정
  const collectstep: any = {
    1: <SelectCateGory onClickCategory={onClickCategory} />,
    2: <StudyInfoForm onStudyInfoSubmit={onStudyInfoSubmit} />,
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
            step === 4 && study
              ? console.log(study)
              : setStep((prev) => prev + 1);
          }}
        >
          {step === 4 ? '등록하기' : '다음'}
        </LongButton>
      </footer>
    </main>
  );
}
