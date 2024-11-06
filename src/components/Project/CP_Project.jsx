import React from "react";
import portfolio from "../../Assets/portfolio_8.jpeg";
import listMate from "../../Assets/td icon.png";
import "./CP_Project.css";

const Project = ({ title, imgSrc, altText, card_description, link }) => {
  return (
    // container for each project card
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={altText} width={250} height={250} />
      </a>
      <p>{title}</p>
      <p>{card_description}</p>
    </div>
  );
};

// Container to hold all project cards.
const Projects = ({ projects }) => {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          imgSrc={project.imgSrc}
          altText={project.altText}
          link={project.link}
          description={project.card_description}
        />
      ))}
    </div>
  );
};

// this container displays the entire project section.
const CP_Project = () => {
  const projectData = [
    {
      id: 1,
      title: "My Portfolio Site",
      imgSrc: portfolio,
      altText: "Screenshot of My Portfolio Site",
      card_description: "A site that showcases my work as a software developer",
      link: "http://localhost:3000/",
    },
    {
      id: 2,
      title: "ListMate",
      imgSrc: listMate,
      altText: "Screenshot of To-Do App",
      card_description: "A simple To-Do App",
      link: "http://127.0.0.1:5500/Todo.Html",
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <Projects projects={projectData} />
    </div>
  );
};

export default CP_Project;
