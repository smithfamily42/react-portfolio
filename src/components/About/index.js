import React from 'react';
import Profile from "../../assets/images/profilePic.jpg";

function About() {
  return (
    <>
      <section className="px-5 my-5 container">
        <div className="my-2 row">
          <div className="mx-auto my-2 col-lg-4 col-md-4 col-sm-8">
            <img
              src={Profile}
              alt="Brad Smith Profile Pic" className="img-fluid"
            />
          </div>
          <p>
            I am a blossoming full-stack web developer with experience and a passion for learning and growing. I am seeking a full-stack web role that allows me to showcase my diverse, well-rounded skill set.        </p>
          <p>
            I provide technical oriented solutions for customers and internal clients while promoting satisfaction and achieving organizational goals. I deliver clean, functional software with memorable results that exceed
            expectations.</p>
        </div>
      </section>
    </>
  );
}

export default About;
