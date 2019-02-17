import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './Backdrop.module.css';

const Backdrop = props => {
  return (
    <div
      role="presentation"
      aria-hidden={true}
      className={[classes.wrapper, props.open ? classes.open : ''].join(' ')}
      onClick={() => props.closeNav(() => null)}
    />
  );
};

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired
};

export default Backdrop;
