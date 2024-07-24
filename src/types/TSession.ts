export type Tsession = {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
    nickname: string;
    accessToken: string;
    refreshToken: string;
  };
  expires: string;
};

export type Tmatching = {
  _id: string;
  userid: string;
  interests: string[];
  level: {
    [key: string]: string;
  };
  studyType: string;
  preferRegion: string[];
  preferMood: string[];
  matchingInfo: string;
  __v: number;
};
