'use client';
//TODO: reducer만 써보기

import { useState, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabaseClient';
import SelectCateGory from './SelectCateGory';
import StudyDetailInfoForm from './StudyDetailInfoForm';
import StudyInfoForm from './StudyInfoForm';
import StudyTeammateForm from './StudyTeammateForm';
import DefaultModal from '@/components/common/modal/DefaultModal';

import { TFetchStudy } from '@/types/TStudy';
import { studyReducer } from '@/utils/reducers/studyReducer';
import { postStudy } from '@/lib/actions/makeStudyAction';

export type TLectureData = {
  lectureName: string;
  lectureCategory: string;
  lectureInstructor: string;
};
type TProps = {
  leaderId: string;
  lectureId?: string;
  lectureData?: TLectureData;
};

export default function CollectStudyClient(props: TProps) {
  const { leaderId, lectureId, lectureData } = props;
  const router = useRouter();

  let initialStudy: TFetchStudy;
  if (lectureId && lectureData) {
    initialStudy = {
      leaderId: leaderId,
      studyImage: '/images/study-img1.png',
      studyName: '',
      studyContent: '',
      studyType: '',
      studyLevel: '',
      studyMember: 3,
      studyLecture: lectureId,
      studyCategory: lectureData.lectureCategory,
      studyDeadline: '',
      studyStart: '',
      studyEnd: '',
      studyPlace: '',
      studyMeetings: '',
      studyMood: '',
    };
  } else {
    initialStudy = {
      leaderId: leaderId,
      studyImage: '/images/study-img1.png',
      studyName: '',
      studyContent: '',
      studyType: '',
      studyLevel: '',
      studyMember: 3,
      studyLecture: null,
      studyCategory: '',
      studyDeadline: '',
      studyStart: '',
      studyEnd: '',
      studyPlace: '',
      studyMeetings: '',
      studyMood: '',
    };
  }

  const [step, setStep] = useState<number>(1);
  const [study, dispatch] = useReducer<React.Reducer<TFetchStudy, any>>(
    studyReducer,
    initialStudy,
  );

  const onClickStepOne = (category: string) => {
    dispatch({ type: 'setCategory', payload: category });
  };

  //TODO: any 수정
  const onClickStepTwo = (studyData: any) => {
    dispatch({ type: 'setImage', payload: studyData.image });
    dispatch({ type: 'setName', payload: studyData.title });
    dispatch({ type: 'setContent', payload: studyData.content });
    dispatch({ type: 'setStudyType', payload: studyData.studyType });
    dispatch({ type: 'setLocation', payload: studyData.location });
  };

  const onClickStepThree = (studyData: any) => {
    dispatch({ type: 'setStart', payload: studyData.start });
    dispatch({ type: 'setDeadline', payload: studyData.deadline });
    dispatch({ type: 'setEnd', payload: studyData.end });
    dispatch({ type: 'setMeetings', payload: studyData.meetings });
    dispatch({ type: 'setMood', payload: studyData.mood });
  };

  const onClickLevel = (level: string) => {
    dispatch({ type: 'setLevel', payload: level });
  };

  const onClickMember = (member: number) => {
    dispatch({ type: 'setMember', payload: member });
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async () => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const fileName = `${Date.now()}-${Math.random()}`;
      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, study.studyImage);

      if (error) {
        console.error('이미지 업로드 실패:', error);
        return;
      }
      const { data: urlData } = supabase.storage
        .from('images')
        .getPublicUrl(fileName);
      const supaUrl = urlData.publicUrl;

      const updatedStudy = { ...study, studyImage: supaUrl };

      await postStudy(updatedStudy, leaderId);
      router.replace('/make-study-form/complete');
    } catch (error) {
      console.error('제출 중 오류 발생:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  //TODO:any 수정
  const collectstep: any = {
    1: (
      <SelectCateGory
        lectureData={lectureData}
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
        onSubmitHandler={onSubmitHandler}
      />
    ),
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickCancel = () => {
    setIsModalOpen(true);
  };
  const onClickModalYes = async () => {
    router.back();
  };
  const onClickModalNo = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <header>
        <h2
          onClick={onClickCancel}
          className="text-content-1 text-gray-700 p-[1.5rem]"
        >
          취소
        </h2>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
            <DefaultModal
              onConfirm={onClickModalYes}
              onCancel={onClickModalNo}
              message={`정말로 취소하시겠습니까?\n작성한 정보가 저장되지 않습니다.`}
            />
          </div>
        )}
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
