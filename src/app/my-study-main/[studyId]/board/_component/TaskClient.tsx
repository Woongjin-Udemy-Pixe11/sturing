'use client';

import Link from 'next/link';
import TaskInfo from './TaskInfo';
import { useEffect, useState } from 'react';

export default function TaskClient(props: any) {
  const { taskList, leaderId } = props;
  const [newTaskList, setNewTaskList] = useState<any[]>([]);

  useEffect(() => {
    if (Array.isArray(taskList) && taskList.length) {
      let aaaList = taskList.slice(0, 2);
      setNewTaskList(aaaList);
    }
  }, [taskList]);

  console.log('🙀', newTaskList);

  return (
    <>
      {newTaskList &&
        newTaskList.length > 0 &&
        newTaskList.map((task: any) => (
          <Link key={task._id} href={`./board/task-board/${task._id}`}>
            <TaskInfo key={task._id} task={task} leaderId={leaderId} />
          </Link>
        ))}
    </>
  );
}
