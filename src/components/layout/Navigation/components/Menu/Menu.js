import React from 'react';
import PropTypes from 'prop-types';

// component
import MenuItem from './components/MenuItem/MenuItem';

// css
import classes from './Menu.module.css';

const Menu = props => {
  return (
    <ul className={classes.wrapper}>
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/"
      >
        Home
      </MenuItem>
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/120-a"
      >
        120 A
      </MenuItem>
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/120-b"
      >
        120 B
      </MenuItem>
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/135"
      >
        135
      </MenuItem>
      <div className={classes.divider} />
      <MenuItem
        small
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/blog"
      >
        Blog
      </MenuItem>
      <MenuItem
        small
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/james"
      >
        James
      </MenuItem>
    </ul>
  );
};

Menu.propTypes = {
  closeNav: PropTypes.func.isRequired
};

export default Menu;
