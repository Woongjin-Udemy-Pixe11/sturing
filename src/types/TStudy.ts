// Study 타입 정의
export type TStudy = {
  _id?: string;
  userId?: {
    _id: string;
    nickname: string;
    image: string;
    studyType: {
      level?: {
        [key: string]: string;
      };
    };
  };
  studyId?: string;
  studyImage: string;
  studyMeetings: string;
  studyTypeisBlue?: boolean;
  studyType?: string;
  studyCategoryisBlue?: boolean;
  studyCategory: string;
  studyName: string;
  studyStart: string;
  studyEnd: string;
  studyPlace: string;
  studyJoinMember: number;
  studyMember: number;
  studyFormDate?: string;

  studyFormTitle?: string;
  studyFormContent?: string;
  studyFormRead?: boolean;
  studyFormSure?: boolean;
  createdAt?: string;
};

export type TFetchStudy = {
  leaderId: string;
  studyImage: string;
  studyName: string;
  studyContent: string;
  studyType: string;
  studyLevel: string;
  studyMember: number;
  studySubject: string;
  studyCategory: string;
  studyDeadline: string;
  studyStart: string;
  studyEnd: string;
  studyPlace: string;
  studyMeetings: string;
};
