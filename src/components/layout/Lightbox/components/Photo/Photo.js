import React from 'react';
import PropTypes from 'prop-types';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Photo.module.css';

const Photo = props => {
  return (
    <div
      className={[
        classes.wrapper,
        props.isTransitioning ? classes.invisible : '',
        props.image.vert ? classes.vert : ''
      ].join(' ')}
      onClick={props.nextImageHandler}
    >
      <ImageFadeIn className={classes.image} src={props.image.src} alt={`image_${props.index}`} />
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
