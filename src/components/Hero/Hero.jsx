import React from "react";
import "./Hero.css";
import displayPicture from "../../Assets/profile.png";
import linkedInIcon from "../../Assets/linkedIn.png";
import githubIcon from "../../Assets/github icon.png";
import twitterIcon from "../../Assets/X icon.png";
import resume from "../../Assets/Cynthia Emeka. (resume).pdf";

const Hero = () => {
  return (
    <div className="hero-container">
      <img className="heroImage" src={displayPicture} alt="Cynthia Emeka" />

      <h1 className="intro">
        HELLO!
        <br />
        <strong>I am Cynthia Emeka</strong>
        <br />
      </h1>
      <span className="intro">
        <strong className="strong">A frontend developer</strong> with a passion
        for developing modern React web apps for commercial business
      </span>

      <div className="action-btns">
        <a href="#contact" className="hire-me">
          Hire me
        </a>
        <a href={resume} className="resume" download>
          My resume
        </a>{" "}
      </div>
      <span className="sm-icons">
        <a
          href="https://www.linkedin.com/in/cynthia-emeka-465b32335/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/CynthiaBetsy"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://twitter.com/Cynthiabetsy"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </span>
    </div>
  );
};

export default Hero;
