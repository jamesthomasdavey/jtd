import React from 'react';
import ImageFadeIn from 'react-image-fade-in';

import ContactIcon from './../../layout/ContactIcon/ContactIcon';

import classes from './James.module.css';

import james from './../../../data/images/james/james.jpg';

const James = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.description}>
          <p>
            I took up medium format to renew my enthusiasm for photography while wearing many hats
            in a photo agency environment. I enjoy film photos and cameras for their nostalgic hues
            and winding mechanisms, respectively. I take pictures of nothing in particular, but
            gravitate towards anything sentimental to me. Edgar has asked me to add that I live in
            Mill Valley with my cat.
          </p>
        </div>
        <div className={classes.photo__wrapper}>
          <ImageFadeIn src={james} alt="james" class={classes.photo} />
          <div className={classes.photo__cover} />
        </div>
        <div className={classes.divider} />
        <div className={classes.other}>
          <h2 className={classes.other__title}>Other Makings</h2>
          <h2 className={classes.other__title}>Coming Soon</h2>
          <div className={classes.contact__wrapper}>
            <ContactIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default James;
