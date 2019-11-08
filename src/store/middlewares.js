import { applyMiddleware } from 'redux';

const logger = (store) => (next) => (action) => {
  const result = next(action);

  console.log('Middleware', action);
  console.log('Store', store.getState());

  return result;
};

export default applyMiddleware(logger);
