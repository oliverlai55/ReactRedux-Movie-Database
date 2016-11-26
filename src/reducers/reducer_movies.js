import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MOVIE:
    return { ...state, all: action.payload.data };
  case FETCH_MOVIES:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
