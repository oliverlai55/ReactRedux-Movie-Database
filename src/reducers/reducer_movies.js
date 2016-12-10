import { FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES, SEARCH_TITLE } from '../actions/index';
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
  case SEARCH_TITLE:
    let matchedMovies = state.all.filter(function (el) {
      return el.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
    })

    return {
      ...state,
      all: matchedMovies
    }
  default:
    return state;
  }
}
