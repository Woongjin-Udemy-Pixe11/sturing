'use client';
import { useEffect } from 'react';
import { useCalendarStore } from '@/store/calendarStore';

export default function CalendarInitializer({
  studyId,
  userId,
}: {
  studyId: string;
  userId: string;
}) {
  const { setStudyId, setUserId, fetchTodoList } = useCalendarStore();

  useEffect(() => {
    setStudyId(studyId);
    setUserId(userId);
    fetchTodoList();
  }, [studyId, userId, setStudyId, setUserId, fetchTodoList]);

  return null;
}
