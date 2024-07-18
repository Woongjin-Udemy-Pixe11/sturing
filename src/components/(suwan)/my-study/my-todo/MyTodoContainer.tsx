import Calendar from '@/components/(suwan)/my-study/common/Calendar';
import Todos from '@/components/(suwan)/my-study/my-todo/Todos';

import { studyMemberTodo } from '@/dummy/studyMemberTodo';

export default function MyTodoContainer({
  studyId,
  userId,
}: {
  studyId: any;
  userId: any;
}) {
  return (
    <div className="bg-gray-100 w-full felx justify-center p-[2rem]">
      <Calendar />
      <Todos studyId={studyId} userId={userId} />
    </div>
  );
}
