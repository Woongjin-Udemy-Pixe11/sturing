import { useCallback, useState } from 'react';
import { TbChartCandle } from 'react-icons/tb';
import BottomSheetFilter from './BottomSheetFilter';
import FilterButton from './FilterButton';

export default function FilterBar({ initialFilters }: { initialFilters: any }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterButtonList, setFilterButtonList] = useState(() => [
    { title: '분야', key: 'field', isBlue: initialFilters.field.length > 0 },
    { title: '지역', key: 'region', isBlue: initialFilters.region.length > 0 },
    { title: '인원', key: 'people', isBlue: initialFilters.people.length > 0 },
    { title: '기간', key: 'period', isBlue: initialFilters.period !== '' },
    { title: '수준', key: 'level', isBlue: initialFilters.level.length > 0 },
  ]);

  const onClickFilter = () => {
    setOpenFilter(!openFilter);
    if (!openFilter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeFilter = () => {
    setOpenFilter(false);
    document.body.style.overflow = 'auto';
  };

  const selectedFilters = useCallback((filters: any) => {
    setFilterButtonList((prevList) =>
      prevList.map((button) => ({
        ...button,
        isBlue:
          filters[button.key]?.length > 0 ||
          (button.key === 'period' && filters[button.key] !== ''),
      })),
    );
  }, []);

  return (
    <>
      <div className=" w-full px-[1.2rem] py-[.8rem] flex justify-between items-center">
        <ul className="flex w-[90%] overflow-x-auto py-[.8rem]">
          {filterButtonList &&
            filterButtonList.map((filterbutton) => (
              <li key={filterbutton.title} className="inline mr-[.8rem]">
                <FilterButton
                  content={filterbutton.title}
                  isBlue={filterbutton.isBlue}
                />
              </li>
            ))}
        </ul>
        <button>
          <TbChartCandle
            className="w-[2.4rem] h-[2.4rem] rotate-90"
            onClick={onClickFilter}
          />
        </button>
      </div>
      {openFilter && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-35 z-10"
            onClick={closeFilter}
          ></div>
          <div className="absolute bottom-0 z-10 w-full ">
            <BottomSheetFilter
              onClose={closeFilter}
              onFilterChange={selectedFilters}
              initialFilters={initialFilters}
            />
          </div>
        </>
      )}
    </>
  );
}
