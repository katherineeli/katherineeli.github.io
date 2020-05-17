import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="navTitle h1">
          KATHERINE LI
        </div>
        <ul id="headerButtons">
          <li className="navButton h3" style={{left: 720, width: 107}}><Link to="/About">ABOUT</Link></li>
          <li className="navButton h3" style={{left: 847, width: 148}}><Link to="">PROJECTS</Link></li>
          <li className="navButton h3" style={{left: 1015, width: 232}}><Link to="">PHOTOGRAPHY</Link></li>
          <li className="navButton h3" style={{left: 1266, width: 112}}><Link to="">DESIGN</Link></li>
        </ul>
      </div>
    )
  }
}
export default NavBar;