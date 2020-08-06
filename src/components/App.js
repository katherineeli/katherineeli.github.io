import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import '../styles/style.css';
import 'animate.css';
// import { ReactComponent as Logo } from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route name="about" exact path="/" component={About} />
          {/* figure out routes for different pages */}
          <Route name="projects" path="/projects" component={Projects} />
        </div>
      </Router>
    )
  }
}

export default App;
