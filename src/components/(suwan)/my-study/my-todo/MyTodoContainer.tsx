import Calender from '@/components/(suwan)/my-study/common/Calender';
import Todos from '@/components/(suwan)/my-study/my-todo/Todos';
export default function MyTodoContainer() {
  return (
    <div className="bg-gray-100">
      <Calender />
      <Todos />
    </div>
  );
}
