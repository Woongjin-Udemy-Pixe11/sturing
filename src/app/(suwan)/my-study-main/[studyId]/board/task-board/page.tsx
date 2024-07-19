import BoardTop from '../_component/BoardTop';
import TaskBoardList from '../_component/TaskBoardList';
import { fetchBoardList } from '@/utils/my-study-main/fetch';

export default async function page({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const taskList = await fetchBoardList('task', studyId);

  return (
    <>
      <BoardTop title={'과제 게시판'} isButton href={'./task-board/write'} />
      <TaskBoardList taskList={taskList} />
    </>
  );
}
