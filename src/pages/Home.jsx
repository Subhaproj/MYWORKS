import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import airbnbCover from "../assets/covers/software/airbnbclone-cover.png";
import slambookCover from "../assets/covers/software/slambook-cover.jpg";
import adminDashboardCover from "../assets/covers/software/adminpanelcover.png";
import wonderparkCover from "../assets/covers/ui/Wonderpark-cover.jpg";
import profilePhoto from "../assets/profile/profile.png";

import resume from "../assets/resume/Resume.pdf";
function Home() {
      const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;

      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);
  
    return (
    
      

      <main>
        <section id="home" className="hero">

          <div className="hero-content">
            <div className="hero-image">
  <div className="hero-image-wrapper">
    <img
      src={profilePhoto}
      alt="Subhashree"
    />
  </div>
</div>

            <p className="hero-greeting">
              Hello, I'm
            </p>

            <h1>
              Subhashree V
            </h1>

            <h2>
              Aspiring Software Developer
              <span> & </span>
              UI/UX Designer
            </h2>

            <p className="hero-description">
              I create responsive web applications and intuitive user
              experiences by combining my passion for development and design.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View Projects
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>

              <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="btn primary-btn"
>
  View Resume
</a>
            </div>

          </div>

        </section>
        <section id="about" className="about-section">
  <div className="section-container">

    <div className="section-heading">
      <p>Get to know me</p>
      <h2>About Me</h2>
    </div>

    <div className="about-content">

      <div className="about-text">
        <p>
          I'm Subhashree V, an aspiring software developer and UI/UX
          designer with a passion for creating responsive web applications
          and meaningful digital experiences.
        </p>

        <p>
          I have a background in Computer Applications and enjoy working
          with technologies such as Java, Python, JavaScript, HTML, CSS,
          and MySQL. Alongside development, I'm interested in UI/UX design
          and enjoy transforming ideas into clean and user-friendly
          interfaces.
        </p>

        <p>
          I'm continuously learning, building projects, and improving my
          skills through hands-on experience. I'm currently looking for
          opportunities where I can contribute, learn, and grow as a
          software developer or UI/UX designer.
        </p>
      </div>

      <div className="about-info">

        <div className="info-card">
          <span className="info-number">01</span>
          <h3>Development</h3>
          <p>
            Building responsive and functional web applications.
          </p>
        </div>

        <div className="info-card">
          <span className="info-number">02</span>
          <h3>UI/UX Design</h3>
          <p>
            Designing simple and intuitive user experiences.
          </p>
        </div>

        <div className="info-card">
          <span className="info-number">03</span>
          <h3>Continuous Learning</h3>
          <p>
            Exploring new technologies and improving my skills.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
<section id="skills" className="skills-section">
  <div className="section-container">

    <div className="section-heading">
      <p>What I work with</p>
      <h2>Skills</h2>
    </div>

    <div className="skills-grid">

      <div className="skill-category">
        <h3>Programming & Development</h3>

        <div className="skill-list">
          <span>Java</span>
          <span>Python</span>
          <span>JavaScript</span>
        </div>
      </div>


      <div className="skill-category">
        <h3>Web Technologies</h3>

        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>React</span>
          <span>Tailwind CSS</span>
        </div>
      </div>


      <div className="skill-category">
        <h3>Database</h3>

        <div className="skill-list">
          <span>MySQL</span>
          <span>SQLite</span>
        </div>
      </div>


      <div className="skill-category">
        <h3>Tools & Design</h3>

        <div className="skill-list">
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Figma</span>
          <span>UI/UX Design</span>
        </div>
      </div>

    </div>

  </div>
</section>
<section id="projects" className="projects-section">
  <div className="section-container">

    <div className="section-heading">
      <p>What I've built</p>
      <h2>Featured Projects</h2>
    </div>

    <div className="projects-grid">

      {/* Airbnb Clone */}
      <article className="project-card">

        <div className="project-image">
  <img src={airbnbCover} alt="Airbnb Clone project preview" />
          <span>React + Vite</span>
        </div>

        <div className="project-content">

          <p className="project-type">
            Web Development
          </p>

          <h3>Airbnb Clone</h3>

          <p>
            A responsive accommodation booking web application inspired
            by Airbnb, featuring search, categories, favorites, wishlists,
            authentication and booking functionality.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Vite</span>
            <span>Tailwind CSS</span>
          </div>

          <a
            href="https://subhaproj.github.io/airbnb-clone/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Project →
          </a>

        </div>

      </article>


      {/* Face Recognition */}
      <article className="project-card">

        <div className="project-image project-face">
          <span>React + Python</span>
        </div>

        <div className="project-content">

          <p className="project-type">
            AI / Computer Vision
          </p>

          <h3>Face Recognition Web App</h3>

          <p>
            A web application for face detection and recognition using
            React and Python with OpenCV. It supports camera capture,
            image recognition and registered face matching.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Python</span>
            <span>OpenCV</span>
          </div>

          <a
            href="#contact"
            className="project-link"
          >
            View Details →
          </a>

        </div>

      </article>


      {/* Admin Dashboard */}
      <article className="project-card">

        <div className="project-image">
  <img
    src={adminDashboardCover}
    alt="Airbnb Admin Dashboard project preview"
  />

          <span>React Dashboard</span>
        </div>

        <div className="project-content">

          <p className="project-type">
            Web Development
          </p>

          <h3>Airbnb Admin Dashboard</h3>

          <p>
            A modern admin dashboard for managing properties, bookings,
            guests and analytics with responsive layouts and interactive
            data visualizations.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Recharts</span>
          </div>

          <a
            href="#contact"
            className="project-link"
          >
            View Details →
          </a>

        </div>

      </article>


      {/* WonderPark */}
      <article className="project-card">

        <div className="project-image">
  <img
    src={wonderparkCover}
    alt="WonderPark UI/UX design preview"
  />

          <span>UI/UX Design</span>
        </div>

        <div className="project-content">

          <p className="project-type">
            UI/UX Design
          </p>

          <h3>WonderPark</h3>

          <p>
            A fictional amusement park website concept designed in Figma,
            including attractions, ticket booking, facilities, maps and
            attraction detail experiences.
          </p>

          <div className="project-tech">
            <span>Figma</span>
            <span>UI Design</span>
            <span>Prototyping</span>
          </div>

          <a
            href="#designs"
            className="project-link"
          >
            View Design →
          </a>

        </div>

      </article>

    </div>

  </div>
  <div className="view-all-works">
  <Link to="/work" className="btn secondary-btn">
    View All Works →
  </Link>
</div>
</section>

<section id="designs" className="designs-section">
  <div className="section-container">

    <div className="section-heading">
      <p>Design & creativity</p>
      <h2>UI/UX Designs</h2>
    </div>

    <div className="designs-grid">

      {/* WonderPark */}
      <article className="design-card">

        <div className="design-image wonderpark-design">
          <span>Case Study</span>
        </div>

        <div className="design-content">

          <p className="design-category">
            Website Design
          </p>

          <h3>WonderPark</h3>

          <p>
            A fictional amusement park website designed to create an
            engaging and user-friendly experience for discovering
            attractions, booking tickets and exploring park facilities.
          </p>

          <div className="design-tags">
            <span>Figma</span>
            <span>UI Design</span>
            <span>Prototype</span>
          </div>

          <a href="#contact" className="design-link">
            View Case Study →
          </a>

        </div>

      </article>


      {/* More Design Work */}
      <article className="design-card">

        <div className="design-image uiux-design">
          <span>UI/UX</span>
        </div>

        <div className="design-content">

          <p className="design-category">
            Interface Design
          </p>

          <h3>More Design Work</h3>

          <p>
            Exploring clean, modern interfaces with a focus on
            usability, visual hierarchy, responsive layouts and
            meaningful user interactions.
          </p>

          <div className="design-tags">
            <span>Figma</span>
            <span>Wireframes</span>
            <span>Prototyping</span>
          </div>

          <a href="#contact" className="design-link">
            Explore Designs →
          </a>

        </div>

      </article>

    </div>

  </div>
</section>
<section id="education" className="education-section">
  <div className="section-container">

    <div className="section-heading">
      <p>My background</p>
      <h2>Education & Certifications</h2>
    </div>

    <div className="education-grid">

      {/* Education */}
      <div className="education-column">

        <h3 className="subsection-title">
          Education
        </h3>

        <div className="timeline">

          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="timeline-content">
              <span className="timeline-year">
                2020 – 2023
              </span>

              <h3>
                Bachelor of Computer Applications
              </h3>

              <p>
                Goodwill Christian College for Women
              </p>

              <span className="timeline-detail">
                Bangalore North University · 79.85%
              </span>
            </div>
          </div>


          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="timeline-content">
              <span className="timeline-year">
                2020
              </span>

              <h3>
                2nd PUC
              </h3>

              <p>
                St. Charles Women’s PU College
              </p>

              <span className="timeline-detail">
                Bangalore Pre-University Board · 69%
              </span>
            </div>
          </div>


          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="timeline-content">
              <span className="timeline-year">
                2018
              </span>

              <h3>
                SSLC
              </h3>

              <p>
                Karnataka State Board
              </p>

              <span className="timeline-detail">
                79%
              </span>
            </div>
          </div>

        </div>

      </div>


      {/* Certifications */}
      <div className="certification-column">

        <h3 className="subsection-title">
          Certifications & Achievements
        </h3>

        <div className="certification-list">

          <div className="certification-card">
            <span className="certification-number">
              01
            </span>

            <div>
              <h3>
                PHP & MySQL Web Development
              </h3>

              <p>
                Additional certification focused on web development
                using PHP and MySQL.
              </p>
            </div>
          </div>


          <div className="certification-card">
            <span className="certification-number">
              02
            </span>

            <div>
              <h3>
                Sony AITRIOS Hackathon 2025
              </h3>

              <p>
                Worked on a computer vision solution for detecting
                fabric defects as part of Team Smart Knitting.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
<section id="contact" className="contact-section">
  <div className="section-container">

    <div className="section-heading">
      <p>Let's connect</p>
      <h2>Get In Touch</h2>
    </div>

    <div className="contact-content">

      <div className="contact-text">
        <h3>
          Have an opportunity or project in mind?
        </h3>

        <p>
          I'm open to opportunities where I can contribute my
          development and UI/UX skills while continuing to learn
          and grow.
        </p>

        <a
          href="mailto:subhashreevaradharaj932@gmail.com"
          className="email-link"
        >
          subhashreevaradharaj932@gmail.com
        </a>
      </div>


      <div className="contact-links">

        <a
          href="https://github.com/Subhaproj"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>GitHub</span>
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/subhashree-varadharaj/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>LinkedIn</span>
          <span>↗</span>
        </a>

        <a
          href="mailto:subhashreevaradharaj932@gmail.com"
          className="contact-link"
        >
          <span>Email</span>
          <span>↗</span>
        </a>

      </div>

    </div>

  </div>
</section>
      </main>
  );
}

export default Home;
