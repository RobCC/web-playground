import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App/App';
import modules from './store/modules';

import './index.scss';

const insertRoot = () => {
  const root = document.createElement('div');

  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  return root;
};

const rootReducer = combineReducers({
  ctr: modules.counter.reducer,
  res: modules.results.reducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  insertRoot(),
);
