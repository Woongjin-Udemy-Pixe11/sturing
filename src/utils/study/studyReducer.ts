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
  | { type: 'setMeetings'; payload: string };

export const studyReducer = (
  state: TFetchStudy,
  action: TActionType,
): TFetchStudy => {
  //스터디 키워드 추가
  switch (action.type) {
    case 'setCategory':
      console.log('action:', action);
      return state;
    case 'setImage':
      console.log('action:', action);
      return state;
    case 'setName':
      return state;
    case 'setContent':
      return state;
    case 'setPlace':
      return state;
    case 'setStart':
      return state;
    case 'setEnd':
      return state;
    case 'setMeetings':
      return state;
    case 'setCategory':
      return state;
  }
  return state;
};
