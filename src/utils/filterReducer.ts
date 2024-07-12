export default function filterReducer(state: any, action: any) {
  switch (action.type) {
    case 'setField': {
      const newField = [...state.field];
      if (newField.includes(action.payload)) {
        return {
          ...state,
          field: newField.filter((item) => item !== action.payload),
        };
      } else {
        return {
          ...state,
          field: [...newField, action.payload],
        };
      }
    }
  }
}
