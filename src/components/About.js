import React, { Component } from 'react';
import profile from "../images/easter.jpg";
class About extends Component {
  render() {
    return (
      // <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli"></link>
      <div className="content">
        <div className="halfleft">
          <img className= "profile" src={profile} alt="profile picture"/>
        </div>
        <div className="halfright bodyemphasis" style={{paddingTop:50}}>
          Hi! My name is Katherine Li.
            <div className="body" style={{paddingTop: 50}}>
              I am a junior at the University of North Carolina at Chapel Hill studying Computer Science with minors in Information Science and Statistics and Analytics. 
            <div style={{paddingTop: 25}}>
              I am interested in web development, user experience and user interface design, and software engineering. 
            </div>
            <div style={{paddingTop: 25}}>
              I enjoy photography and design as personal projects and would like to continue to develop my skills. 
            </div>
            </div>
          </div>
      </div>
    )
  }
}
export default About;