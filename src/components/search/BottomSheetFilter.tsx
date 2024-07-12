'use client';
import { GrPowerReset } from 'react-icons/gr';
import TabBarUnderBlue from './TabBarUnderBlue';
import Field from './filter/Field';
import Level from './filter/Level';
import People from './filter/People';
import Period from './filter/Period';
import Region from './filter/Region';
import { useReducer } from 'react';
import filterReducer from '@/utils/filterReducer';

type TBottomSheetFilter = { onClose?: () => void };

export default function BottomSheetFilter({ onClose }: TBottomSheetFilter) {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(filterReducer, {
    field: [],
  });
  const onClickField = (field: string) => {
    dispatch({ type: 'setField', payload: field });
  };
  const tabList = [
    {
      name: '분야',
      component: <Field state={state} onClickField={onClickField} />,
    },
    { name: '지역', component: <Region /> },
    { name: '인원', component: <People /> },
    { name: '기간', component: <Period /> },
    { name: '수준', component: <Level /> },
  ];
  console.log(state);
  return (
    <div className="w-full flex flex-col justify-between rounded-t-[1rem] border border-gray-300 shadow-modal bg-white h-[75vh] ">
      <span className="block mx-[1.6rem] mt-[2.0rem] mb-[1.2rem] text-[1.8rem]">
        필터
      </span>
      <div className="flex-1 overflow-hidden">
        <TabBarUnderBlue tabList={tabList} />
      </div>

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
