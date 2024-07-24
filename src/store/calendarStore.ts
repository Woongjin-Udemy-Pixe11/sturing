import { create } from 'zustand';
import { fetchSchedule } from '@/lib/actions/fetchMyStudy';
import { fetchTodos } from '@/lib/actions/todoAction';
import { useMyStudyStore } from './myStudyStore';

type CalendarState = {
  date: Date;
  scheduleList: any[];
  todoList: any[];
  studyId: string;
  userId: string;
  setDate: (date: Date) => void;
  setStudyId: (id: string) => void;
  setUserId: (id: string) => void;
  fetchScheduleList: () => Promise<void>;
  fetchTodoList: () => Promise<void>;
};

export const useCalendarStore = create<CalendarState>((set, get) => ({
  date: new Date(),
  scheduleList: [],
  todoList: [],
  studyId: '',
  userId: '',

  setDate: (newDate) => set({ date: newDate }),
  setStudyId: (id) => set({ studyId: id }),
  setUserId: (id) => set({ userId: id }),
  fetchScheduleList: async () => {
    const { studyId, date } = get();

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
