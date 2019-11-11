import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, age }) => (
  <div className="user">
    <h1>{name}</h1>
    <p>Age: {age}</p>
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        font-family: sans-serif;
      }
    `}
    </style>
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default User;
