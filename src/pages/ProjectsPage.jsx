import React from "react";
import Project from "../components/Project";

const ProjectsPage = () => {
  const projects = [
    {
      name: "Tours-Api",
      githubLink: "https://github.com/hadigghazi/Tours-Api.git",
      description: "API for a tours website using Node.js, Express.js, MongoDB",
    },
    {
      name: "clothes",
      githubLink: "https://github.com/hadigghazi/clothes.git",
      description: "Website using HTML, CSS, JavaScript for clothing",
    },
    {
      name: "mern-book-store",
      githubLink: "https://github.com/hadigghazi/mern-book-store.git",
      description: "Basic book store management system using MERN stack",
    },
    {
      name: "worldwise",
      githubLink: "https://github.com/hadigghazi/worldwise.git",
      description: "React app that uses maps for various functionalities",
    },
    {
      name: "gym",
      githubLink: "https://github.com/hadigghazi/gym.git",
      description:
        "Website showing exercises with explanations and videos for each exercise",
    },
    {
      name: "classy-weather",
      githubLink: "https://github.com/hadigghazi/classy-weather.git",
      description:
        "Website displaying weather in specific cities using React classes",
    },
    {
      name: "mapty",
      githubLink: "https://github.com/hadigghazi/mapty.git",
      description:
        "Website using HTML, CSS, JavaScript to locate activities on a map",
    },
    {
      name: "house-of-cinema",
      githubLink: "https://github.com/hadigghazi/house-of-cinema.git",
      description:
        "React app to fetch movies from an API, rate them, and view details",
    },
    {
      name: "eat-and-split",
      githubLink: "https://github.com/hadigghazi/eat-and-split.git",
      description: "React app to split the bill between several people",
    },
    {
      name: "travel-list",
      githubLink: "https://github.com/hadigghazi/travel-list.git",
      description:
        "React app to manage a list of items needed for a travel trip",
    },
    {
      name: "steps",
      githubLink: "https://github.com/hadigghazi/steps.git",
      description:
        "Basic React app to increment and decrement steps (useState practice)",
    },
    {
      name: "pizza-menu",
      githubLink: "https://github.com/hadigghazi/pizza-menu.git",
      description: "Pizza menu website using React",
    },
    {
      name: "Gym-Website",
      githubLink: "https://github.com/hadigghazi/Gym-Website.git",
      description: "Static Gym website using HTML, CSS, and JavaScript",
    },
    {
      name: "Resturant",
      githubLink: "https://github.com/hadigghazi/Resturant.git",
      description: "Static Restaurant website using HTML, CSS, and JavaScript",
    },
  ];

  return (
    <section className="portfolio section container" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="project__container">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            githubLink={project.githubLink}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
