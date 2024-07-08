import { userInfo } from 'os';
import { create } from 'zustand';

type userInfoType = {
  id: string;
  email: string;
  nickname: string;
};

type userInfoState = {
  userInfo: userInfoType;
};

type userInfoActions = {
  setUserInfo: (userInfo: userInfoType) => void;
  deleteUserInfo: () => void;
};

const defaultUserInfo = { id: '', email: '', nickname: '' };

export const useUserInfo = create<userInfoState & userInfoActions>((set) => ({
  userInfo: defaultUserInfo,
  setUserInfo: (userInfo: userInfoType) => {
    set({ userInfo });
  },
  deleteUserInfo: () => {
    set({ userInfo: defaultUserInfo });
  },
}));
