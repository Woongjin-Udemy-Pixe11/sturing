import LongButton from '@/components/common/LongButton';
import SizeUpLabel from '@/components/common/label/SizeUpLabel';
import { searchLabelList } from '@/constant/searchLabelList';
import React, { useState, useMemo } from 'react';

//TODO any 수정
export default function SelectCateGory(props: any) {
  const { setStep, onClickStepOne } = props;

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    onClickStepOne(searchLabelList[index].value);
  };

  const validate = useMemo(() => {
    return clickedIndex == null;
  }, [clickedIndex]);

  return (
    <>
      <section className="px-[0.3rem]">
        <h1 className="font-bold text-headline-2 py-[1.9rem] px-[1.3rem]">
          선택한 강의
        </h1>
        <article className="bg-gray-300 px-[2rem] py-[1.2rem] rounded-e-lg">
          <h2>블랜더 완벽 가이드:초심자를 위한</h2>
          <h2>3D 모델링 마스터하기</h2>
          <p className="text-content-2 text-gray-500">GameDev.tv.Team</p>
        </article>
        <article className="px-[1.3rem] py-[0.9rem]">
          <h2 className="text-content-2">카테고리</h2>
          <div className="flex py-[1.2rem] flex-wrap gap-2">
            {searchLabelList.map((label, index) => {
              return (
                <SizeUpLabel
                  key={index}
                  children={label.title}
                  isClicked={clickedIndex === index}
                  onClick={() => handleClick(index)}
                ></SizeUpLabel>
              );
            })}
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
