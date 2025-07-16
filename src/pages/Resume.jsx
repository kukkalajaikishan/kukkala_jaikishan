// src/pages/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>📄 My Resume</h1>
      <p>You can view or download my resume using the button below.</p>

      <a href="resume .pdf" download className="resume-download-btn">
        ⬇️ Download Resume
      </a>

      <iframe
        src="resume .pdf"
        title="resume .pdf"
        className="resume-preview"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Resume;
