import {
  fetchBlackboard,
  fetchComment,
  patchView,
} from '@/utils/my-study-main/fetch';
import TaskDetail from '../../_component/TaskDetail';
import { getSession } from '@/utils/getSessions';
import BoardComment from '../../_component/BoardComment';

export default async function page({
  params,
}: {
  params: {
    studyId: string;
    taskId: string;
  };
}) {
  const session = await getSession();
  const userId = session?.user?.id;
  const studyId = params.studyId;
  const taskId = params.taskId;
  const task = await fetchBlackboard('task', taskId);
  const commentList = await fetchComment(taskId);

  await patchView(taskId, 'task');
  return (
    <>
      <TaskDetail task={task} userId={userId} />
      <BoardComment
        commentList={commentList}
        studyId={studyId}
        boardId={task._id}
        taskId={taskId}
        userId={userId}
      />
    </>
  );
}
