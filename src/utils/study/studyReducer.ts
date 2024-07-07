import { TFetchStudy } from '@/types/TStudy';

export const studyReducer = (state: TFetchStudy, action: any): TFetchStudy => {
  //스터디 키워드 추가
  switch (action.type) {
    case 'setCategory':
      return state;
    case 'setImg':
      return state;
    case 'setName':
      return state;
    case 'setCotent':
      return state;
    case 'setPlace':
      return state;
    case 'setStart':
      return state;
    case 'setEnd':
      return state;
    case 'setMeeting':
      return state;
    case 'setCategory':
      return state;
  }
  return state;
};
