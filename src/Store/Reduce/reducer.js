import { ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES } from '../Action/actionTypes';

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
