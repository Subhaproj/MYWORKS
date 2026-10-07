
import { Link } from "react-router-dom";

function Work() {
  return (
    <main className="work-page">

      {/* =========================
          Work Hero
      ========================= */}
      <section className="work-hero">
        <div className="section-container">

          <p className="section-subtitle">
            Explore my work
          </p>

          <h1>My Work</h1>

          <p>
            A collection of my software projects, web applications,
            UI/UX designs and creative work.
          </p>

        </div>
      </section>


      {/* =========================
          Categories
      ========================= */}
      <section className="section categories-section">
        <div className="section-container">

          <div className="categories-grid">

            {/* Software & Web */}
            <Link
              to="/work/software"
              className="category-card software-category"
            >
              <div className="category-content">

                <span className="category-number">
                  01
                </span>

                <p className="category-label">
                  DEVELOPMENT
                </p>

                <h2>
                  Software & Web
                  <br />
                  Projects
                </h2>

                <p>
                  Explore web applications, software projects,
                  dashboards and development work.
                </p>

                <span className="category-link">
                  Explore Projects →
                </span>

              </div>
            </Link>


            {/* UI/UX */}
            <Link
              to="/work/ui-ux"
              className="category-card ui-category"
            >
              <div className="category-content">

                <span className="category-number">
                  02
                </span>

                <p className="category-label">
                  DESIGN
                </p>

                <h2>
                  UI/UX
                  <br />
                  Designs
                </h2>

                <p>
                  Explore interface designs, prototypes,
                  design concepts and UX case studies.
                </p>

                <span className="category-link">
                  Explore Designs →
                </span>

              </div>
            </Link>


            {/* Art */}
            <Link
              to="/work/art"
              className="category-card art-category"
            >
              <div className="category-content">

                <span className="category-number">
                  03
                </span>

                <p className="category-label">
                  CREATIVE
                </p>

                <h2>
                  Art &
                  <br />
                  Illustration
                </h2>

                <p>
                  Explore my pencil artwork, illustrations and
                  other creative work.
                </p>

                <span className="category-link">
                  Explore Art →
                </span>

              </div>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Work;
