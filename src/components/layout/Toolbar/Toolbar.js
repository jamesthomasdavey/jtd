import React from 'react';
import { Link } from 'react-router-dom';

// css
import classes from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.logo}>
        James Thomas Davey
      </Link>
    </div>
  );
};

export default Toolbar;
