import React from "react";

import styles from './input.scss';

const Input = ({ label, inputType, ...restProps }) => {
  let inputElement = null;

  switch (inputType) {
    case 'input':
      inputElement = <input className={styles.input} {...restProps} />;
    case 'textarea':
      inputElement = <textarea className={styles.input} {...restProps} />;
    default:
      inputElement = <input className={styles.input} {...restProps} />;
  }

  return (
    <div className={styles.inputElement}>
      <label className={styles.label}>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
