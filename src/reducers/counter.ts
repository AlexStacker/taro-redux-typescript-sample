import { ADD, MINUS } from '../constants/counter';

const INITIAL_STATE = {
  num: 0
};

type ACTION = {
  type: typeof ADD | typeof MINUS;
};

export default function counter (state = INITIAL_STATE, action: ACTION) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       };
     default:
       return state;
  }
}
