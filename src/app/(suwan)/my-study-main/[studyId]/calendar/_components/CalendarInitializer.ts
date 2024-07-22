'use client';
import { useEffect } from 'react';
import { useCalendarStore } from '@/store/calendarStore';

export default function CalendarInitializer({ studyId }: { studyId: string }) {
  const { setStudyId, fetchScheduleList } = useCalendarStore();

  useEffect(() => {
    setStudyId(studyId);
    fetchScheduleList();
  }, [studyId, setStudyId, fetchScheduleList]);

  return null;
}
