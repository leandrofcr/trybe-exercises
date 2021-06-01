import { createStore, combineReducers } from 'redux';
import updateDateUser from '../reducers';

const rootReducer = combineReducers({ updateDateUser });

const store = createStore(rootReducer);

export default store;