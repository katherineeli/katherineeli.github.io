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
  // maybe add smooth scrolling
  render() {
    return (
      <div id="navBar" className="navBar">
        <a id="title" href="#about" className="navTitle h1">KATHERINE LI</a>
        <nav>
          <a id="button" href="#about" className="navButton h3" style={{left: 720, color:"black", textDecoration:"none"}}>ABOUT</a>
          <a id="button" href="#projects" className="navButton h3" style={{left: 847, color:"black", textDecoration:"none"}}>PROJECTS</a>
          <a id="button" href="" className="navButton h3" style={{left: 1015, color:"black", textDecoration:"none"}}>PHOTOGRAPHY</a>
          <a id="button" href="" className="navButton h3" style={{left: 1266, color:"black", textDecoration:"none"}}>DESIGN</a>
        </nav>
      </div>
    )
  }
}
export default NavBar;