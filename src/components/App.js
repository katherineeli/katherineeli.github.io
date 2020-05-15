import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import About from './About';
import NavBar from './NavBar';
import '../styles/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="about" exact path="/" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
