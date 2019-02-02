import React from 'react';
import PropTypes from 'prop-types';

import classes from './PreviousArrow.module.css';

const PreviousArrow = props => {
  return (
    <button onClick={props.previousImageHandler} disabled={props.disabled} className={classes.wrapper}>
      <div className={[classes.bar, classes.bar1].join(' ')} />
      <div className={[classes.bar, classes.bar2].join(' ')} />
    </button>
  );
};

PreviousArrow.propTypes = {
  disabled: PropTypes.bool.isRequired,
  previousImageHandler: PropTypes.func.isRequired
};

export default PreviousArrow;
