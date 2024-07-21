type FilterState = {
  field: string[];
  region: string[];
  people: string[];
  period: string;
  level: string[];
};

type FilterAction =
  | {
      type: 'setField' | 'setRegion' | 'setPeople' | 'setLevel';
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
    case 'setRegion':
    case 'setPeople':
    case 'setLevel': {
      const filterType = action.type.slice(3).toLowerCase() as
        | 'field'
        | 'region'
        | 'people'
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
