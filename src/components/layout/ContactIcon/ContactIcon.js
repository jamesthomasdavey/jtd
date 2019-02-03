import React from 'react';
import ImageFadeIn from 'react-image-fade-in';

import classes from './ContactIcon.module.css';

import envelope from './../../../data/images/icons/envelope.svg';

const ContactIcon = () => {
  return (
    <a href="mailto:james.t.davey@gmail.com" className={classes.wrapper}>
      <div className={classes.wrapper__inner}>
        <ImageFadeIn src={envelope} className={classes.envelope} />
      </div>
    </a>
  );
};

export default ContactIcon;
