import React, { Component } from 'react';
import PropTypes from 'prop-types';
import disableScroll from 'disable-scroll';

import Photo from './components/Photo/Photo';
import PreviousArrow from './components/PreviousArrow/PreviousArrow';
import NextArrow from './components/NextArrow/NextArrow';

import classes from './Lightbox.module.css';

class Lightbox extends Component {
  state = {
    imageIndex: 0,
    isVisible: false,
    isTransitioning: false
  };
  componentDidMount = () => {
    this.setState({ isVisible: true, imageIndex: this.props.imageIndex });
  };
  componentWillUnmount = () => {
    disableScroll.off();
  };
  closeLightbox = () => {
    this.setState({ isVisible: false }, () => {
      setTimeout(this.props.closeLightbox, 300);
    });
  };
  previousImageHandler = () => {
    if (!this.state.isTransitioning) {
      this.setState({ isTransitioning: true }, () => {
        setTimeout(() => {
          this.setState({ imageIndex: this.state.imageIndex - 1, isTransitioning: false });
        }, 300);
      });
    }
  };
  nextImageHandler = () => {
    if (!this.state.isTransitioning) {
      this.setState({ isTransitioning: true }, () => {
        setTimeout(() => {
          this.setState({ imageIndex: this.state.imageIndex + 1, isTransitioning: false });
        }, 300);
      });
    }
  };
  render() {
    disableScroll.on();
    return (
      <div className={[classes.wrapper, this.state.isVisible ? classes.visible : ''].join(' ')}>
        <div className={classes.backdrop} onClick={this.closeLightbox} />
        <PreviousArrow
          previousImageHandler={this.previousImageHandler}
          disabled={this.state.imageIndex === 0}
        />
        <Photo
          isTransitioning={this.state.isTransitioning}
          image={this.props.images[this.state.imageIndex]}
          index={this.state.imageIndex}
        />
        <NextArrow
          nextImageHandler={this.nextImageHandler}
          disabled={this.state.imageIndex === this.props.images.length - 1}
        />
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
