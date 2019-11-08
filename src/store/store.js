import { createStore } from 'redux';
import { combinedReducers } from './modules';
import middlewares from './middlewares';

export default createStore(combinedReducers, middlewares);
