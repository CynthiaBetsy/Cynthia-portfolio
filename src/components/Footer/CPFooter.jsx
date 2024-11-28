import React from "react";
import "./CPFooter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Back to top</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-text">
          Built with love by me. &copy; {new Date().getFullYear()} Cynthia
          Emeka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
