import React, { Component } from 'react';
import PropTypes from 'prop-types';
import disableScroll from 'disable-scroll';
import Reveal from 'react-reveal/Reveal';

import classes from './Lightbox.module.css';

class Lightbox extends Component {
  state = {
    activeIndex: 0,
    isVisible: false
  };
  componentDidMount = () => {
    this.setState({ isVisible: true });
  };
  componentWillUnmount = () => {
    disableScroll.off();
  };
  closeLightbox = () => {
    this.setState({ isVisible: false }, () => {
      setTimeout(this.props.closeLightbox, 300);
    });
  };
  render() {
    disableScroll.on();
    return (
      <div className={[classes.wrapper, this.state.isVisible ? classes.visible : ''].join(' ')}>
        <div className={classes.backdrop} onClick={this.closeLightbox} />
      </div>
    );
  }
}

Lightbox.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  closeLightbox: PropTypes.func.isRequired
};

export default Lightbox;
