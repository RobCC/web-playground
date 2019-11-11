import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, age }) => (
  <div>
    <h1>{name}</h1>
    <p>Age: {age}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default User;
