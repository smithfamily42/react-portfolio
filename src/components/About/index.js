import React from 'react';
import Profile from "../../assets/images/profilePic.jpg";

function About() {
  return (
    <>
      <section className="px-5 my-5 container">
        <div className="my-2 row">
          <div className="mx-auto my-4 col-lg-4 col-md-4 col-sm-8">
            <img
              src={Profile}
              alt="Brad Smith Profile Pic" className="img-fluid rounded-circle"
            />
          </div>
          <p>I am a blossoming full-stack web developer with experience and a passion for learning and growing.
            I am seeking a full stack web developer role that allows me to showcase my diverse, well-rounded skill set.
            I have a bachelor's degree and I have recently earned the full-stack web development certification from University
            of California - Berkeley’s Coding Bootcamp. I have contributed to and built web presences for government organizations
            and small business clients/employers.</p>
          <p>My commitment to growth and development has positioned me to help employers with my new skills and this helps
            me maintain high levels of motivation and be an impactful contributor. I thrive with front end technologies (HTML, CSS)
            and leading my team with MySQL and modeling in MVC. Furthermore, I am versed in React, MongoDB, and GraphQL.</p>
          <p>You can reach me by email: <a href="mailto:smithfamily42@gmail.com">smithfamily42@gmail.com</a></p>
        </div>
    </section>
    </>
  );
}

export default About;
