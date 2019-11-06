import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const About = ({ counter, onIncrement }) => {
  const onClick = () => {
    onIncrement();
  };

  return (
    <div>
      About page.

      <div>
        Store counter: {counter}
        <button type="button" onClick={onClick}>Increase store counter</button>
      </div>
    </div>
  );
};

About.propTypes = {
  counter: PropTypes.number,
  onIncrement: PropTypes.func,
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({ type: 'INC' }),
});

export default connect(mapStateToProps)(About);
