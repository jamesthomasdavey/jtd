import React, { Component } from 'react';

import Grid1 from './components/Grid1/Grid1';
import Grid2 from './components/Grid2/Grid2';

import classes from './Home.module.css';

class Home extends Component {
  state = {
    activeIndex: 0
  };
  render() {
    return (
      <div className={classes.wrapper}>
        {/* <Grid1 /> */}
        <Grid2 />
      </div>
    );
  }
}

export default Home;
