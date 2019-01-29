import React from 'react';

// component
import MenuItem from './components/MenuItem/MenuItem';

// css
import classes from './Menu.module.css';

const Menu = () => {
  return (
    <div className={classes.wrapper}>
      <MenuItem>Home</MenuItem>
      <MenuItem>120 A</MenuItem>
      <MenuItem>120 B</MenuItem>
      <MenuItem>135</MenuItem>
      <div className={classes.divider} />
      <MenuItem small>Blog</MenuItem>
      <MenuItem small>James</MenuItem>
    </div>
  );
};

export default Menu;
