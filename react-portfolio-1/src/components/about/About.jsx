import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education and Experience</h5>
            </article>
            <small>JavaScript Developer course CodersLab - IT School 01.2022 - 03.2022</small>
            <br></br>
            <small>JavaScript + React Coderslab, Warsaw, Poland 01.2022 - 03.2022</small>
            <br></br>
            <small>Group Workshop - SCRUM Coderslab, Warsaw, Poland 02.2022</small>
            <br></br>
            <br></br>
            <small>
              Junion Frontend Specialist in Pracownia Braci Ebert / Luminity, Warsaw, Poland 02.2022
              - 09.2022
            </small>
            <br></br>
            <small>JS Project for Smart Data Ventures, Warsaw, Poland 04.2022</small>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            I am passionate about creating fully responsive websites/web apps for software
            development purposes based on the clean code standards. Always driven for keeping up to
            date with the new upcoming technology solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
