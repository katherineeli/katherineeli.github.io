import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

class NavBar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("navBar");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
  // maybe add smooth scrolling for links
  render() {
    return (
      <div id="navBar" className="navBar">
        <a id="title" className="navTitle h1"><Link to='/' style={{color:"black", textDecoration:"none"}}>KATHERINE LI</Link></a>
        <nav>
        <a id="button" href="#about" className="navButton h3" style={{left: 713, color:"black", textDecoration:"none"}}>ABOUT</a>
        <a id="button" href="#experience" className="navButton h3" style={{left: 844, color:"black", textDecoration:"none"}}>EXPERIENCE</a>
        <a id="button" href="#edu" className="navButton h3" style={{left: 1051, color:"black", textDecoration:"none"}}>EDUCATION</a>
        <a id="button" href="#projects" className="navButton h3" style={{left: 1250, color:"black", textDecoration:"none"}}>PROJECTS</a>
          {/* <a id="button" className="navButton h3" style={{left: 720}}><Link to='/' style={{color:"black", textDecoration:"none"}}>ABOUT</Link></a>
          <a id="button" className="navButton h3" style={{left: 847}}><Link to='/projects' style={{color:"black", textDecoration:"none"}}>PROJECTS</Link></a>
          <a id="button" className="navButton h3" style={{left: 1015}}><Link to='/photography' style={{color:"black", textDecoration:"none"}}>PHOTOGRAPHY</Link></a>
          <a id="button" className="navButton h3" style={{left: 1266, color:"black", textDecoration:"none"}}><Link to='/design' style={{color:"black", textDecoration:"none"}}>DESIGN</Link></a> */}
        </nav>
      </div>
    )
  }
}
export default NavBar;