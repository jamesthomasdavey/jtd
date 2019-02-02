import React from 'react';
import PropTypes from 'prop-types';

import Photo from './components/Photo/Photo';

import classes from './F120Component.module.css';

const F120Component = props => {
  const photos = props.images.map((image, i) => {
    return <Photo src={image.src} vertical={image.vert} key={i} />;
  });
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>{photos}</div>
    </div>
  );
};

F120Component.propTypes = {
  images: PropTypes.array.isRequired
};

export default F120Component;
