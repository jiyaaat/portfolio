import React from 'react';
import './AboutMe.css';
import VerifiedIcon from '@mui/icons-material/Verified';

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-container">
          <div className="about-details">
            <p>I'm Jiya Thakur, a second-year Computer Science Engineering student at SRM University. Currently on a journey to explore the world of web development, I'm focusing on both frontend and backend technologies. I am a passionate front-end developer focused on creating captivating web experiences. While my expertise lies in front-end, I'm also diving into backend development to build complete web applications.Join me in this exhilarating voyage through the vast avenues of technology, where creativity meets functionality and innovation knows no bounds!</p>
          </div>
          <div className="skills-container">
            <div className="skills-card frontend">
              <h2>Development</h2>
              <ul>
                <li>
                  <VerifiedIcon />
                  <span>HTML & CSS</span>
                  <br />
             
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Javascript</span>
                  <br />
               
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Bootstrap</span>
                  <br />
               
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Tailwind css</span>
                  <br />
               
                </li>
                <li>
                  <VerifiedIcon />
                  <span>React</span>
                  <br />
      
                </li>
                <li>
                  <VerifiedIcon />
                  <span>React-redux</span>
                  <br />
         
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Nodejs</span>
                  <br />
              
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Mongodb</span>
                  <br />
                  
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Expressjs</span>
                  <br />
                </li>
                <li>
                  <VerifiedIcon/>
                  <span>Firebase</span>
                  <br/>
                </li>
              </ul>
            </div>
            <div className="skills-card backend">
              <h2>Languages</h2>
              <ul>
              <li>
                  <VerifiedIcon />
                  <span>Python</span>
                  <br />
              
                </li>
                <li>
                  <VerifiedIcon />
                  <span>C</span>
                  <br />
                  
                </li>
                <li>
                  <VerifiedIcon />
                  <span>C++</span>
                  <br />
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Java</span>
                  <br />
              
                </li>
              </ul>
              <h2>Databases</h2>
              <ul>
              <li>
                  <VerifiedIcon />
                  <span>Mongodb</span>
                  <br />
                </li>
                <li>
                  <VerifiedIcon />
                  <span>MySql</span>
                  <br />
                </li>
              </ul>
              <h2>Others</h2>
              <ul>
              <li>
                  <VerifiedIcon />
                  <span>Git</span>
                  <br />
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Github</span>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
