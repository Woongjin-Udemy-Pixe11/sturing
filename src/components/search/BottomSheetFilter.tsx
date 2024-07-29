'use client';
import { useFilterStore } from '@/store/filterStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const {
    field,
    region,
    people,
    period,
    level,
    setField,
    setRegion,
    setPeople,
    setPeriod,
    setLevel,
    reset,
  } = useFilterStore();

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
        await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/search/filter`, {
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
    if (field.length) params.append('field', field.join(','));
    if (region.length) params.append('region', region.join(','));
    if (people.length) params.append('people', people.join(','));
    if (period) params.append('period', period);
    if (level.length) params.append('level', level.join(','));

    onClose();

    router.push(`/search/result?${params.toString()}`);
  };

  useEffect(() => {
    onFilterChange({ field, region, people, period, level });
  }, [field, region, people, period, level, onFilterChange]);

  const tabList = [
    {
      name: '분야',
      component: <Field filterCounts={filterCounts.fields} />,
    },
    {
      name: '지역',
      component: <Region />,
    },
    {
      name: '인원',
      component: <People filterCounts={filterCounts.people} />,
    },
    {
      name: '기간',
      component: <Period />,
    },
    {
      name: '수준',
      component: <Level filterCounts={filterCounts.levels} />,
    },
  ];

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
            onClick={reset}
            className="px-[2.4rem] py-[1.2rem] text-gray-600 text-[1.6rem] flex items-center justify-center gap-[.4rem] border border-gray-400 rounded-[.5rem]"
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
