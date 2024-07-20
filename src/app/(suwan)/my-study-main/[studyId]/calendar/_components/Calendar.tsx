'use client';
import * as React from 'react';
import { Calendar } from '@/components/common/calender/ui/calendar';
// import Todos, { formatingDate } from './../my-todo/Todos';

export default function CalendarComponent({
  studyId,
  userId,
  data,
}: {
  studyId: any;
  userId: any;
  data: any;
}) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  //   const isoDate = new Date(date).toISOString();
  //   let clickdate = formatingDate(isoDate);
  //   const dateData = data.filter((todo: any) => todo.date === clickdate);

  return (
    <>
      <div className="bg-gray-100 w-full felx justify-center">
        <div className="flex flex-col justify-center items-center w-full rounded-[0.5rem] px-[2rem] py-[2.4rem] bg-white border border-gray-300 z-10 [&>div]:w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        {/* <Todos studyId={studyId} userId={userId} dateData={dateData} /> */}
      </div>
    </>
  );
}
