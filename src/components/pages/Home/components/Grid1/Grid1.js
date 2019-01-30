import React from 'react';

import home_grid1_01 from '../../../../../data/images/home/grid1/home_grid1_01.jpg';
import home_grid1_02 from '../../../../../data/images/home/grid1/home_grid1_02.jpg';
import home_grid1_03 from '../../../../../data/images/home/grid1/home_grid1_03.jpg';

import classes from './Grid1.module.css';

const Grid1 = () => {
  return (
    <div className={[classes.wrapper, 'photogrid'].join(' ')}>
      <div className={[classes.image1__wrapper, 'photogrid__image-wrapper'].join(' ')}>
        <img src={home_grid1_01} className={[classes.image1, 'photogrid__image'].join(' ')} />
        <div className="photogrid__image-cover" />
      </div>
      <div className={[classes.image2__wrapper, 'photogrid__image-wrapper'].join(' ')}>
        <img src={home_grid1_02} className={[classes.image2, 'photogrid__image'].join(' ')} />
        <div className="photogrid__image-cover" />
      </div>
      <div className={[classes.image3__wrapper, 'photogrid__image-wrapper'].join(' ')}>
        <img src={home_grid1_03} className={[classes.image3, 'photogrid__image'].join(' ')} />
        <div className="photogrid__image-cover" />
      </div>
    </div>
  );
};

export default Grid1;
