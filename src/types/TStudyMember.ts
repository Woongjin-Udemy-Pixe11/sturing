export type TStudyMember = {
  _id: string;
  studyId: string;
  userId: {
    _id: string;
    nickname: string;
    image: string;
  };
  attendance: string[];
  studyProgress: number;
  __v: number;
};
