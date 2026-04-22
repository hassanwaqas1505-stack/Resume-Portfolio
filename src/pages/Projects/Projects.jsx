import React from "react";
import "./Projects.css"; // styling

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Gym Website",
      description: "A fully responsive gym website with booking features.",
      img: "https://media.istockphoto.com/id/1679800838/photo/close-up-of-feet-sportman-runner-running-on-treadmill-in-fitness-club-cardio-workout-healthy.jpg?s=2048x2048&w=is&k=20&c=gCxijqL4nBoDraULTQsitBQtisUGhQH-RhdhHj9DjGo=",
      link: " http://localhost:5174/",
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
