import React from "react";
import "./Contact.css";
import emailIcon from "../../Assets/email icon.png";
import locationIcon from "../../Assets/location icon.png";
import phoneIcon from "../../Assets/phone icon.png";
import CPForm from "../Form/NewForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        {/* <div className="contact-title">
          <h1>{`<Contact Us/>`}</h1>
        </div> */}
        <div className="contact-section">
          <div className="contact-left">
            <h2>Get in Touch</h2>
            <p>
              I am currently available to take on new project, so feel free to
              send me a message about any project anytime.{" "}
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={emailIcon} alt=""></img>
                <p>betsycynthia@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={phoneIcon} alt=""></img>
                <p>+2349030828658</p>
              </div>
              <div className="contact-detail">
                <img src={locationIcon} alt=""></img>
                <p>Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <CPForm />
      </div>
    </div>
  );
};

export default Contact;
