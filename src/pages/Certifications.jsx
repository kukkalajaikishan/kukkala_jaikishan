import './Certifications.css';

function Certifications() {
  return (
    <div className="certifications-container">
      <h2>📜 Certifications</h2>
      <ul className="certifications-list">
        <li>
          <strong>Salesforce Certified AI Associate</strong>
          <span>Issued by Salesforce • 2024</span>
        </li>
        <li>
          <strong>AWS Certified Cloud Practitioner</strong>
          <span>Issued by Amazon Web Services • 2024</span>
        </li>
        <li>
          <strong>Unity Certified User – Game Development</strong>
          <span>Issued by Unity Technologies • 2023</span>
        </li>
      </ul>
    </div>
  );
}

export default Certifications;
