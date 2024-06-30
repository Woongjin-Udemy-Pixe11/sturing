'use client';
import Label from '@/components/common/label/Label';
import { searchLabelList } from '@/constant/searchLabelList';

export default function SelectCateGory() {
  return (
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
            return <Label key={index}>{label.title}</Label>;
          })}
        </div>
      </article>
    </section>
  );
}
