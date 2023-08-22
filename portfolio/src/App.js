import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
