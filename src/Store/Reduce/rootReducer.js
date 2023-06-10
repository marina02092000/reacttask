// ./src/Store/Reducers/rootReducer.js
import { combineReducers } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  favorites: Reducer,
});

export default rootReducer;
