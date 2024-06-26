'use client';

import * as React from 'react';

import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import { Calendar } from './ui/calendar';

export default function RangeCalendar() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  return (
    <>
      <span className="text-body-1 text-main-600">
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
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={1}
      />
    </>
  );
}
