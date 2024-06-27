import Percent from '@/components/(suwan)/my-study/team/Percent';
import TeamTodo from '@/components/(suwan)/my-study/team/TeamTodo';
import Attend from '@/components/(suwan)/my-study/team/Attend';
import Gallery from '@/components/(suwan)/my-study/team/Gallery';

export default function TeamContainer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-100 w-full ">
        <Percent />
        <TeamTodo />
        <Attend />
        <Gallery />
      </div>
    </>
  );
}
