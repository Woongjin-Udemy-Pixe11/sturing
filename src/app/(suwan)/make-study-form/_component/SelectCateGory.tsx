import LongButton from '@/components/common/LongButton';
import SizeUpLabel from '@/components/common/label/SizeUpLabel';
import { searchLabelList } from '@/constant/searchLabelList';
import React, { useState, useMemo } from 'react';

//TODO any 수정
export default function SelectCateGory(props: any) {
  const { setStep, onClickStepOne, lectureName, study } = props;

  const [category, setCategory] = useState<string>(study.studyCategory);

  const handleClick = (title: string) => {
    setCategory(title);
    onClickStepOne(category);
  };

  const validate = useMemo(() => {
    return category == null;
  }, [category]);

  return (
    <>
      <section className="px-[0.3rem]">
        <h1 className="font-bold text-headline-2 py-[1.9rem] px-[1.3rem]">
          선택한 강의
        </h1>
        <article className="bg-gray-300 px-[2rem] py-[1.2rem] rounded-e-lg">
          <h2>{lectureName}</h2>
        </article>
        <article className="px-[1.3rem] py-[0.9rem]">
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

      <footer className="flex m-auto gap-2 w-full p-4 py-[2rem]">
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
    </>
  );
}
