import { create } from 'zustand';
import { useMyStudyStore } from './myStudyStore';
import { fetchMember } from '@/utils/my-study-main/fetch';

type TMemberStore = {
  memberList: any[];
  fetchMemberList: () => Promise<void>;
};

export const useMemberStore = create<TMemberStore>((set) => ({
  memberList: [],
  fetchMemberList: async () => {
    const studyId = useMyStudyStore.getState().studyId;
    const memberList = await fetchMember(studyId);
    set({ memberList });
  },
}));
