// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';

// pages components
import Landing from './components/pages/Landing/Landing';

// css
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className={classes.wrapper}>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
