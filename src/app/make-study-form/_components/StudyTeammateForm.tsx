'use client';
import LongButton from '@/components/common/LongButton';
import SizeUpLabel from '@/components/common/label/SizeUpLabel';
import { useMemo, useState } from 'react';

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
      <div className="px-[1.6rem]">
        <section>
          <article className="py-[2rem] border-b border-gray-300">
            <h1 className="font-semibold text-headline-2 py-[2rem]">
              원하는 팀원의 정보를 입력해 주세요
            </h1>
            <h2 className="font-semibold text-content-1">함께하고 싶은 팀원</h2>
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
          <article className="border-b border-gray-300">
            <h2 className="font-semibold text-content-1 py-[3rem]">
              스터디 총 인원 수(본인 포함)
            </h2>
            <div className="flex items-center justify-center py-[1.2rem] gap-[5.7rem] w-full border rounded-[.5rem] mb-[4rem]">
              <div className="flex text-center">
                <button
                  className="group cursor-pointer outline-none "
                  title="Add New"
                  onClick={() => {
                    onClickStudyMembers('minus');
                  }}
                >
                  <img src="/images/form/minus-circle.svg" />
                </button>
              </div>
              <h2 className="flex text-center">{studyMembers}명</h2>
              <div className="flex text-center">
                <button
                  className="group cursor-pointer outline-none "
                  title="Add New"
                  onClick={() => {
                    onClickStudyMembers('plus');
                  }}
                >
                  <img src="/images/form/add-circle.svg" />
                </button>
              </div>
            </div>
          </article>
        </section>
        <footer className="flex m-auto gap-[1rem] w-full py-[2rem]">
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
      </div>
    </>
  );
}
