'use client';

import * as React from 'react';

import { addDays, format } from 'date-fns';
import { DateRange, DayPickerRangeProps } from 'react-day-picker';
import { Calendar } from '@/components/common/calender/ui/calendar';

type TRangeCalendarProps = {
  onChangeDate?: (dateRange: DateRange | undefined) => void;
  disabledDay: any;
};

export default function RangeCalendar(props: TRangeCalendarProps) {
  const { onChangeDate, disabledDay } = props;
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), 3),
    to: addDays(new Date(), 6),
  });

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
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={1}
          disabled={{ before: disabledDay }}
        />
      </div>
    </div>
  );
}
