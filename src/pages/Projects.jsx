import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="section projects-section">
      <h2 className="section-title">💼 Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Aadhaar Card System</h3>
          <p>
            A secure desktop application built using <strong>Java and Swing</strong> to manage identity information. It supports CRUD operations with data validation and file-based storage for user records.
          </p>
        </div>

        <div className="project-card">
          <h3>Webinar Management Platform</h3>
          <p>
            A full-featured event management system using <strong>Python (Django)</strong> that allows users to register, host, and schedule webinars with authentication and admin control panels.
          </p>
        </div>

        <div className="project-card">
          <h3>Online Blogging Platform</h3>
          <p>
            Developed with the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), this platform supports post creation, comment threads, authentication (JWT), and responsive design.
          </p>
        </div>

        <div className="project-card">
          <h3>3D Endless Runner Game</h3>
          <p>
            A Unity-based 3D game with endless terrain generation, obstacle spawning, and score tracking. Built with <strong>C# in Unity</strong>, featuring particle effects and responsive input controls.
          </p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A dynamic and responsive personal portfolio built using <strong>React.js + AOS</strong> for animations, React Router for navigation, and modular page architecture for scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
