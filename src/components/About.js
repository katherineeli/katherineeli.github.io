import React, { Component } from 'react';
// import { ScrollAnimation } from 'react-animate-on-scroll';
import profile from "../images/profile.jpg";
import oldWell from "../images/oldwell.jpg";
import jmp from "../images/jmp.jpg";
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
  render() {
    return (
      <div className="content" style={{maxWidth:1100}}>
        <div id="about" className="row center">
          <div className="col half padding12">
            <img id= "profile" src={profile} alt="Profile"/>
          </div>
          <div className="bodyemphasis" style={{paddingTop:50}}>
            Hi! My name is Katherine Li.<br/><br/>
            <div className="body">
                I am a junior at the University of North Carolina at Chapel Hill studying Computer Science with minors in Information Science and Statistics and Analytics.
              <div> <br/>
                I am interested in web development, user experience and user interface design, and software engineering. 
              </div> <br/>
              <div>
                I enjoy photography and design as personal projects and would like to continue to develop my skills. 
              </div>
              {/* add in icons and links */}
            </div>
          </div> 
        </div>
        <br/> <hr/>
        <ScrollAnimation animateIn= "animate__fadeInLeft" animateOnce={true}>
          <div id="experience" className="row padding32">
              <div className= "row subheading" style={{justifyContent:'left'}}>EXPERIENCE</div><divider/>
              <div className="row center">
                <div className="col padding12">
                  <img id="jmp" src={jmp} alt="JMP at SAS logo"/>
                </div>
                <div className="col padding12"> 
                  <div className="bodyheader">Technical Intern - SAS JMP
                    <div className="body"><ul>
                      <li></li>
                      <li></li>
                      <li></li></ul>	
                    </div>
                  </div>
                </div>
              </div>
              <div className="row center">
                <div className="col padding12">
                  <img id="oldwell" src={oldWell} alt="UNC Old Well"/>
                </div>
                <div className="col padding12"> 
                  <div className="bodyheader">Undergraduate Research Assistant - UNC School of Education
                    <div className="body"><ul>
                      <li>Designed educational programs to be used in low-income middle schools for cliturally and linguistically diverse students</li>
                      <li>Conducted tests on programs to discover and refine the activities presented prior to data collection</li>
                      <li>Collected data from middle school classes to measure the proficiency of students and evaluate improvements for the programs</li></ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </ScrollAnimation>
        <div id="skills" className="row padding32">
        <ScrollAnimation animateIn= "animate__fadeInLeft" animateOnce={true}>
          <div className= "row subheading" style={{justifyContent:'left'}}>TECHNICAL SKILLS</div><divider/><br/>
            <div className="bodyheader">Technical:
              <div className="body"><ul>
                <li>Java, Python, JavaScript, React.js, C, HTML, Git, Figma</li>
                <li>Adobe Creative Cloud (Photoshop, Lightroom, Illustrator, Premiere Pro), Microsoft Office</li></ul>
              </div>
            </div>
            <div className="bodyheader">Language:
              <div className="body"><ul>
                <li>English, Madarin Chinese, Spanish</li></ul>
              </div>
            </div>
        </ScrollAnimation>  
        </div>
        <div id="courses" className="row padding32">
        <ScrollAnimation animateIn= "animate__fadeInLeft" animateOnce={true}>
          <div className= "row subheading" style={{justifyContent:'left'}}>RELEVANT COURSEWORK</div><divider/><br/>
          <div className="bodyheader">Computer Science:
              <div className="body"><ul>
                <li>Foundations of Programming, Discrete Structures, Multivariable Calculus, Computer Organization, Data Structures, Models of Languages and Computation, Algorithms and Analysis, Introduction to Robotics, Files and Databases (upcoming), Modern Web Programming (upcoming)</li></ul>
              </div>
            </div>
            <div className="bodyheader">Information Science:
              <div className="body"><ul>
                <li>Foundations of Information Science, Text Mining, Tools of Information Literacy, Information Systems Analysis and Design (upcoming)</li></ul>
              </div>
            </div>
        </ScrollAnimation>
        </div>
      </div>
    )
  }
}
export default About;