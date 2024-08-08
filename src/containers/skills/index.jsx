import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAndroid, FaDatabase } from "react-icons/fa";
import "./styles.css";

const SkillSection = () => {
  return (
    <div className="skill-container">
      <h2 className="skill-title">My Skills</h2>
      <div className="skill-grid">
        <div className="skill-card">
          <div className="skill-icon icon-html"><FaHtml5 /></div>
          <div className="skill-card-title">HTML</div>
          
        </div>
        <div className="skill-card">
          <div className="skill-icon icon-css"><FaCss3Alt /></div>
          <div className="skill-card-title">CSS</div>
          
        </div>
        <div className="skill-card">
          <div className="skill-icon icon-js"><FaJsSquare /></div>
          <div className="skill-card-title">JavaScript</div>
          
        </div>
        <div className="skill-card">
          <div className="skill-icon icon-react"><FaReact /></div>
          <div className="skill-card-title">React.js</div>
          
        </div>
        <div className="skill-card">
          <div className="skill-icon icon-android"><FaAndroid /></div>
          <div className="skill-card-title">Android Development</div>
          
        </div>
        <div className="skill-card">
          <div className="skill-icon icon-mongodb"><FaDatabase /></div>
          <div className="skill-card-title">MongoDB</div>
          
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
