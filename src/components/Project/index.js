import React from 'react';



function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="col">
      <div className="card justify-content-center shadow mb-5 ">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + `/projects/${name}.jpg`} alt={name} className="pb-4 mx-auto d-block img-fluid rounded" width="66%" />
        </a>
        <div className="d-flex justify-content-between align-items-center">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <span><i className="fab fa-github fs-1"></i></span>
          </a>
          <p className="d-inline mx-auto display-8 fw-bold">{description}</p>
        </div>
      </div>
    </div>

  );
}

export default Project;
