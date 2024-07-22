type FilterState = {
  field: string[];
  region: string[];
  people: string[];
  period: string;
  level: string[];
};

type FilterAction =
  | { type: 'setField' | 'setPeople'; payload: string[] }
  | {
      type: 'setRegion' | 'setLevel';
      payload: string;
    }
  | { type: 'setPeriod'; payload: string }
  | { type: 'reset' };

export default function filterReducer(
  state: FilterState,
  action: FilterAction,
): FilterState {
  switch (action.type) {
    case 'setField':
      return {
        ...state,
        field: action.payload,
      };
    case 'setPeople':
      return {
        ...state,
        people: action.payload,
      };
    case 'setRegion':
    case 'setLevel': {
      const filterType = action.type.slice(3).toLowerCase() as
        | 'region'
        | 'level';
      const newArray = [...state[filterType]];
      if (newArray.includes(action.payload)) {
        return {
          ...state,
          [filterType]: newArray.filter((item) => item !== action.payload),
        };
      } else {
        return {
          ...state,
          [filterType]: [...newArray, action.payload],
        };
      }
    }
    case 'setPeriod': {
      return {
        ...state,
        period: action.payload,
      };
    }
    case 'reset':
      return {
        field: [],
        region: [],
        people: [],
        period: '',
        level: [],
      };
    default:
      return state;
  }
}
