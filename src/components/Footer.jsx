import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">hady</h1>
            <span className="footer__subtitle">Web Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <NavLink to="/about" style={{ color: "#fff" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/pojects" style={{ color: "#fff" }}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{ color: "#fff" }}>
                ContactMe
              </NavLink>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/hadighazi"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/hadigghazi/"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/hadigghazi"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Hadi Ghazi | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
