import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App/App';
import reducer from './store/reducer';

import './index.scss';

const insertRoot = () => {
  const root = document.createElement('div');

  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  return root;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  insertRoot(),
);
