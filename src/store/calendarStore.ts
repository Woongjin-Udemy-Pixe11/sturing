import { create } from 'zustand';
import { fetchSchedule } from '@/lib/actions/fetchMyStudy';
import { fetchTodos } from '@/lib/actions/todoAction';
import { useMyStudyStore } from './myStudyStore';

type CalendarState = {
  date: Date;
  scheduleList: any[];
  todoList: any[];

  setDate: (date: Date) => void;

  fetchScheduleList: () => Promise<void>;
  fetchTodoList: () => Promise<void>;
};

export const useCalendarStore = create<CalendarState>((set, get) => ({
  date: new Date(),
  scheduleList: [],
  todoList: [],

  setDate: (newDate) => set({ date: newDate }),
  fetchScheduleList: async () => {
    const studyId = useMyStudyStore.getState().studyId;
    const scheduleList = await fetchSchedule(studyId);
    console.log('👔', scheduleList);
    set({ scheduleList });
  },
  fetchTodoList: async () => {
    const studyId = useMyStudyStore.getState().studyId;
    const userId = useMyStudyStore.getState().userId;
    const todoList = await fetchTodos(studyId, userId);
    set({ todoList });
  },
}));
