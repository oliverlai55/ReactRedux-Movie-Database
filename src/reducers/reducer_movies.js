import { FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = { all: [], movie: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MOVIE:
    return { ...state, movie: action.payload.data };
  case FETCH_MOVIES:
    return { ...state, all: action.payload.data.results };
  case SORT_MOVIES:
    return {
      ...state,
      all: _.sortByOrder(state.all, action.payload, 'desc')
    };

  default:
    return state;
  }
}
