import React from 'react';
import PropTypes from 'prop-types';

import classes from './LeftArrow.module.css';

const LeftArrow = props => {
  return (
    <button onClick={props.advanceToFuture} disabled={props.disabled} className={classes.wrapper}>
      <div className={[classes.bar, classes.bar1].join(' ')} />
      <div className={[classes.bar, classes.bar2].join(' ')} />
    </button>
  );
};

LeftArrow.propTypes = {
  disabled: PropTypes.bool.isRequired,
  advanceToFuture: PropTypes.func.isRequired
};

export default LeftArrow;
