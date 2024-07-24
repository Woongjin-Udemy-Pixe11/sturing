import { Tmatching } from '@/app/(JH)/matching/_components/ClientMatching';

export type TActionType =
  | { type: 'setInterest'; payload: string }
  | {
      type: 'setLevel';
      payload: { field: string; level: string; interest: string[] };
    }
  | { type: 'setStudyType'; payload: string }
  | { type: 'setMood'; payload: string }
  | { type: 'setRegion'; payload: string }
  | {
      type: 'clearlevel';
      payload: { personlevel: object; interests: string[] };
    };

export default function matchingreducer(state: Tmatching, action: TActionType) {
  switch (action.type) {
    case 'setInterest': {
      const newInterests = [...state.interests];
      if (newInterests.includes(action.payload)) {
        return {
          ...state,
          interests: newInterests.filter((item) => item !== action.payload),
        };
      } else {
        if (newInterests.length === 3) {
          newInterests.shift();
          return {
            ...state,
            interests: [action.payload, ...newInterests],
          };
        }
        return {
          ...state,
          interests: [...newInterests, action.payload],
        };
      }
    }
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
          return {
            ...state,
            preferMood: [action.payload, ...newMood],
          };
        }
        return {
          ...state,
          preferMood: [...newMood, action.payload],
        };
      }
    }
    case 'clearlevel': {
      const newinterest: string[] = action.payload.interests;
      const prevLevel = action.payload.personlevel;
      for (const key of Object.keys(prevLevel)) {
        if (!newinterest.includes(key)) {
          delete prevLevel[`${key}`];
        }
      }
      return {
        ...state,
        level: {
          ...prevLevel,
        },
      };
    }
  }
}
