import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Photo.module.css';

class Photo extends Component {
  state = {
    isVertical: false
  };
  updateOrientation = () => {
    let img = new Image();
    img.src = this.props.image;
    if (img.height > img.width) {
      this.setState({ isVertical: true });
    }
  };
  render() {
    return (
      <div
        className={[
          classes.wrapper,
          this.props.isTransitioning ? classes.invisible : '',
          this.state.isVertical ? classes.vert : ''
        ].join(' ')}
        onClick={this.props.nextImageHandler}
      >
        <ImageFadeIn
          className={classes.image}
          src={this.props.image}
          alt={`image_${this.props.index}`}
          onLoad={this.updateOrientation}
        />
        <div className={classes.cover} />
      </div>
    );
  }
}

Photo.propTypes = {
  image: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isTransitioning: PropTypes.bool.isRequired,
  nextImageHandler: PropTypes.func.isRequired
};

export default Photo;
