'use client';
import LongButton from '@/components/common/LongButton';
import SizeUpLabel from '@/components/common/label/SizeUpLabel';
import { useState, useMemo } from 'react';

const levelOptions: string[] = [
  '비기너',
  '신입(1년 이하)',
  '주니어(1~3년차)',
  '시니어(4년 이상)',
  '상관없음',
];

export default function StudyTemmateForm(props: any) {
  const { setStep, onClickLevel, onClickMember, study, onSubmitHandler } =
    props;

  const [studyMembers, setStudyMembers] = useState(3);

  const validate = useMemo(() => {
    return study.studyLevel == '' || study.studyMembers < 1;
  }, [study]);

  //TODO: +1 리팩토링;;;
  const onClickStudyMembers = (type: string) => {
    if (type == 'plus') {
      setStudyMembers((prev) => prev + 1);
      onClickMember(studyMembers + 1);
    } else if (type == 'minus') {
      if (studyMembers > 1) {
        setStudyMembers((prev) => prev - 1);
        onClickMember(studyMembers + 1);
      }
    }
  };

  return (
    <>
      <section>
        <article className="px-[1rem] py-[2rem] border-b border-gray-300">
          <h1 className="font-bold text-headline-2 py-[2rem] px-[0.6rem]">
            원하는 팀원의 정보를 입력해 주세요
          </h1>
          <h2 className="font-bold text-content-1 px-[0.6rem]">
            함께하고 싶은 팀원
          </h2>
          <div className="flex flex-wrap gap-[0.8rem] py-[1.3rem]">
            {levelOptions.map((item, index) => (
              <SizeUpLabel
                key={index}
                isClicked={study.studyLevel === item}
                onClick={() => {
                  onClickLevel(item);
                }}
              >
                {item}
              </SizeUpLabel>
            ))}
          </div>
        </article>
        <article className="px-[1.6rem] py-[3rem] border-b border-gray-300">
          <h2 className="font-bold text-content-1 px-[0.6rem]">
            스터디 총 인원 수(본인 포함)
          </h2>
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
        </article>
      </section>
      <footer className="flex m-auto gap-2 w-full p-4 py-[2rem]">
        <LongButton
          color="white"
          className="w-[40%]"
          onClick={() => {
            setStep((prev: number) => prev - 1);
          }}
        >
          이전
        </LongButton>
        {validate ? (
          <LongButton color="gray">등록하기</LongButton>
        ) : (
          <LongButton
            color="blue"
            onClick={() => {
              onSubmitHandler();
            }}
          >
            등록하기
          </LongButton>
        )}
      </footer>
    </>
  );
}
