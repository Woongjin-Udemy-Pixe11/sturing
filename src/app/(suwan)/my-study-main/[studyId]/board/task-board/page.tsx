import { taskListDummyData } from '@/dummy/taskList';
import BoardTop from '../_component/BoardTop';
import TaskBoardList from '../_component/TaskBoardList';

const dummyBlackboardData = [
  {
    _id: '60d0fe4f5311236168a109ca',
    studyId: '60d0fe4f5311236168a109cb',
    writerId: '60d0fe4f5311236168a109cc',
    type: 'task',
    title: 'Welcome to the Study Group',
    content:
      'This is the first notice for our study group. Please make sure to read the guidelines and introduce yourself in the forum.',
    image: '/images/card-dummy-img1.png',
    views: 42,
  },
];

export default function page({ params }: { params: { studyId: string } }) {
  const studyId = params.studyId;
  // const taskList = await fetchNoticeList(studyId);

  return (
    <>
      <BoardTop title={'과제 게시판'} isButton href={'./task-board/write'} />
      <TaskBoardList taskList={dummyBlackboardData} />
    </>
  );
}
