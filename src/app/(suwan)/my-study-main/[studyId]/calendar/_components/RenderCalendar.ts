'use client';
import { useEffect } from 'react';
import { useCalendarStore } from '@/store/calendarStore';
import { useMyStudyStore } from '@/store/myStudyStore';

export default function RenderCalendar({ studyId }: { studyId: string }): null {
  const { fetchScheduleList } = useCalendarStore();
  const { setStudyId } = useMyStudyStore();

  useEffect(() => {
    setStudyId(studyId);
    fetchScheduleList();
  }, [studyId, setStudyId, fetchScheduleList]);

  return null;
}
