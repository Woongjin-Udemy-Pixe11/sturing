export type TStudyComment = {
  _id: string;
  commentWriteId: string;
  commentContent: string;
  studyId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TGetComments = {
  success: boolean;
  message?: string;
  data?: TStudyComment[];
};
