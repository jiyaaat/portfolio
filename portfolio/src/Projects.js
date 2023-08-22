import React from 'react';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  const projectsData = [
    {
      title: 'Linkedin-clone',
      description: 'Description for Project 1.',
      githubLink: 'https://github.com/jiyaaat/linkedin',
      details: 'Details for Project 1.',
      backgroundImage: 'url("https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw")',
    },
    {
      title: 'One-stop-pick',
      description: 'Description for Project 2.',
      githubLink: 'https://github.com/jiyaaat/one-stop-pick/tree/master/one-stop-pick',
      details: 'Details for Project 2.',
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOMZGn9CWvhq6uWGgUvnFXr8uaa5JxGGb0g&usqp=CAU")',
    },
    {
      title: 'Whatsapp-clone',
      description: 'Description for Project 3.',
      githubLink: 'https://github.com/jiyaaat/whatsapp-mern/tree/master',
      details: 'Details for Project 3.',
      backgroundImage: 'url("https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-whatsapp-icon-social-media-png-image_6618452.png")',
    },
    {
      title: 'Newsapp',
      description: 'Description for Project 3.',
      githubLink: 'https://github.com/jiyaaat/Newsapp/tree/master',
      details: 'Details for Project 3.',
      backgroundImage: 'url("https://www.noteboomtutorials.com/wp-content/uploads/2018/11/news-app-icon.jpg")',
    },
    {
      title: 'Weather-app',
      description: 'Description for Project 3.',
      githubLink: 'https://github.com/project3',
      details: 'Details for Project 3.',
      backgroundImage: 'url("https://icon-library.com/images/weather-icon-android/weather-icon-android-21.jpg")',
    },
    {
      title: 'Connect with me to get to know more of my projects',
      description: 'Description for Project 3.',
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
            <div
            className="project-card"
            style={{ backgroundImage: project.backgroundImage }} // Set background image directly here
            key={index}
          >
              <div className="project-card-content">
                <div className="front-content">
                  <h3>{project.title}</h3>
                </div>
                <div className="back-content">
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
