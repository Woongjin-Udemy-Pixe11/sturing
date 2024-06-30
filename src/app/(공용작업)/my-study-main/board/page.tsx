import { taskListDummyData } from '@/dummy/taskList';
import BoardTop from './_component/BoardTop';
import TaskBoardList from './_component/TaskBoardList';

export default function page() {
  return (
    <>
      <BoardTop title={'과제 게시판'} isButton href={'./task-board/write'} />
      <TaskBoardList task={taskListDummyData} />
    </>
  );
}
