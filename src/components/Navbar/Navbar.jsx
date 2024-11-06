import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="logo">{`<Cynthia/>`}</div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={() => {
              toggleMenu();
              setMenu("home");
            }}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => {
              toggleMenu();
              setMenu("about");
            }}
            className={menu === "about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            onClick={() => {
              toggleMenu();
              setMenu("resume");
            }}
            className={menu === "resume" ? "active" : ""}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => {
              toggleMenu();
              setMenu("projects");
            }}
            className={menu === "projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => {
              toggleMenu();
              setMenu("contact");
            }}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
