import { combineReducers } from 'redux';
import * as counter from './counter';
import * as results from './results';

export const combinedReducers = combineReducers({
  ctr: counter.reducer,
  res: results.reducer,
});

export default {
  counter,
  results,
};
