import React from "react";
import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">-</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">-</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">-</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
