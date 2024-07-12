import Calendar from '@/components/(suwan)/my-study/common/Calendar';
import Schedule from './Schedule';

export default function CalendarContainer() {
  return (
    <div className="bg-gray-100 p-[2.5rem]">
      <Calendar />
      <Schedule />
    </div>
  );
}
