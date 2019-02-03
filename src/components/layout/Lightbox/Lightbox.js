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
    document.addEventListener('keydown', this.advanceWithKeyDown);
    this.setState({ isVisible: true, imageIndex: this.props.imageIndex });
  };
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.advanceWithKeyDown);
    disableScroll.off();
  };
  advanceWithKeyDown = e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      this.previousImageHandler();
    } else if (
      e.key === 'ArrowRight' ||
      e.key === 'ArrowDown' ||
      e.key === 'Enter' ||
      e.key === 'Tab' ||
      e.key === ' '
    ) {
      this.nextImageHandler();
    } else if (e.key === 'Escape') {
      this.closeLightbox();
    }
  };
  closeLightbox = () => {
    this.setState({ isVisible: false }, () => {
      setTimeout(this.props.closeLightbox, 300);
    });
  };
  previousImageHandler = () => {
    if (!this.state.isTransitioning) {
      if (this.state.imageIndex !== 0) {
        this.setState({ isTransitioning: true }, () => {
          setTimeout(() => {
            this.setState({ imageIndex: this.state.imageIndex - 1, isTransitioning: false });
          }, 300);
        });
      } else {
        this.closeLightbox();
      }
    }
  };
  nextImageHandler = () => {
    if (!this.state.isTransitioning) {
      if (this.state.imageIndex !== this.props.images.length - 1) {
        this.setState({ isTransitioning: true }, () => {
          setTimeout(() => {
            this.setState({ imageIndex: this.state.imageIndex + 1, isTransitioning: false });
          }, 300);
        });
      } else {
        this.closeLightbox();
      }
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
          nextImageHandler={this.nextImageHandler}
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
