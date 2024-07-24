import { create } from 'zustand';

type TMyStudyStore = {
  studyId: string;
  userId: string;
  setStudyId: (id: string) => void;
  setUserId: (id: string) => void;
};

export const useMyStudyStore = create<TMyStudyStore>((set, get) => ({
  studyId: '',
  userId: '',
  setStudyId: (id) => set({ studyId: id }),
  setUserId: (id) => set({ userId: id }),
}));
