import React from 'react';
import PropTypes from 'prop-types';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Photo.module.css';

const isVertical = src => {
  let img = new Image();
  img.src = src;
  var width = img.width;
  var height = img.height;
  return height > width;
};

const Photo = props => {
  return (
    <div
      className={[
        classes.wrapper,
        props.isTransitioning ? classes.invisible : '',
        isVertical(props.image) ? classes.vert : ''
      ].join(' ')}
      onClick={props.nextImageHandler}
    >
      <ImageFadeIn className={classes.image} src={props.image} alt={`image_${props.index}`} />
      <div className={classes.cover} />
    </div>
  );
};

Photo.propTypes = {
  image: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isTransitioning: PropTypes.bool.isRequired,
  nextImageHandler: PropTypes.func.isRequired
};

export default Photo;
