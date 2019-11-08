export const SAVE_RESULT = 'SAVE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

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
