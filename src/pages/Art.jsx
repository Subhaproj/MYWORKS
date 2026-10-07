import { Link } from "react-router-dom";

function Art() {
  return (
    <main className="art-page">

      {/* Art Hero */}
      <section className="art-hero">
        <div className="section-container">
          <p className="section-subtitle">Creative Work</p>
          <h1>Art & Illustration</h1>
          <p>
            Explore my artwork through different styles,
            mediums and creative expressions.
          </p>
        </div>
      </section>

      {/* Art Categories */}
      <section className="section art-categories-section">
        <div className="section-container">

          <div className="art-categories-grid">

            {/* Crayons & Pencils */}
            <Link
              to="/work/art/crayons-pencils"
              className="art-category-card crayons-card"
            >
              <div className="art-category-image">
                <div className="art-category-placeholder">
                  <span>Crayons & Pencils</span>
                </div>
              </div>

              <div className="art-category-content">
                <p className="project-type">ART CATEGORY</p>
                <h2>Crayons & Pencils</h2>
                <p>
                  Explore colorful drawings, pencil artwork and
                  creative illustrations made using traditional mediums.
                </p>
                <span className="art-category-link">
                  Explore Artwork →
                </span>
              </div>
            </Link>

            {/* Sketches & Portraits */}
            <Link
              to="/work/art/sketches-portraits"
              className="art-category-card sketches-card"
            >
              <div className="art-category-image">
                <div className="art-category-placeholder">
                  <span>Sketches & Portraits</span>
                </div>
              </div>

              <div className="art-category-content">
                <p className="project-type">ART CATEGORY</p>
                <h2>Sketches & Portraits</h2>
                <p>
                  A collection of expressive sketches and portrait
                  artwork created with attention to emotions and details.
                </p>
                <span className="art-category-link">
                  Explore Artwork →
                </span>
              </div>
            </Link>

            {/* Paintings */}
            <Link
              to="/work/art/paintings"
              className="art-category-card paintings-card"
            >
              <div className="art-category-image">
                <div className="art-category-placeholder">
                  <span>Paintings</span>
                </div>
              </div>

              <div className="art-category-content">
                <p className="project-type">ART CATEGORY</p>
                <h2>Paintings</h2>
                <p>
                  Explore paintings created using different colors,
                  techniques and artistic styles.
                </p>
                <span className="art-category-link">
                  Explore Artwork →
                </span>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* Instagram */}
      <section className="art-social-section">
        <div className="section-container">
          <h2>More of my artwork</h2>

          <p>
            Follow my art journey and explore more artwork.
          </p>

          <a
            href="https://www.instagram.com/art.ofemotion/"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn"
          >
            Visit @art.ofemotion →
          </a>
        </div>
      </section>

      {/* Back */}
      <section className="category-back-section">
        <div className="section-container">
          <Link to="/work" className="back-link">
            ← Back to All Work
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Art;