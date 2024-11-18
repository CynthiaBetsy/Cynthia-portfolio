import React from "react";
import "./About.css";
import aboutImage from "../../Assets/portfolio_7.png";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-title">
          <h1>{`<About Me />`}</h1>
        </div>

        <div className="about_body">
          <img src={aboutImage} alt="" />
          <div className="about-right">
            <p className="paragraph">
              Welcome to my portfolio! I'm a dedicated front-end developer
              focused on creating engaging, user-friendly web experiences. With
              skills in HTML, CSS, React.js and JavaScript, I aim to merge
              functionality with aesthetics in every project. I love tackling
              challenges and learning new technologies. Explore my work to see
              my commitment to quality and innovation, and let's collaborate to
              bring your ideas to life!
            </p>

            <div className="skills">
              <div className="skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "75%" }} />
              </div>
              <div className="skill">
                <p>JAVASCRIPT</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="skill">
                <p>REACT.JS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="skill">
                <p>BOOTSTRAP</p>
                <hr style={{ width: "55%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
