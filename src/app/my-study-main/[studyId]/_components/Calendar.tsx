'use client';
import { Calendar } from '@/components/common/calender/ui/calendar';
import { useCalendarStore } from '@/store/calendarStore';

export default function CalendarComponent(props: any) {
  const { type } = props;
  const { date, setDate, scheduleList, todoList } = useCalendarStore();

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  let day: Date[] = [];
  if (type === 'schedule') {
    day = scheduleList.map((data) => new Date(data.date));
  } else if (type === 'todo') {
    day = todoList.map((data) => new Date(data.date));
  }

  return (
    <>
      <div className="bg-gray-100 w-full felx justify-center">
        <div className="flex flex-col justify-center items-center w-full rounded-[0.5rem] px-[2rem] py-[2.4rem] pt-[1.2rem] bg-white border border-gray-300 z-10 [&>div]:w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            className="rounded-md border"
            modifiers={{ day: day }}
            modifiersClassNames={{
              day: 'bg-gray-200',
            }}
          />
        </div>
      </div>
    </>
  );
}
