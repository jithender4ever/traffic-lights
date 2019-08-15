import {INITIAL_STATE} from "./store";

function reducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT':
      return {
        ...state,
        colorIndex: state.colorIndex < 2 ? state.colorIndex + 1 : 0
      };
    case 'MODE':
      return {
        ...state,
        mode: !state.mode
      };
    default:
      return state;
  }
}

export default reducer;
