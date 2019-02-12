import React from 'react';

import F135Component from './../../layout/F135Component/F135Component';

import f_135_01 from './../../../data/images/f_135/f_135_01.jpg';
import f_135_02 from './../../../data/images/f_135/f_135_02.jpg';
import f_135_03 from './../../../data/images/f_135/f_135_03.jpg';
import f_135_04 from './../../../data/images/f_135/f_135_04.jpg';
import f_135_05 from './../../../data/images/f_135/f_135_05.jpg';
import f_135_06 from './../../../data/images/f_135/f_135_06.jpg';
import f_135_07 from './../../../data/images/f_135/f_135_07.jpg';
import f_135_08 from './../../../data/images/f_135/f_135_08.jpg';
import f_135_09 from './../../../data/images/f_135/f_135_09.jpg';
import f_135_10 from './../../../data/images/f_135/f_135_10.jpg';
import f_135_11 from './../../../data/images/f_135/f_135_11.jpg';
import f_135_12 from './../../../data/images/f_135/f_135_12.jpg';
import f_135_13 from './../../../data/images/f_135/f_135_13.jpg';
import f_135_14 from './../../../data/images/f_135/f_135_14.jpg';
import f_135_15 from './../../../data/images/f_135/f_135_15.jpg';
import f_135_16 from './../../../data/images/f_135/f_135_16.jpg';
import f_135_17 from './../../../data/images/f_135/f_135_17.jpg';
import f_135_18 from './../../../data/images/f_135/f_135_18.jpg';
import f_135_19 from './../../../data/images/f_135/f_135_19.jpg';
import f_135_20 from './../../../data/images/f_135/f_135_20.jpg';

const images = [
  f_135_01,
  f_135_02,
  f_135_03,
  f_135_04,
  f_135_05,
  f_135_06,
  f_135_07,
  f_135_08,
  f_135_09,
  f_135_10,
  f_135_11,
  f_135_12,
  f_135_13,
  f_135_14,
  f_135_15,
  f_135_16,
  f_135_17,
  f_135_18,
  f_135_19,
  f_135_20
];

const F135 = () => {
  document.title = 'James Thomas Davey | 135';
  return <F135Component images={images} />;
};

export default F135;
