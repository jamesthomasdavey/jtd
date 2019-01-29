import React, { Component, Fragment } from 'react';

// components
import Backdrop from './components/Backdrop/Backdrop';
import Burger from './components/Burger/Burger';

// css
import classes from './Navigation.module.css';

class Navigation extends Component {
  state = {
    open: false
  };
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <Fragment>
        <Backdrop open={this.state.open} />
        <nav className={classes.wrapper}>
          <Burger open={this.state.open} />
          <div className={classes.spacer1} />
          <ul className={classes.menu} />
          <div className={classes.spacer2} />
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
