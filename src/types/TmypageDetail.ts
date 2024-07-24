import { Tmatching } from './TSession';

export type TmypageDetails = {
  users: {
    _id: string;
    name: string;
    email: string;
    nickname: string;
    image: string;
    sturingPercent: number;
    studyCount: number;
    authProviderId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    matchingInfo: string | null;
  };
  matchinginfo: Tmatching;
  numberReview: number;
};
