import axios from 'axios';


export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const SORT_MOVIES = 'SORT_MOVIES';

const ROOT_URL = 'http://api.themoviedb.org/3/movie/';
const API_KEY = 'f40bb4460c5fd3208bf382531a59218a';

export function fetchCollection() {
  const request = axios.get(`${ROOT_URL}now_playing?api_key=${API_KEY}`)
  // console.log(request);
  return {
    type: FETCH_MOVIES,
    payload: request
  };
}

export function fetchMovie(id) {
  const request = axios.get(`${ROOT_URL}${id}?api_key=${API_KEY}&append_to_response=videos`)

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}

export function sortMovies(sortKey) {
    console.log('inside action creator');
    // const request = axios.get(`${ROOT_URL}now_playing?api_key=${API_KEY}`)
    // console.log(request);
  return {
    type: SORT_MOVIES,
    payload: sortKey
  };
}
