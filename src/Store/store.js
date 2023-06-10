import { createStore } from 'redux';
import rootReducer from './Reduce/rootReducer';

const store = createStore(rootReducer);

export default store;