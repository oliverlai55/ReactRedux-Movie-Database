import { FETCH_MOVIES } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MOVIES:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
