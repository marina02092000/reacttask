import { ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES } from './actionTypes';

export const addMovieToFavorites = (movie) => {
  return {
  type: ADD_MOVIE_TO_FAVORITES,
  payload: movie,
  }
};

export const removeMovieFromFavorites = (movieId) => {
  return {
    type: REMOVE_MOVIE_FROM_FAVORITES,
    payload: movieId,
  }
};
