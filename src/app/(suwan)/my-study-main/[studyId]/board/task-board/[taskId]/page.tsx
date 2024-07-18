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

  return (
    <>
      <TaskDetail />
    </>
  );
}
