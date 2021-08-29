import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'reactPortfolio',
      description: 'React Portfolio',
      link: "https://smithfamily42.github.io/react-portfolio",
      repo: "https://github.com/smithfamily42/react-portfolio"
    },
    {
      name: 'reactPortfolio',
      description: 'React Portfolio',
      link: "https://smithfamily42.github.io/react-portfolio",
      repo: "https://github.com/smithfamily42/react-portfolio"
    },
    {
      name: 'reactPortfolio',
      description: 'React Portfolio',
      link: "https://smithfamily42.github.io/react-portfolio",
      repo: "https://github.com/smithfamily42/react-portfolio"
    },
    {
      name: 'reactPortfolio',
      description: 'React Portfolio',
      link: "https://smithfamily42.github.io/react-portfolio",
      repo: "https://github.com/smithfamily42/react-portfolio"
    },
    {
      name: 'reactPortfolio',
      description: 'React Portfolio',
      link: "https://smithfamily42.github.io/react-portfolio",
      repo: "https://github.com/smithfamily42/react-portfolio"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
