import React from "react";
import "./about.css";
import ME from "../../assets/PapaiDigitalPNG.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoFolderOutline } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>My Friends</small>
            </article>
            <article className="about__card">
              <IoFolderOutline className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Passionate and innovative full-stack developer with a flair for
            crafting seamless user experiences. A collaborative team player with
            good communication skills, dedicated to continuous learning and
            delivering solutions that exceed expectations.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
