import { fetchBlackboard, fetchUser } from '@/utils/my-study-main/fetch';
import TaskDetail from '../../_component/TaskDetail';
import { getSession } from '@/utils/getSessions';

export default async function page({
  params,
}: {
  params: {
    taskId: string;
  };
}) {
  const session = await getSession();
  const userId = session?.user?.id;
  const taskId = params.taskId;
  const task = await fetchBlackboard('task', taskId);

  const writer = await fetchUser(task.writerId);

  return (
    <>
      <TaskDetail blackboard={task} writer={writer} userId={userId} />
    </>
  );
}
