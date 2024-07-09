import { TFetchStudy } from '@/types/TStudy';

type TActionType =
  | { type: 'setCategory'; payload: string }
  | { type: 'setImage'; payload: string }
  | { type: 'setName'; payload: string }
  | { type: 'setContent'; payload: string }
  | { type: 'setType'; payload: string }
  | { type: 'setLevel'; payload: string }
  | { type: 'setMember'; payload: number }
  | { type: 'setSubject'; payload: string }
  | { type: 'setDeadline'; payload: string }
  | { type: 'setStart'; payload: string }
  | { type: 'setEnd'; payload: string }
  | { type: 'setPlace'; payload: string }
  | { type: 'setMeetings'; payload: string }
  | { type: 'setMood'; payload: string };

export const studyReducer = (
  state: TFetchStudy,
  action: TActionType,
): TFetchStudy => {
  //스터디 키워드 추가
  switch (action.type) {
    case 'setCategory':
      let prev = state.studyCategory;
      if (action.payload === prev) {
        return {
          ...state,
          studyCategory: '',
        };
      }
      return { ...state, studyCategory: action.payload };
    case 'setImage':
      console.log('image:', action);
      return { ...state, studyImage: action.payload };
    case 'setName':
      console.log('name:', action);
      return { ...state, studyName: action.payload };
    case 'setContent':
      console.log('content:', action);
      return { ...state, studyContent: action.payload };
    case 'setPlace':
      console.log('place:', action);
      return { ...state, studyPlace: action.payload };
    case 'setStart':
      return { ...state, studyStart: action.payload };
    case 'setEnd':
      return { ...state, studyEnd: action.payload };
    case 'setMeetings':
      return { ...state, studyMeetings: action.payload };
    case 'setMood':
      return { ...state, studyMood: action.payload };
  }
  return state;
};
