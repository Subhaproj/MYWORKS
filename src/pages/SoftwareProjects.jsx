
import { Link } from "react-router-dom";

import airbnbCover from "../assets/covers/software/airbnbclone-cover.png";
import slambookCover from "../assets/covers/software/slambook-cover.jpg";
import adminDashboardCover from "../assets/covers/software/adminpanelcover.png";
import Navbar from "../components/Navbar";

function SoftwareProjects() {
  return (
    
    <main className="category-page">
        

      {/* =========================
          Page Header
      ========================= */}
      <section className="category-hero">
        <div className="section-container">

          <p className="section-subtitle">
            Development
          </p>

          <h1>Software & Web Projects</h1>

          <p>
            A collection of web applications, software projects,
            dashboards and development work.
          </p>

        </div>
      </section>


      {/* =========================
          Projects
      ========================= */}
      <section className="section category-projects-section">
        <div className="section-container">

          <div className="category-projects-grid">

            {/* =========================
                Airbnb Clone
            ========================= */}
            <article className="category-project-card">

              <div className="category-project-image">

                <img
                  src={airbnbCover}
                  alt="Airbnb Clone project"
                />

                <span>React + Vite</span>

              </div>

              <div className="category-project-content">

                <p className="project-type">
                  Web Development
                </p>

                <h2>Airbnb Clone</h2>

                <p>
                  A responsive accommodation booking web application
                  inspired by Airbnb, featuring search, categories,
                  favorites, wishlists, authentication and booking
                  functionality.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Tailwind CSS</span>
                </div>

                <Link
                  to="/work/project/airbnb-clone"
                  className="project-link"
                >
                  View Case Study →
                </Link>

              </div>

            </article>


            {/* =========================
                Slambook
            ========================= */}
            <article className="category-project-card">

              <div className="category-project-image">

                <img
                  src={slambookCover}
                  alt="Slambook project"
                />

                <span>Web Application</span>

              </div>

              <div className="category-project-content">

                <p className="project-type">
                  Web Development
                </p>

                <h2>Slambook</h2>

                <p>
                  A web application designed around a personalized
                  slambook-style experience with an interactive and
                  user-friendly interface.
                </p>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <Link
                  to="/work/project/slambook"
                  className="project-link"
                >
                  View Case Study →
                </Link>

              </div>

            </article>


            {/* =========================
                Admin Dashboard
            ========================= */}
            <article className="category-project-card">

              <div className="category-project-image">

                <img
                  src={adminDashboardCover}
                  alt="Airbnb Admin Dashboard project"
                />

                <span>React Dashboard</span>

              </div>

              <div className="category-project-content">

                <p className="project-type">
                  Web Development
                </p>

                <h2>Airbnb Admin Dashboard</h2>

                <p>
                  A modern dashboard for managing properties,
                  bookings, guests, analytics and administrative
                  activities.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Recharts</span>
                </div>

                <Link
                  to="/work/project/admin-dashboard"
                  className="project-link"
                >
                  View Case Study →
                </Link>

              </div>

            </article>


            {/* =========================
                Face Recognition
            ========================= */}
            <article className="category-project-card">

              <div className="category-project-image face-recognition-project">

                <span>React + Python</span>

              </div>

              <div className="category-project-content">

                <p className="project-type">
                  AI / Computer Vision
                </p>

                <h2>Face Recognition Web App</h2>

                <p>
                  A web application for face detection and recognition
                  using React and Python with OpenCV, supporting camera,
                  image and face matching functionality.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Python</span>
                  <span>OpenCV</span>
                </div>

                <Link
                  to="/work/project/face-recognition"
                  className="project-link"
                >
                  View Case Study →
                </Link>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =========================
          Back to Work
      ========================= */}
      <section className="category-back-section">
        <div className="section-container">

          <Link
            to="/work"
            className="back-link"
          >
            ← Back to All Work
          </Link>

        </div>
      </section>

    </main>
  );
}

export default SoftwareProjects;
