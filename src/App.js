// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';
import Toolbar from './components/layout/Toolbar/Toolbar';

// pages components
import Home from './components/pages/Home/Home';
import F_120A from './components/pages/F_120A/F_120A';

// css
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className={classes.wrapper__outer}>
          <Navigation />
          <div className={classes.wrapper}>
            <Toolbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/120-a" component={F_120A} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
