import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import { Link } from 'react-router-dom';

import ContactIcon from './../../layout/ContactIcon/ContactIcon';

import classes from './James.module.css';

import james from './../../../data/images/james/james.jpg';

const James = () => {
  document.title = 'James Thomas Davey | About';
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.description}>
          <p>
            Hello, my name is James. I take pictures of nothing in particular, but gravitate towards
            anything sentimental to me. I enjoy analog photos and cameras for their nostalgic hues
            and winding mechanisms, respectively. I can't{' '}
            <Link title="Blog" target="_self" className={classes.description__link} to="/blog">
              write
            </Link>
            , but I like to read{' '}
            <a
              title="WeirdLit"
              className={classes.description__link}
              href="https://www.weirdl.it/"
              target="_blank"
              rel="noopener noreferrer"
            >
              weird
            </a>
            . Edgar has asked me to add that I live in Mill Valley with my cat.
          </p>
        </div>
        <div className={classes.photo__wrapper}>
          <ImageFadeIn src={james} alt="James leaning on porch railing" className={classes.photo} />
          <div className={classes.photo__cover} />
        </div>
        <div className={classes.divider} />
        <div className={classes.other}>
          <h2 className={classes.other__title}>
            Other Makings
            <br />
            Coming Soon
          </h2>
          {/* <ul className={classes.other__list}>
            <a href="https://amzn.to/2GqdvFU" target="_blank" rel="noopener noreferrer">
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
          </ul> */}
          <div className={classes.contact__wrapper}>
            <ContactIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default James;
