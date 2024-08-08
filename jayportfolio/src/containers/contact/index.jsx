import React from "react";
import "./styles.css"; // Import CSS file for styling

const ContactForm = () => {
  return (
    <div className="contact-form-fullpage">
      <div className="contact-form-overlay">
        <div className="contact-form-content">
          <h2 className="contact-form-title">Connect with Me</h2>
          <div className="contact-form-grid">
            <a
              href="https://www.linkedin.com/in/jay-jathar-6484641a9/"
              className="contact-card linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
              <div className="contact-card-info">
                <h3 className="contact-card-title">LinkedIn</h3>
                <p className="contact-card-description">Professional Network</p>
              </div>
            </a>
            <a
              href="mailto:jayhjathar@gmail.com"
              className="contact-card email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
              <div className="contact-card-info">
                <h3 className="contact-card-title">Email</h3>
                <p className="contact-card-description">Direct Messaging</p>
              </div>
            </a>
            <a
              href="https://github.com/JayJathar"
              className="contact-card github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              <div className="contact-card-info">
                <h3 className="contact-card-title">GitHub</h3>
                <p className="contact-card-description">View My Projects</p>
              </div>
            </a>
            <a
              href="tel:+91-9510511751"
              className="contact-card phno"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-phone"></i>
              <div className="contact-card-info">
                <h3 className="contact-card-title">Phone Number</h3>
                <p className="contact-card-description">951-051-1751</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
