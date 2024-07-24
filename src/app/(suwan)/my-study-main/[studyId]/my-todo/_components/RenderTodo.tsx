'use client';
import { useEffect } from 'react';
import { useCalendarStore } from '@/store/calendarStore';
import { useMyStudyStore } from '@/store/myStudyStore';

export default function RenderTodo({
  studyId,
  userId,
}: {
  studyId: string;
  userId: string;
}) {
  const { setStudyId, setUserId } = useMyStudyStore();
  const { fetchTodoList } = useCalendarStore();

  useEffect(() => {
    setStudyId(studyId);
    setUserId(userId);
    fetchTodoList();
  }, [studyId, userId, setStudyId, setUserId, fetchTodoList]);

  return null;
}
