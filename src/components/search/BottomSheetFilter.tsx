'use client';
import filterReducer from '@/utils/filterReducer';
import { useRouter } from 'next/navigation';
import { useEffect, useReducer, useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';
import TabBarUnderBlue from './TabBarUnderBlue';
import Field from './filter/Field';
import Level from './filter/Level';
import People from './filter/People';
import Period from './filter/Period';
import Region from './filter/Region';

type TBottomSheetFilter = {
  onClose: () => void;
  onFilterChange: any;
  initialFilters: any;
};

export default function BottomSheetFilter({
  onClose,
  onFilterChange,
  initialFilters,
}: TBottomSheetFilter) {
  const router = useRouter();
  const [filterCounts, setFilterCounts] = useState({
    totalCount: 0,
    fields: {},
    people: {},
    levels: {},
  });

  const fetchFilterCounts = async () => {
    try {
      let data;
      data = await (
        await fetch(`http://localhost:3000/api/search/filter`, {
          cache: 'no-store',
        })
      ).json();
      setFilterCounts(data);
    } catch (error) {
      console.error('Error fetching filter counts:', error);
    }
  };

  useState(() => {
    fetchFilterCounts();
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (state.field.length) params.append('field', state.field.join(','));
    if (state.region.length) params.append('region', state.region.join(','));
    if (state.people.length) params.append('people', state.people.join(','));
    if (state.period) params.append('period', state.period);
    if (state.level.length) params.append('level', state.level.join(','));

    onClose();

    router.push(`/search/result?${params.toString()}`);
  };

  const [state, dispatch] = useReducer(filterReducer, {
    field: initialFilters.field || [],
    region: initialFilters.region || [],
    people: initialFilters.people || [],
    period: initialFilters.period || '',
    level: initialFilters.level || [],
  });

  const onClickField = (field: string) =>
    dispatch({ type: 'setField', payload: field });

  const onClickRegion = (region: string) =>
    dispatch({ type: 'setRegion', payload: region });

  const onClickPeople = (people: string) =>
    dispatch({ type: 'setPeople', payload: people });

  const onClickPeriod = (period: string) =>
    dispatch({ type: 'setPeriod', payload: period });

  const onClickLevel = (level: string) =>
    dispatch({ type: 'setLevel', payload: level });

  const resetFilters = () => dispatch({ type: 'reset' });

  useEffect(() => {
    const stateJSON = JSON.stringify(state);
    onFilterChange(JSON.parse(stateJSON));
  }, [state]);

  const tabList = [
    {
      name: '분야',
      component: (
        <Field
          state={state}
          onClickField={onClickField}
          filterCounts={filterCounts.fields}
        />
      ),
    },
    {
      name: '지역',
      component: <Region state={state} onClickRegion={onClickRegion} />,
    },
    {
      name: '인원',
      component: (
        <People
          state={state}
          onClickPeople={onClickPeople}
          filterCounts={filterCounts.people}
        />
      ),
    },
    {
      name: '기간',
      component: <Period state={state} onClickPeriod={onClickPeriod} />,
    },
    {
      name: '수준',
      component: (
        <Level
          state={state}
          onClickLevel={onClickLevel}
          filterCounts={filterCounts.levels}
        />
      ),
    },
  ];

  console.log('🍇state', state);
  return (
    <div className="w-full flex flex-col justify-between rounded-t-[1rem] border border-gray-300 shadow-modal bg-white h-[75vh] ">
      <span className="block mx-[1.6rem] mt-[2.0rem] mb-[1.2rem] text-[1.8rem]">
        필터
      </span>
      <div className="flex-1 overflow-hidden">
        <TabBarUnderBlue tabList={tabList} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" w-full flex justify-center gap-[.8rem] pb-[1.8rem]">
          <button
            type="button"
            onClick={resetFilters}
            className="px-[2.4rem] py-[1.2rem] text-gray-600 text-[1.6rem] flex items-center justify-center gap-[.4rem] border border-gray-600 rounded-[.5rem]"
          >
            <GrPowerReset />
            초기화
          </button>
          <button
            type="submit"
            className="px-[6rem] py-[1.2rem] bg-main-600 text-white rounded-[.5rem]"
          >
            결과 보기
          </button>
        </div>
      </form>
    </div>
  );
}
