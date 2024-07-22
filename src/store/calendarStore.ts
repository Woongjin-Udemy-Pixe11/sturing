import { create } from 'zustand';
import { fetchSchedule } from '@/lib/actions/fetchMyStudy';

type CalendarState = {
  date: Date;
  scheduleList: any[];
  studyId: string;
  setDate: (date: Date) => void;
  setStudyId: (id: string) => void;
  fetchScheduleList: () => Promise<void>;
};

export const useCalendarStore = create<CalendarState>((set, get) => ({
  date: new Date(),
  scheduleList: [],
  studyId: '',
  setDate: (newDate) => set({ date: newDate }),
  setStudyId: (id) => set({ studyId: id }),
  fetchScheduleList: async () => {
    const { studyId, date } = get();
    console.log('✅', date);
    const scheduleList = await fetchSchedule(studyId);
    console.log('👔', scheduleList);
    set({ scheduleList });
  },
}));
