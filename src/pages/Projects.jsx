import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Aadhaar Card System',
      description:
        'A secure desktop application built using Java and Swing to manage identity information. It supports CRUD operations with data validation and file-based storage for user records.',
      tech: 'Java, Swing',
    },
    {
      title: 'Webinar Management Platform',
      description:
        'A full-featured event management system using Python (Django) that allows users to register, host, and schedule webinars with authentication and admin control panels.',
      tech: 'Python, Django',
    },
    {
      title: 'Online Blogging Platform',
      description:
        'Developed with the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform supports post creation, comment threads, authentication (JWT), and responsive design.',
      tech: 'MERN Stack',
    },
    {
      title: '3D Endless Runner Game',
      description:
        'A Unity-based 3D game with endless terrain generation, obstacle spawning, and score tracking. Built with C# in Unity, featuring particle effects and responsive input controls.',
      tech: 'Unity, C#',
    },
    {
      title: 'Portfolio Website',
      description:
        'A dynamic and responsive personal portfolio built using React.js + AOS for animations, React Router for navigation, and modular page architecture for scalability.',
      tech: 'React.js, AOS',
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <h2 className="section-title">💼 Projects</h2>
      <div className="project-list">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Tech Used:</strong> {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
