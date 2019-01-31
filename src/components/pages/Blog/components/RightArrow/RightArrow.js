import React from 'react';
import PropTypes from 'prop-types';

import classes from './RightArrow.module.css';

const RightArrow = props => {
  return (
    <button onClick={props.advanceToPast} disabled={props.disabled} className={classes.wrapper}>
      <div className={[classes.bar, classes.bar1].join(' ')} />
      <div className={[classes.bar, classes.bar2].join(' ')} />
    </button>
  );
};

RightArrow.propTypes = {
  disabled: PropTypes.bool.isRequired,
  advanceToPast: PropTypes.func.isRequired
};

export default RightArrow;
