import React, { Component, Fragment } from 'react';

// components
import Backdrop from './components/Backdrop/Backdrop';
import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';

// css
import classes from './Navigation.module.css';

class Navigation extends Component {
  state = {
    open: false
  };
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };
  closeNav = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <Fragment>
        <Backdrop open={this.state.open} closeNav={this.closeNav} />
        <nav className={[classes.wrapper, this.state.open ? classes.open : ''].join(' ')}>
          <Burger open={this.state.open} toggleNav={this.toggleNav} />
          <div className={classes.spacer1} />
          <Menu />
          <div className={classes.spacer2} />
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
