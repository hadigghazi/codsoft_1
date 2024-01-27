import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="home section"
    >
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/hadighazi"
              target="_blank"
              className="home__social__icon"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/hadigghazi/"
              target="_blank"
              className="home__social__icon"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/hadigghazi"
              target="_blank"
              className="home__social__icon"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <div className="home__img">
            <img
              src="../../WhatsApp Image 2024-01-01 at 19.37.40_e566adb2.jpg"
              alt="home"
            />
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'm hady</h1>
            <h3 className="home__subtitle">Web developer</h3>
            <p className="home__description">
              High level experience in web development, with frontend and
              backend knowledge.
            </p>
            <NavLink to="/contact" className="button button__flex">
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
