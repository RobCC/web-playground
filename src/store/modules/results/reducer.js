import * as actions from './actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actions.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((res) => res.id !== action.toRemove),
      };
    default:
      return state;
  }
};

export default reducer;
