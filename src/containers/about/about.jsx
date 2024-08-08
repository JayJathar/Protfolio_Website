import React, { useState } from "react";
import "./styles.css"; // Import CSS file for styling

const About = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleBoxClick = (e) => {
    // Prevents click events inside the text from propagating to the container
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title" >About Me</h2>
        <div className="about-text">
          {isVisible && (
            <>
              <p style={{ textAlign: 'justify' }} className={`static-text ${isVisible ? "slide-in" : ""}`}>
                Hello ! I’m Jay soft-hearted and stoic React.js developer who values simplicity and quietude.
                I approach life and work with a calm demeanor and a steady, composed mindset.
                My development journey is driven by a passion for creating user-friendly, intuitive solutions while maintaining a level-headed and pragmatic approach.
                I believe in focusing on what I can control and staying resilient in the face of challenges.I may be reserved, but I bring a unique blend of empathy, dedication, and stoic calmness to my projects.
                If you're looking for someone who approaches problems with composure and thoughtful deliberation, let’s connect and explore how we can achieve great things together.
              </p>
            </>
          )}
        </div><br />
        <h2 className="about-title" >Work Experience</h2>
        <div className="about-text">
          {isVisible && (
            <p className={`static-text ${isVisible ? "slide-in" : ""}`}>
              <center><strong>Intern as a React Developer at JYOTI TECHNOSOFT LLP</strong>[May 2024 – July 2024]</center>
              <br />
              <ul>
                <li>Developed a Comprehensive Billing System: Built a full-featured billing system using React.js, including components for invoice management, customer profiles, and reporting.</li>
                <li>Implemented Authentication Features: Designed and integrated user authentication with secure login and logout functionalities, enhancing user access control and security.</li>
                <li>UI/UX Design: Created responsive and user-friendly interfaces, ensuring seamless interaction and navigation within the application.</li>
                <li>Data Management: Utilized React's Context API for dynamic data fetching and state management, ensuring real-time updates and accuracy.</li>
                <li>Error Handling & Debugging: Implemented robust error handling to address data fetching issues and improve application stability.</li>
                <li>Collaboration & Documentation: Worked collaboratively with senior developers, contributing to project planning and documentation to streamline development processes.</li>

              </ul>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
