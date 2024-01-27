import React from "react";

const Project = ({ name, githubLink, description }) => {
  return (
    <div className="project">
      <h3>{name}</h3>
      <a href={githubLink} target="_blank" rel="noreferrer">
        Check it on Github
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Project;
