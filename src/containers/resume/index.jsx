import React from "react";
import './styles.css'; // Import the CSS file

const ResumePage = () => {
  return (
    <div className="resume-container">
      <iframe
        src=" https://drive.google.com/file/d/1zT8rCQn3SUSWo5P2Bm8tgGsQRQ92kQar/preview"   
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
