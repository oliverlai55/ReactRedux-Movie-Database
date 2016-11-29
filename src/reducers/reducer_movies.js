import { FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = { all: [], movie: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MOVIE:
    return { ...state, movie: action.payload.data };
  case FETCH_MOVIES:
    return { ...state, all: action.payload.data };
  case SORT_MOVIES:
    console.log(state.all);
    return {
      ...state,
      all: state.all.sort(function(a, b) {
        return b[input] - a[input]
      })
    };



  default:
    return state;
  }
}
