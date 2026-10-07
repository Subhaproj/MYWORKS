import { Link } from "react-router-dom";

import wonderparkCover from "../assets/covers/ui/Wonderpark-cover.jpg";

function UIUXDesigns() {
  return (
    <main className="category-page">

      {/* =========================
          Page Header
      ========================= */}
      <section className="category-hero">
        <div className="section-container">

          <p className="section-subtitle">
            Design
          </p>

          <h1>UI/UX Designs</h1>

          <p>
            A collection of interface designs, prototypes,
            design concepts and user experience projects.
          </p>

        </div>
      </section>


      {/* =========================
          Design Projects
      ========================= */}
      <section className="section category-projects-section">

        <div className="section-container">

          <div className="category-projects-grid">


            {/* =========================
                WonderPark
            ========================= */}
            <article className="category-project-card">

              <div className="category-project-image">

                <img
                  src={wonderparkCover}
                  alt="WonderPark UI/UX design"
                />

                <span>Figma</span>

              </div>


              <div className="category-project-content">

                <p className="project-type">
                  UI/UX Design
                </p>

                <h2>WonderPark</h2>

                <p>
                  A fictional amusement park website concept
                  designed in Figma with attraction discovery,
                  ticket booking, facilities, maps and detailed
                  attraction experiences.
                </p>


                <div className="project-tech">

                  <span>Figma</span>
                  <span>UI Design</span>
                  <span>Prototyping</span>

                </div>


                <Link
                  to="/work/project/wonderpark"
                  className="project-link"
                >
                  View Case Study →
                </Link>

              </div>

            </article>


            {/* =========================
                More Designs
            ========================= */}
            <article className="category-project-card coming-soon-card">

              <div className="coming-soon-content">

                <span className="coming-soon-number">
                  +
                </span>

                <h2>More Designs</h2>

                <p>
                  More UI/UX concepts and case studies
                  will be added here.
                </p>

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

export default UIUXDesigns;
