import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
