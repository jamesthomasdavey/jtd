import React from 'react';
import ImageFadeIn from 'react-image-fade-in';

import home_grid2_01 from '../../../../../data/images/home/grid2/home_grid2_01.jpg';
import home_grid2_02 from '../../../../../data/images/home/grid2/home_grid2_02.jpg';
import home_grid2_03 from '../../../../../data/images/home/grid2/home_grid2_03.jpg';

import classes from './Grid2.module.css';

const Grid2 = () => {
  return (
    <div className={[classes.wrapper, 'photogrid'].join(' ')}>
      <div className={[classes.image1__wrapper, 'photogrid__image-wrapper'].join(' ')}>
        <ImageFadeIn
          src={home_grid2_01}
          className={[classes.image1, 'photogrid__image'].join(' ')}
          opacityTransition={1}
        />
        <div className="photogrid__image-cover" />
      </div>
      <div className={[classes.image2__wrapper, 'photogrid__image-wrapper'].join(' ')}>
        <ImageFadeIn
          src={home_grid2_02}
          className={[classes.image2, 'photogrid__image'].join(' ')}
          opacityTransition={1}
        />
        <div className="photogrid__image-cover" />
      </div>
      <div className={[classes.image3__wrapper, 'photogrid__image-wrapper'].join(' ')}>
        <ImageFadeIn
          src={home_grid2_03}
          className={[classes.image3, 'photogrid__image'].join(' ')}
          opacityTransition={1}
        />
        <div className="photogrid__image-cover" />
      </div>
    </div>
  );
};

export default Grid2;
