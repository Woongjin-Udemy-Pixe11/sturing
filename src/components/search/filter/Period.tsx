'use client';
import RangeCalendar from '@/components/common/calender/RangeCalendar';
import { useFilterStore } from '@/store/filterStore';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

export default function Period() {
  const { period, setPeriod } = useFilterStore();

  const handleDateChange = (dateRange: DateRange | undefined) => {
    if (dateRange?.from) {
      const dateString = dateRange.to
        ? `${format(dateRange.from, 'y.MM.d')} - ${format(
            dateRange.to,
            'y.MM.d',
          )}`
        : format(dateRange.from, 'y.MM.d');
      setPeriod(dateString);
    } else {
      setPeriod('');
    }
  };

  return (
    <div className="border p-[2rem]">
      <RangeCalendar
        onChangeDate={handleDateChange}
        initialDateRange={period}
      />
    </div>
  );
}
