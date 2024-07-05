// Study 타입 정의
export type TStudy = {
  studyId?: string;
  studyImage: string;
  studyMeetings: string;
  studyTypeisBlue?: boolean;
  studyType: string;
  studyCategoryisBlue?: boolean;
  studyCategory: string;
  studyName: string;
  studyStart: string;
  studyEnd: string;
  studyPlace: string;
  studyJoinMember: number;
  studyMember: number;
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
