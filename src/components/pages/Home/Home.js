import React, { Component, Fragment } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Grid1 from './components/Grid1/Grid1';
import Grid2 from './components/Grid2/Grid2';
import Grid3 from './components/Grid3/Grid3';
import Grid4 from './components/Grid4/Grid4';

import classes from './Home.module.css';

let elapsed = 0;
const waitTime = 9;

const grids = [<Grid1 />, <Grid2 />, <Grid3 />, <Grid4 />];

class Home extends Component {
  state = {
    activeIndex: 0,
    isTransitioning: false
  };
  componentDidMount = () => {
    elapsed = 0;
    this.mounted = true;
    this.autoAdvanceGrid();
  };
  componentWillUnmount = () => {
    this.mounted = false;
  };
  autoAdvanceGrid = () => {
    setInterval(() => {
      if (this.mounted) {
        elapsed++;
        if (elapsed >= waitTime) {
          this.advanceGrid();
        }
      } else {
        clearInterval();
      }
    }, 1000);
  };
  advanceGrid = () => {
    if (this.state.activeIndex >= grids.length - 1) {
      this.changeGrid(0);
    } else {
      this.changeGrid(this.state.activeIndex + 1);
    }
  };
  changeGrid = index => {
    this.setState({ isTransitioning: true }, () => {
      setTimeout(() => {
        elapsed = 0;
        window.scrollTo(0, 0);
        this.setState({ activeIndex: index, isTransitioning: false });
      }, 300);
    });
  };
  render() {
    document.title = 'James Thomas Davey';
    return (
      <Fragment>
        <Sidebar
          changeGrid={this.changeGrid}
          activeIndex={this.state.activeIndex}
          gridsLength={grids.length}
        />
        <div
          className={[
            classes.wrapper,
            this.state.isTransitioning ? classes.transitioning : ''
          ].join(' ')}
        >
          {grids[this.state.activeIndex]}
        </div>
      </Fragment>
    );
  }
}

export default Home;
