import LongButton from '@/components/common/LongButton';
import SizeUpLabel from '@/components/common/label/SizeUpLabel';
import { searchLabelList } from '@/constant/searchLabelList';
import { TFetchStudy } from '@/types/TStudy';
import React, { useState, useMemo } from 'react';

type TProps = {
  lectureData: any;
  step: any;
  setStep: any;
  study: TFetchStudy;
  onClickStepOne: (category: string) => void;
};
export default function SelectCateGory(props: TProps) {
  const { setStep, onClickStepOne, lectureData, study } = props;

  const [category, setCategory] = useState<string>(study.studyCategory);

  const handleClick = (title: string) => {
    setCategory(title);
    onClickStepOne(category);
  };

  const validate = useMemo(() => {
    return category == null;
  }, [category]);

  return (
    <div className="px-[2rem] py-[2rem]">
      <section>
        <h1 className="font-bold text-headline-2 mb-[2rem]">선택한 강의</h1>
        <article className="bg-gray-200 px-[2rem] py-[1.2rem] rounded-md border border-gray-300">
          <h2>{lectureData.lectureName}</h2>
          <h3 className="text-gray-600 text-content-1 mt-[.4rem]">
            {lectureData.lectureInstructor}
          </h3>
        </article>
        <article className="py-[2rem]">
          <h2 className="text-content-2">카테고리</h2>
          <div className="flex py-[1.2rem] flex-wrap gap-2">
            {searchLabelList.map((label, index) => {
              return (
                <SizeUpLabel
                  key={index}
                  children={label.title}
                  isClicked={category === label.title}
                  onClick={() => handleClick(label.title)}
                ></SizeUpLabel>
              );
            })}
          </div>
        </article>
      </section>

      <footer className="flex m-auto gap-2 w-full py-[2rem]">
        {validate ? (
          <LongButton color="gray">다음 </LongButton>
        ) : (
          <LongButton
            color="blue"
            onClick={() => {
              setStep((prev: number) => prev + 1);
            }}
          >
            다음
          </LongButton>
        )}
      </footer>
    </div>
  );
}
