import React from 'react';
import PropTypes from 'prop-types';
import disableScroll from 'disable-scroll';
import Reveal from 'react-reveal/Reveal';

import classes from './Lightbox.module.css';

const Lightbox = props => {
  if (props.display) {
    disableScroll.on();
  } else {
    disableScroll.off();
  }
  if (props.display) {
    return (
      <Reveal>
        <div className={classes.wrapper}>
          <div className={classes.backdrop} onClick={props.closeLightbox} />
        </div>
      </Reveal>
    );
  } else {
    return null;
  }
};

Lightbox.propTypes = {
  display: PropTypes.bool.isRequired,
  imageIndex: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  closeLightbox: PropTypes.func.isRequired
};

export default Lightbox;
