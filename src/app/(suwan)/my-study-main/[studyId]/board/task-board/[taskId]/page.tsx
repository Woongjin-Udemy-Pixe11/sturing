import { fetchBlackboard, fetchComment } from '@/utils/my-study-main/fetch';
import TaskDetail from '../../_component/TaskDetail';
import { getSession } from '@/utils/getSessions';
import BoardComment from '../../_component/BoardComment';

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
  const commentList = await fetchComment(taskId);

  return (
    <>
      <TaskDetail task={task} userId={userId} />
      <BoardComment
        commentList={commentList}
        boardId={task._id}
        userId={userId}
      />
    </>
  );
}
