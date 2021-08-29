import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1goZNdQS_e_JEWpZD3FhfPqiBXCrZSGZn/view?usp=sharing">resume</a>
        </p>
        <h3>Front-end Skills</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Skills</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>Progressive Web Apps</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
