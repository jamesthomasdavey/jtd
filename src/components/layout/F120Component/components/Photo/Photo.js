import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-reveal/Reveal';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Photo.module.css';

class Photo extends Component {
  state = {
    isVertical: false
  };
  updateOrientation = () => {
    let img = new Image();
    img.src = this.props.src;
    if (img.height > img.width) {
      this.setState({ isVertical: true });
    }
  };
  render() {
    return (
      <Reveal>
        <div className={classes.wrapper}>
          <ImageFadeIn
            className={[
              classes.image,
              this.state.isVertical ? classes.vertical : classes.horizontal
            ].join(' ')}
            src={this.props.src}
            onLoad={this.updateOrientation}
            alt={`image_${this.props.index}`}
          />
          <div
            className={classes.cover}
            onClick={() => this.props.openLightbox(this.props.index)}
          />
        </div>
      </Reveal>
    );
  }
}

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openLightbox: PropTypes.func
};

export default Photo;
