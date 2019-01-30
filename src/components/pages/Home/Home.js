import React, { Component } from 'react';

import Grid1 from './components/Grid1/Grid1';

import classes from './Home.module.css';

class Home extends Component {
  state = {
    activeIndex: 0
  };
  render() {
    return (
      <div className={classes.wrapper}>
        <Grid1 />
      </div>
    );
  }
}

export default Home;
