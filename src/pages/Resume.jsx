// src/pages/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>📄 My Resume</h1>
      <p>You can view or download my resume using the button below.</p>

      {/* Download button */}
      <a href="/jaikishan_resume.pdf" download className="resume-download-btn">
        ⬇️ Download Resume
      </a>

      {/* PDF Preview */}
      <iframe
        src="/jaikishan_resume.pdf"
        title="jaikishan_resume"
        className="resume-preview"
        frameBorder="0"
      ></iframe>

      {/* Optional: link for mobile users */}
      <p style={{ marginTop: '20px' }}>
        Having trouble viewing?{' '}
        <a
          href="/jaikishan_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--primary)', textDecoration: 'underline' }}
        >
          Open in new tab
        </a>
      </p>
    </div>
  );
};

export default Resume;
