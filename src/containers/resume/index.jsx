import React from "react";
import './styles.css'; // Import the CSS file

const ResumePage = () => {
  return (
    <div className="resume-container">
      <iframe
        src="https://drive.google.com/file/d/1a5l9gJT8txx291KFtd7Lsc8qEYhCbIPw/preview"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Resume PDF"
      />

    </div>
  );
};

export default ResumePage;
