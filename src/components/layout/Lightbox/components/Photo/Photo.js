import React from 'react';
import PropTypes from 'prop-types';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Photo.module.css';

const Photo = props => {
  return (
    <div className={[classes.wrapper, props.image.vert ? classes.vert : ''].join(' ')}>
      <ImageFadeIn className={classes.image} src={props.image.src} alt={`image_${props.index}`} />
      <div className={classes.cover} />
    </div>
  );
};

Photo.propTypes = {
  image: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Photo;
