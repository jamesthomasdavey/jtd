import React from 'react';
import PropTypes from 'prop-types';
import Reveal from 'react-reveal/Reveal';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Photo.module.css';

const Photo = props => {
  return (
    <Reveal>
      <div className={classes.wrapper}>
        <ImageFadeIn
          className={[classes.image, props.vertical ? classes.vertical : classes.horizontal].join(
            ' '
          )}
          src={props.src}
          alt={`image_${props.index}`}
        />
        <div className={classes.cover} onClick={() => props.openLightbox(props.index)} />
      </div>
    </Reveal>
  );
};

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  vertical: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  openLightbox: PropTypes.func
};

Photo.defaultProps = {
  vertical: false
};

export default Photo;
