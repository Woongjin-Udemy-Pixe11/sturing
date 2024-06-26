'use client';

import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={ko}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption:
          'flex justify-center relative items-center p-[1rem] border-gray-300 border-b-[0.2rem]',
        caption_label: 'text-[1.6rem] font-semibold',
        nav: 'space-x-1 flex items-center ',
        nav_button:
          'flex items-center h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        //< 버튼
        nav_button_previous: 'absolute left-1',
        //>버튼
        nav_button_next: 'absolute right-1',
        table:
          'flex flex-col justify-center items-center w-[30.3rem] border-collapse space-y-1',
        head_row: 'flex gap-[0.4rem]',
        head_cell:
          'hidden text-muted-foreground rounded-full font-normal text-content-1 h-[3rem] w-[3rem]',
        row: 'flex w-full',
        cell: 'p-3 text-center text-content-1 relative [&:has([aria-selected].day-range-end)]:rounded-r-full [&:has([aria-selected].day-range-start)]:rounded-l-full [&:has([aria-selected].day-outside)]:bg-accent/50 first:text-red last:text-main-700 first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full focus-within:relative focus-within:z-20',
        day: 'h-[3rem] w-[3rem] font-normal rounded-full',

        day_range_end: 'day-range-end',
        day_range_start: 'day-range-start',
        //선택한 날짜
        day_selected: 'bg-main-600 text-white',
        //오늘
        // day_today: 'text-accent-foreground rounded-full',
        //전달, 다음달
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50',
        //선택한 기간
        day_range_middle:
          'aria-selected:bg-gray-200 aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
