import React from 'react';
import PropTypes from 'prop-types';

// component
import MenuItem from './components/MenuItem/MenuItem';

// css
import classes from './Menu.module.css';

const Menu = props => {
  return (
    <ul className={classes.wrapper} aria-hidden={props.hidden} role="menu">
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/"
        hidden={props.hidden}
      >
        Home
      </MenuItem>
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/120-a"
        hidden={props.hidden}
      >
        120 A
      </MenuItem>
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/120-b"
        hidden={props.hidden}
      >
        120 B
      </MenuItem>
      <MenuItem
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/135"
        hidden={props.hidden}
      >
        135
      </MenuItem>
      <div className={classes.divider} />
      {/* <MenuItem
        small
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/blog"
      >
        Blog
      </MenuItem> */}
      <MenuItem
        small
        closeNav={props.closeNav}
        pageTransitionHandler={props.pageTransitionHandler}
        path="/james"
        hidden={props.hidden}
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
