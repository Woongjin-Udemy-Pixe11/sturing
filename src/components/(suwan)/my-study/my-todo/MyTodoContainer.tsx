import Calender from '@/components/(suwan)/my-study/common/Calender';
import Todos from '@/components/(suwan)/my-study/my-todo/Todos';

import { studyMemberTodo } from '@/dummy/studyMemberTodo';

export default function MyTodoContainer() {
  return (
    <div className="bg-gray-100 w-full felx justify-center">
      <Calender />
      <Todos todos={studyMemberTodo[0].todos} />
    </div>
  );
}
