import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"; // Import CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  const goToWork = () => {
    navigate('/work');
  };

  const viewResume = () => {
    navigate('/resume');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="home-content-wrapper">
          <h1 className="home-title">Welcome!</h1>
          <p className="home-content">
            Hi, I'm Jay Jathar, a passionate developer specializing in building modern web applications. Browse through my portfolio to see my projects and get a glimpse of my skills and experience.
          </p>
          <div className="button-group">
            <button className="cta-button" onClick={goToWork}>Discover My Work</button><br />
            <button className="download-button" onClick={viewResume}>View Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
