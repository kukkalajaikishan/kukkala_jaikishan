import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container" data-aos="fade-up">
      <h2>🛠 Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h4>Languages</h4>
          <p>Java, Python, JavaScript</p>
        </div>
        <div className="skill-card">
          <h4>Frameworks & Libraries</h4>
          <p>React.js, Node.js, Express.js, Spring Boot</p>
        </div>
        <div className="skill-card">
          <h4>Cloud & DevOps</h4>
          <p>AWS, Firebase, Git, GitHub</p>
        </div>
        <div className="skill-card">
          <h4>Design & Game Dev</h4>
          <p>Figma, UX Design, Unity, Blender</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
