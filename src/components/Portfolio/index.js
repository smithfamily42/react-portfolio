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
      name: 'watchlist',
      description: 'Model View Controller Group Project',
      link: "https://teamwatchlist.herokuapp.com/",
      repo: "https://github.com/smithfamily42/watchlist"
    },
    {
      name: 'travelTunes',
      description: 'Interactive Front-End Group Project',
      link: "https://rotichd.github.io/travel-music/",
      repo: "https://github.com/RotichD/travel-music"
    },
    {
      name: 'uru',
      description: 'Interactive Full-Stack MERN Group Project',
      link: "https://uru.herokuapp.com/",
      repo: "https://github.com/acevezl/uru"
    },
    {
      name: 'firstPortfolio',
      description: 'First Portfolio',
      link: "https://smithfamily42.github.io/first-portfolio/",
      repo: "https://github.com/smithfamily42/first-portfolio"
    },
    {
      name: 'techBlog',
      description: 'Model View Controller Tech Blog',
      link: "https://bradtechblog.herokuapp.com",
      repo: "https://github.com/smithfamily42/mvcTechBlog"
    },
  ]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
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
