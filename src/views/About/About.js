import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styles from './about.scss';

import {
  counter as reduxCounter,
  results as reduxResults,
} from '../../store/ducks';

export const About = ({
  results, counter, addCounter, increaseCounter, saveResult, deleteResult,
}) => {
  const onDeleteClick = (id) => () => {
    deleteResult(id);
  };

  const onSaveClick = (n) => () => {
    saveResult(n);
  };

  const onAddMore = () => {
    addCounter(10);
  };

  return (
    <div>
      About page.

      <div>
        Store counter: {counter}
        <button type="button" onClick={increaseCounter}>Increase store counter</button>
        <button type="button" onClick={onAddMore}>Add more</button>

        <hr />

        <div>
          <button type="button" onClick={onSaveClick(counter)}>Save Result</button>
          <ul>
            {results && results.map((res) => (
              <li key={res.id.toISOString()} className={styles.item}>
                <b>Date</b>: {res.id.toString()} - <b>Counter Snapshot</b>: {res.value}
                <button type="button" onClick={onDeleteClick(res.id)}>
                  Delete Result
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  addCounter: PropTypes.func,
  counter: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.any),
  increaseCounter: PropTypes.func,
  saveResult: PropTypes.func,
  deleteResult: PropTypes.func,
};

const mapStateToProps = (state) => ({
  counter: reduxCounter.getCounter(state),
  results: reduxResults.getResults(state),
});

const mapDispatchToProps = {
  increaseCounter: reduxCounter.increaseCounter,
  addCounter: reduxCounter.addCounter,
  saveResult: reduxResults.saveResult,
  deleteResult: reduxResults.thunkDeleteResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
