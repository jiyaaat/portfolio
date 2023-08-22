import React from 'react';
import './Projects.css'; 

function Projects() {
  const projectsData = [
    {
      title: 'Linkedin-clone',
      githubLink: 'https://github.com/jiyaaat/linkedin',
      details: 'Details for Project 1.',
      backgroundImage: 'url("https://exclusive-executive-resumes.com/wp-content/uploads/2020/02/linkedin_1549994884-300x300.png")',
    },
    {
      title: 'One-stop-pick',
      githubLink: 'https://github.com/jiyaaat/one-stop-pick/tree/master/one-stop-pick',
      details: 'Details for Project 2.',
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOMZGn9CWvhq6uWGgUvnFXr8uaa5JxGGb0g&usqp=CAU")',
    },
    {
      title: 'Whatsapp-clone',
      githubLink: 'https://github.com/jiyaaat/whatsapp-mern/tree/master',
      details: 'Details for Project 3.',
      backgroundImage: 'url("https://seeklogo.com/images/W/whatsapp-logo-A5A7F17DC1-seeklogo.com.png")',
    },
    {
      title: 'Newsapp',
      githubLink: 'https://github.com/jiyaaat/Newsapp/tree/master',
      details: 'Details for Project 3.',
      backgroundImage: 'url("https://tvnewsapp.com/wp-content/uploads/2023/03/1radionewsiconnew-300x300.png")',
    },
    {
      title: 'Weather-app',
      githubLink: 'https://github.com/project3',
      details: 'Details for Project 3.',
      backgroundImage: 'url("https://icon-library.com/images/weather-icon-android/weather-icon-android-21.jpg")',
    },
    {
      title: 'Connect with me to get to know more of my projects',
      githubLink: 'https://github.com/',
      details: 'Details for Project 3.',
      backgroundImage: 'url("https://media.istockphoto.com/id/1435226158/photo/circuit-board-background-computer-data-technology-artificial-intelligence.webp?b=1&s=170667a&w=0&k=20&c=d-gHg6uCV5JEaKJCpxhJ01Ab19m032daRC8vDo8NzDI=")',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h1>Projects</h1>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div className="project-card" style={{ backgroundImage: project.backgroundImage }} key={index}>
              <div className="project-card-content">
                <div className="front-content">
                  
                </div>
                <div className="back-content">
                  <div className="back-header">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="buttons">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className="github-button">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;