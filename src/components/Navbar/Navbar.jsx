import React, { useState, useRef } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
// import Resume from "../Resume/Resume";
import CPProject from "../Project/CPProject";
import Contact from "../Contacts/Contact";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    // resume: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", ref: "home" },
    { name: "About", ref: "about" },
    // { name: "Resume", ref: "resume" },
    { name: "Projects", ref: "projects" },
    { name: "Contact", ref: "contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">{`<Cynthia/>`}</div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                id="nav-btns"
                onClick={() => handleNavClick(item.ref)}
                className={menu === item.ref ? "active" : ""}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className="sections-container">
        <section ref={sectionRefs.home} id="home" className="section">
          <Hero />
        </section>
        <section ref={sectionRefs.about} id="about" className="section">
          <About />
        </section>
        {/* <section ref={sectionRefs.resume} id="resume" className="section">
          <Resume />
        </section> */}
        <section ref={sectionRefs.projects} id="projects" className="section">
          <CPProject />
        </section>
        <section ref={sectionRefs.contact} id="contact" className="section">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Navbar;
