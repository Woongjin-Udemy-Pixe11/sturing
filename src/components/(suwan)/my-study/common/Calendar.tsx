import SingleCalendar from '@/components/common/calender/SingleCalendar';

export default function Calendasr() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full rounded-[0.5rem] px-[2rem] py-[2.4rem] bg-white border border-gray-300 z-10 [&>div]:w-full">
        <SingleCalendar />
      </div>
    </>
  );
}
