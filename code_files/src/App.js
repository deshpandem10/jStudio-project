import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';

import { Home } from './Components/HomePage/HomePage';
import { About } from './Components/AboutPage/About';
import { NoMatch } from './Components/NoMatch/NoMatch';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
