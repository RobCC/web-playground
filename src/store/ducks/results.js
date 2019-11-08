// Actions
export const SAVE_RESULT = 'SAVE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

const initialState = {
  results: [],
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((res) => res.id !== action.toRemove),
      };
    default:
      return state;
  }
};

// Action Creators
export const saveResult = (result) => ({
  result,
  type: SAVE_RESULT,
});

export const deleteResult = (toRemove) => ({
  toRemove,
  type: DELETE_RESULT,
});

export const thunkDeleteResult = (toRemove) => (dispatch) => setTimeout(
  () => dispatch(deleteResult(toRemove)),
  500,
);
