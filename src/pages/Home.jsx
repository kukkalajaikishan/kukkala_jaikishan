import './Home.css';
import profile from '../assets/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home-container">
      <section className="profile" data-aos="fade-down">
<img src={profile} alt="K Jai Kishan" className="profile-pic" />
        <h1>K Jai Kishan</h1>
        <h2>Full-Stack Developer | UX Designer | Cloud & Game Tech Enthusiast</h2>
        <p>
          🚀 Hi, I'm Jai — a passionate B.Tech CSIT student (2022–2026) specializing in UX Design and Game Development. <br />
          I blend creativity with technology to build modern web applications, interactive games, and intuitive user experiences. <br />
          I'm a certified cloud and AI associate, and an enthusiastic problem solver who loves turning ideas into real, impactful products.
        </p>
        <a
          href="mailto:kishanjaikishan32@gmail.com"
          className="cta-button"
          rel="noopener noreferrer"
        >
          Let's Collaborate
        </a>
      </section>
    </div>
  );
}

export default Home;
