import React from 'react';
import PropTypes from 'prop-types';

// css
import classes from './Burger.module.css';

const Burger = props => {
  return (
    <div
      role="switch"
      aria-checked={props.open}
      aria-label="Show Navigation"
      className={[classes.wrapper, props.open ? classes.open : ''].join(' ')}
      onClick={props.toggleNav}
    >
      <div className={[classes.bar, classes.bar1].join(' ')} />
      <div className={[classes.bar, classes.bar2].join(' ')} />
      <div className={[classes.bar, classes.bar3].join(' ')} />
    </div>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired
};

export default Burger;
