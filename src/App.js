// package
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';
import Toolbar from './components/layout/Toolbar/Toolbar';
import ContentWrapper from './components/layout/ContentWrapper/ContentWrapper';

// pages components
import Home from './components/pages/Home/Home';
import F120A from './components/pages/F120A/F120A';
import F120B from './components/pages/F120B/F120B';
import F135 from './components/pages/F135/F135';
import Blog from './components/pages/Blog/Blog';
import James from './components/pages/James/James';

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
                <Route exact path="/120-a" component={F120A} />
                <Route exact path="/120-b" component={F120B} />
                <Route exact path="/135" component={F135} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:page" component={Blog} />
                <Route exact path="/james" component={James} />
              </Switch>
            </ContentWrapper>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
