export type TstudyReview = {
  _id: string;
  studyId: string;
  userId: {
    _id: string;
    nickname: string;
    image: string;
  };
  studyReviewScore: number;
  studyReviewContent: string;
  evaluateduser: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
