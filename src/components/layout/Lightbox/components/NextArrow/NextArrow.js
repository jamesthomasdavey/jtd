import React from 'react';
import PropTypes from 'prop-types';

import classes from './NextArrow.module.css';

const NextArrow = props => {
  return (
    <button onClick={props.nextImageHandler} disabled={props.disabled} className={classes.wrapper}>
      <div className={[classes.bar, classes.bar1].join(' ')} />
      <div className={[classes.bar, classes.bar2].join(' ')} />
    </button>
  );
};

NextArrow.propTypes = {
  disabled: PropTypes.bool.isRequired,
  nextImageHandler: PropTypes.func.isRequired
};

export default NextArrow;
