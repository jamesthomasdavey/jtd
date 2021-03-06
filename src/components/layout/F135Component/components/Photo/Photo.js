import React from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-reveal/Reveal';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Photo.module.css';

const Photo = props => {
  return (
    <Reveal>
      <div className={classes.wrapper}>
        <ImageFadeIn className={classes.image} src={props.src} alt={`image_${props.index}`} />
        <div className={classes.cover} onClick={() => props.openLightbox(props.index)} />
      </div>
    </Reveal>
  );
};

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openLightbox: PropTypes.func
};

export default Photo;
