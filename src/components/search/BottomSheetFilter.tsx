import TabBarUnderBlue from './TabBarUnderBlue';
import Field from './filter/Field';
import Level from './filter/Level';
import People from './filter/People';
import Period from './filter/Period';
import Region from './filter/Region';
import { GrPowerReset } from 'react-icons/gr';

const tabList = [
  { name: '분야', component: <Field /> },
  { name: '지역', component: <Region /> },
  { name: '인원', component: <People /> },
  { name: '기간', component: <Period /> },
  { name: '수준', component: <Level /> },
];

export default function BottomSheetFilter() {
  return (
    <div className="w-full rounded-t-[1rem] border border-gray-1000">
      <span className="block mx-[1.6rem] my-[2.8rem] text-[1.8rem]">필터</span>
      <TabBarUnderBlue tabList={tabList} />
      <div className=" w-full flex justify-center gap-[.8rem] pb-[1.8rem]">
        <button className="px-[2.4rem] py-[1.2rem] text-gray-600 text-[1.6rem] flex items-center justify-center gap-[.4rem] border border-gray-600 rounded-[.5rem]">
          <GrPowerReset />
          초기화
        </button>
        <button className="px-[6rem] py-[1.2rem] bg-main-600 text-white rounded-[.5rem]">
          50개의 결과 보기
        </button>
      </div>
    </div>
  );
}
