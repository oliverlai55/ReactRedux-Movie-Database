import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';

const ROOT_URL = 'http://api.themoviedb.org/3/movie/now_playing?';
const API_KEY = 'f40bb4460c5fd3208bf382531a59218a';

export function fetchCollection() {
  const request = axios.get(`${ROOT_URL}api_key=${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
