import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work-container">
      <h2 className="work-title">My Work</h2>
      <div className="work-content">
        {/* Example project cards */}
        <div className="work-card">
          <img src="https://tse4.mm.bing.net/th?id=OIG3.PeYSbPQfbg8RhNvP_L_V&w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Project Thumbnail" className="work-image" /><hr></hr>
          <div className="work-info">
            <h3 className="work-project-title">Billing System</h3>
            <p className="work-description">
              Developed a React.js billing system using Material-UI, featuring secure authentication, profile management, product inventory, real-time sales dashboard, PDF invoice management, and detailed sales reports with visualizations.
              Technologies used: React.js, MongoDB, JavaScript, CSS.
            </p>
           
          </div>
        </div>
        
        <div className="work-card">
          <img src="https://sheknowsseo.co/wp-content/uploads/2024/04/change-blog-post-url.webp" alt="Project Thumbnail" className="work-image" /><hr></hr>
          <div className="work-info">
            <h3 className="work-project-title">Blog Website</h3>
            <p className="work-description">
              Created a full-featured blog website with functionalities to upload, read, and write blogs. Includes login and logout features, and data storage using MongoDB. Built using React.js for server-side operations.
              Technologies used: React.js, MongoDB, Express, JavaScript, CSS.
            </p>
           
          </div>
        </div>

        <div className="work-card">
          <img src="https://tse2.mm.bing.net/th?id=OIG3.FVbpNsDDod8Z5WG38ET6&w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Project Thumbnail" className="work-image" /><br></br><hr></hr>
          <div className="work-info">
            <h3 className="work-project-title">Portfolio Website</h3>
            <p className="work-description">
              Designed and developed a modern portfolio website to showcase my skills and projects. The website is fully responsive and includes a sidebar navbar, resume section with download option, and a skills section.
              Technologies used: React.js, CSS, JavaScript.
            </p>
            
          </div>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Work;
