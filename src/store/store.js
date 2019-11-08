import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { combinedReducers } from './modules';
import middlewares from './middlewares';

export default createStore(
  combinedReducers,
  composeWithDevTools(middlewares),
);
