import { TSearchFilter } from '@/types/TFilter';
import { useCallback, useEffect, useState } from 'react';
import BottomSheetFilter from './BottomSheetFilter';
import FilterButton from './FilterButton';

type FilterButtonType = {
  title: string;
  key: keyof TSearchFilter;
  isBlue: boolean;
};

export default function FilterBar({
  initialFilters,
}: {
  initialFilters: TSearchFilter;
}) {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterButtonList, setFilterButtonList] = useState<FilterButtonType[]>(
    [],
  );

  useEffect(() => {
    updateFilterButtonList(initialFilters);
  }, [initialFilters]);

  const updateFilterButtonList = (filters: TSearchFilter) => {
    const newFilterButtonList: FilterButtonType[] = [
      { title: '분야', key: 'field', isBlue: filters.field.length > 0 },
      { title: '지역', key: 'region', isBlue: filters.region.length > 0 },
      { title: '인원', key: 'people', isBlue: filters.people.length > 0 },
      { title: '기간', key: 'period', isBlue: filters.period !== '' },
      { title: '수준', key: 'level', isBlue: filters.level.length > 0 },
    ];
    setFilterButtonList(newFilterButtonList);
  };

  const toggleFilter = () => {
    setOpenFilter((prev) => !prev);
    document.body.style.overflow = openFilter ? 'auto' : 'hidden';
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
      <div className=" w-full px-[1.6rem] py-[.8rem] flex justify-between items-center">
        <ul className="flex w-[90%] overflow-x-auto py-[.8rem]">
          {filterButtonList &&
            filterButtonList.map((filterbutton) => (
              <li key={filterbutton.key} className="inline mr-[.8rem]">
                <button onClick={toggleFilter}>
                  <FilterButton
                    content={filterbutton.title}
                    isBlue={filterbutton.isBlue}
                  />
                </button>
              </li>
            ))}
        </ul>
        <button onClick={toggleFilter}>
          <img src="/filter.svg" alt="" />
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
