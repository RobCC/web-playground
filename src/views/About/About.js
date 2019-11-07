import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import modules from '../../store/modules';

const About = ({
  results, counter, addToCounter, onIncrement, onSaveResult, onDeleteResult,
}) => {
  const removeResult = (id) => () => {
    onDeleteResult(id);
  };

  const storeResult = (n) => () => {
    onSaveResult(n);
  };

  return (
    <div>
      About page.

      <div>
        Store counter: {counter}
        <button type="button" onClick={onIncrement}>Increase store counter</button>
        <button type="button" onClick={addToCounter}>Add more</button>

        <hr />

        <div>
          <button type="button" onClick={storeResult(counter)}>Save Result</button>
          <ul>
            {results && results.map((res) => (
              <li key={res.id.toISOString()}>
                {res.id.toString()} - {res.value}
                <button type="button" onClick={removeResult(res.id)}>Delete Result</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  addToCounter: PropTypes.func,
  counter: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.any),
  onIncrement: PropTypes.func,
  onSaveResult: PropTypes.func,
  onDeleteResult: PropTypes.func,
};

const mapStateToProps = (state) => ({
  counter: state.ctr.counter,
  results: state.res.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({ type: modules.counter.actions.INC }),
  addToCounter: () => dispatch({ type: modules.counter.actions.ADD, value: 10 }),
  onSaveResult: (result) => dispatch({ type: modules.results.actions.SAVE_RESULT, result }),
  onDeleteResult: (toRemove) => dispatch({ type: modules.results.actions.DELETE_RESULT, toRemove }),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
