import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './Backdrop.module.css';

const Backdrop = props => {
  return (
    <div
      className={[classes.wrapper, props.open ? classes.open : ''].join(' ')}
      onClick={props.closeNav}
    />
  );
};

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired
};

export default Backdrop;
