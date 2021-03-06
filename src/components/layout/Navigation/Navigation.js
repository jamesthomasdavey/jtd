import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import disableScroll from 'disable-scroll';

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
  closeNav = cb => {
    this.setState({ open: false }, cb);
  };
  render() {
    if (this.state.open) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
    return (
      <Fragment>
        <Backdrop open={this.state.open} closeNav={this.closeNav} />
        <nav className={[classes.wrapper, this.state.open ? classes.open : ''].join(' ')}>
          <Burger open={this.state.open} toggleNav={this.toggleNav} />
          <div className={classes.spacer1} />
          <Menu
            hidden={!this.state.open}
            closeNav={this.closeNav}
            pageTransitionHandler={this.props.pageTransitionHandler}
          />
          <div className={classes.spacer2} />
        </nav>
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  pageTransitionHandler: PropTypes.func.isRequired
};

export default Navigation;
