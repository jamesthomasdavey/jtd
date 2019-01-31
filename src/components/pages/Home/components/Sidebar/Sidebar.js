import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Sidebar.module.css';

const Sidebar = props => {
  const radioButtons = [];
  for (let i = 0; i < props.gridsLength; i++) {
    radioButtons.push(
      <Fragment key={i}>
        <input
          checked={props.activeIndex === i}
          onChange={e => props.changeGrid(Number(e.target.id))}
          type="radio"
          className={classes.input}
          id={i}
          name="gallery"
        />
        <label className={classes.label} htmlFor={i}>
          <div className={classes.circle} />
        </label>
      </Fragment>
    );
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.selector}>
        <form>{radioButtons}</form>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  gridsLength: PropTypes.number.isRequired,
  changeGrid: PropTypes.func.isRequired
};

export default Sidebar;
