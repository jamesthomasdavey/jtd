import React, { Component } from 'react';

import classes from './ContentWrapper.module.css';

class ContentWrapper extends Component {
  render() {
    return (
      <div
        className={[classes.wrapper, this.props.transitioning ? classes.invisible : ''].join(' ')}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ContentWrapper;
