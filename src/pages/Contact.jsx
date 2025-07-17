// src/pages/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <section className="contact-container">
      <h2>📬 Contact</h2>
      <p>
        📧 Email:{' '}
        <a href="mailto:kishanjaikishan32@gmail.com">
          kishanjaikishan32@gmail.com
        </a>
      </p>
      <p>
        🔗 LinkedIn:{' '}
        <a
          href="https://linkedin.com/in/jaikishan"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/jaikishan
        </a>
      </p>
      <p>
        💻 GitHub:{' '}
        <a
          href="https://github.com/kukkalajaikishan"
          target="_blank"
          rel="noreferrer"
        >
          github.com/kukkalajaikishan
        </a>
      </p>
    </section>
  );
}

export default Contact;
