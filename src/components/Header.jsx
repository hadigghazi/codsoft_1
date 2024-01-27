import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          hady
        </NavLink>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li>
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav__link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav__link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav__link">
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
