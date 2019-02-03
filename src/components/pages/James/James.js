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
            Hello, I am James. I enjoy film photos and cameras for their nostalgic hues and winding
            mechanisms, respectively. I take pictures of nothing in particular, but gravitate
            towards anything sentimental to me. Edgar has asked me to add that I live in Mill Valley
            with my cat.
          </p>
        </div>
        <div className={classes.photo__wrapper}>
          <ImageFadeIn src={james} alt="james" className={classes.photo} />
          <div className={classes.photo__cover} />
        </div>
        <div className={classes.divider} />
        <div className={classes.other}>
          <h2 className={classes.other__title}>Other Makings</h2>
          <ul className={classes.other__list}>
            <a href="https://amzn.to/2HPbrK8" target="_blank" rel="noopener noreferrer">
              <li className={classes.other__item}>
                <span>Pretty Asian</span>
              </li>
            </a>
            <a href="https://gallerizer.netlify.com/" target="_blank" rel="noopener noreferrer">
              <li className={classes.other__item}>
                <span>Gallerizer</span>
              </li>
            </a>
            <a href="https://www.weirdl.it/" target="_blank" rel="noopener noreferrer">
              <li className={classes.other__item}>
                <span>WeirdLit</span>
              </li>
            </a>
          </ul>
          <div className={classes.contact__wrapper}>
            <ContactIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default James;
