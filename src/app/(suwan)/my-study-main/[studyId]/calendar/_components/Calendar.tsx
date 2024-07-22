'use client';
import * as React from 'react';
import { Calendar } from '@/components/common/calender/ui/calendar';
import { useCalendarStore } from '@/store/calendarStore';
import { format } from 'date-fns';

export default function CalendarComponent() {
  const { date, setDate, fetchScheduleList } = useCalendarStore();

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
      fetchScheduleList();
    }
  };

  return (
    <>
      <div className="bg-gray-100 w-full felx justify-center">
        <div className="flex flex-col justify-center items-center w-full rounded-[0.5rem] px-[2rem] py-[2.4rem] bg-white border border-gray-300 z-10 [&>div]:w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            className="rounded-md border"
          />
        </div>
      </div>
    </>
  );
}
