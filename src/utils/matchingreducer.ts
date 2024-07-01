import { Tmatching } from '@/app/(JH)/matching/_components/ClientMatching';

export type TActionType =
  | { type: 'setInterest'; payload: string }
  | { type: 'setLevel'; payload: { field: string; level: string } }
  | { type: 'setStudyType'; payload: string }
  | { type: 'setMood'; payload: string }
  | { type: 'setRegion'; payload: string };

export default function matchingreducer(state: Tmatching, action: TActionType) {
  switch (action.type) {
    case 'setInterest': {
      const newInterests = [...state.interest];
      if (newInterests.includes(action.payload)) {
        return {
          ...state,
          interest: newInterests.filter((item) => item !== action.payload),
        };
      } else {
        if (newInterests.length === 3) {
          newInterests.shift();
        }
        return {
          ...state,
          interest: [...newInterests, action.payload],
        };
      }
    }
    //TODO:만약 이미선택된것이 한번더 선택된다면, 마찬가지로 취소가 되어야하는지?
    case 'setLevel': {
      return {
        ...state,
        level: {
          ...state.level,
          [action.payload.field]: action.payload.level,
        },
      };
    }
    case 'setStudyType': {
      let prev = state.studyType;
      if (action.payload === prev) {
        return {
          ...state,
          studyType: '',
        };
      }
      return {
        ...state,
        studyType: action.payload,
      };
    }
    case 'setRegion': {
      const newRegion = [...state.preferRegion];
      if (newRegion.includes(action.payload)) {
        return {
          ...state,
          preferRegion: newRegion.filter((item) => item !== action.payload),
        };
      } else {
        if (newRegion.length === 3) {
          newRegion.shift();
        }
        return {
          ...state,
          preferRegion: [...newRegion, action.payload],
        };
      }
    }
    case 'setMood': {
      const newMood = [...state.preferMood];
      if (newMood.includes(action.payload)) {
        return {
          ...state,
          preferMood: newMood.filter((item) => item !== action.payload),
        };
      } else {
        if (newMood.length === 3) {
          newMood.shift();
        }
        return {
          ...state,
          preferMood: [...newMood, action.payload],
        };
      }
    }
  }
}
