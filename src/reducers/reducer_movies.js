import { FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES } from '../actions/index';

const INITIAL_STATE = { all: [], movie: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MOVIE:
    return { ...state, movie: action.payload.data };
  case FETCH_MOVIES:
    return { ...state, all: action.payload.data };
  case SORT_MOVIES:
    console.log("INSDIE REDUCERSSS");
    console.log(action.payload);
    console.log(all);
  default:
    return state;
  }
}
