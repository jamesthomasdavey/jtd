import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// css
import classes from './MenuItem.module.css';

class MenuItem extends Component {
  navLinkHander = () => {
    this.props.closeNav(() => {
      if (this.props.location.pathname !== this.props.path) {
        this.props.pageTransitionHandler(() => {
          setTimeout(() => {
            this.props.history.push(this.props.path);
            window.scrollTo(0, 0);
          }, 300);
        });
      }
    });
  };
  render() {
    return (
      <li
        role="link"
        className={[
          classes.wrapper,
          this.props.small ? classes.small : '',
          this.props.path === this.props.location.pathname ? classes.active : ''
        ].join(' ')}
        onClick={this.navLinkHander}
      >
        <span title={this.props.children} className={classes.text}>
          {this.props.children}
        </span>
      </li>
    );
  }
}

MenuItem.propTypes = {
  small: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
  small: false
};

export default withRouter(MenuItem);
