'use client';
//필터검색에서만 사용
import * as React from 'react';

import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { Calendar } from './ui/calendar';

type TRangeCalendarProps = {
  onChangeDate?: (dateRange: DateRange | undefined) => void;
};

export default function RangeCalendar(props: TRangeCalendarProps) {
  const { onChangeDate } = props;
  const [date, setDate] = React.useState<DateRange | undefined>();

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
