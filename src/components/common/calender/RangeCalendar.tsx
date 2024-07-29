'use client';
//필터검색에서만 사용
import * as React from 'react';

import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { Calendar } from './ui/calendar';

type TRangeCalendarProps = {
  onChangeDate?: (dateRange: DateRange | undefined) => void;
  initialDateRange?: string;
};

export default function RangeCalendar(props: TRangeCalendarProps) {
  const { onChangeDate, initialDateRange } = props;
  const [date, setDate] = React.useState<DateRange | undefined>(
    initialDateRange
      ? {
          from: new Date(initialDateRange.split(' - ')[0]),
          to: new Date(initialDateRange.split(' - ')[1]),
        }
      : undefined,
  );

  React.useEffect(() => {
    if (onChangeDate) {
      onChangeDate(date);
    }
  }, [date]);

  return (
    <div className="flex flex-col">
      <span className="text-body-2 items-start text-main-600">
        {date?.from ? (
          date.to ? (
            <>
              {format(date.from, 'y.MM.d')} - {format(date.to, 'y.MM.d')}
            </>
          ) : (
            format(date.from, 'y.MM.d')
          )
        ) : (
          <span>Pick a date</span>
        )}
      </span>
      <div className="flex justify-center w-full">
        <Calendar
          initialFocus
          mode="range"
          // defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={1}
        />
      </div>
    </div>
  );
}
