// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';
import Toolbar from './components/layout/Toolbar/Toolbar';
import ContentWrapper from './components/layout/ContentWrapper/ContentWrapper';

// pages components
import Home from './components/pages/Home/Home';
import F_120_A from './components/pages/F_120_A/F_120_A';
import F_120_B from './components/pages/F_120_B/F_120_B';
import Blog from './components/pages/Blog/Blog';

// css
import classes from './App.module.css';

class App extends Component {
  state = {
    transitioning: false
  };
  pageTransitionHandler = cb => {
    this.setState({ transitioning: true }, () => {
      cb();
      setTimeout(() => {
        this.setState({ transitioning: false });
      }, 300);
    });
  };
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className={classes.wrapper__outer}>
          <Navigation pageTransitionHandler={this.pageTransitionHandler} />
          <div className={classes.wrapper}>
            <Toolbar />
            <ContentWrapper transitioning={this.state.transitioning}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/120-a" component={F_120_A} />
                <Route exact path="/120-b" component={F_120_B} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:page" component={Blog} />
              </Switch>
            </ContentWrapper>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
