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
            <p>I'm Jiya Thakur, a second-year Computer Science Engineering student at SRM University. Currently on a journey to explore the world of web development, I'm focusing on both frontend and backend technologies. I am a passionate front-end developer focused on creating captivating web experiences. While my expertise lies in front-end, I'm also diving into backend development to build complete web applications.</p>
          </div>
          <div className="skills-container">
            <div className="skills-card frontend">
              <h2>Frontend</h2>
              <ul>
                <li>
                  <VerifiedIcon />
                  <span>HTML & CSS</span>
                  <br />
                  <small>(intermediate)</small>
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Javascript</span>
                  <br />
                  <small>(intermediate)</small>
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Bootstrap</span>
                  <br />
                  <small>(intermediate)</small>
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Tailwind css</span>
                  <br />
                  <small>(intermediate)</small>
                </li>
                <li>
                  <VerifiedIcon />
                  <span>React</span>
                  <br />
                  <small>(intermediate)</small>
                </li>
                <li>
                  <VerifiedIcon />
                  <span>React-redux</span>
                  <br />
                  <small>(intermediate)</small>
                </li>
              </ul>
            </div>
            <div className="skills-card backend">
              <h2>Backend</h2>
              <ul>
                <li>
                  <VerifiedIcon />
                  <span>Nodejs</span>
                  <br />
                  <small>(basic)</small>
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Mongodb</span>
                  <br />
                  <small>(basic)</small>
                </li>
                <li>
                  <VerifiedIcon />
                  <span>Express</span>
                  <br />
                  <small>(basic)</small>
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
