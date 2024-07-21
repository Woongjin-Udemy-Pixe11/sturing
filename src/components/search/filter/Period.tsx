'use client';

import RangeCalendar from '@/components/common/calender/RangeCalendar';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

type PeriodProps = {
  state: {
    period: string;
  };
  onClickPeriod: (period: string) => void;
};

export default function Period({ state, onClickPeriod }: PeriodProps) {
  const handleDateChange = (dateRange: DateRange | undefined) => {
    if (dateRange?.from) {
      const dateString = dateRange.to
        ? `${format(dateRange.from, 'y.MM.d')} - ${format(
            dateRange.to,
            'y.MM.d',
          )}`
        : format(dateRange.from, 'y.MM.d');
      onClickPeriod(dateString);
    }
  };

  return (
    <div className="border p-[2rem]">
      <RangeCalendar onChangeDate={handleDateChange} />
    </div>
  );
}
