import { useState } from "react";
import { Link } from "react-router-dom";
import artMedia from "../data/artMedia";
import ArtLightbox from "../components/ArtLightbox";

function Paintings() {
  const artworks = artMedia["paintings"];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrevious = () => {
  setSelectedIndex((currentIndex) =>
    currentIndex === 0
      ? artworks.length - 1
      : currentIndex - 1
  );
};

const handleNext = () => {
  setSelectedIndex((currentIndex) =>
    currentIndex === artworks.length - 1
      ? 0
      : currentIndex + 1
  );
};

  return (
    <main className="art-gallery-page">

      {/* Header */}
      <section className="art-gallery-hero">
        <div className="section-container">
          <p className="section-subtitle">Art & Illustration</p>

          <h1>Paintings</h1>

          <p>
            Explore paintings created using different colors,
            techniques and artistic styles.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section art-gallery-section">
        <div className="section-container">

          <div className="art-gallery-grid">
            {artworks.map((art, index) => (
              <article className="art-gallery-item" key={index}>

                <div
  className="art-gallery-image"
  onClick={() => setSelectedIndex(index)}
>
  <img
    src={art.image}
    alt={art.title}
  />
</div>

                <div className="art-gallery-content">
                  <h2>{art.title}</h2>
                </div>

              </article>
            ))}
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
          <Link to="/work/art" className="back-link">
            ← Back to Art
          </Link>
        </div>
      </section>

      {selectedIndex !== null && (
  <ArtLightbox
    artworks={artworks}
    selectedIndex={selectedIndex}
    onClose={() => setSelectedIndex(null)}
    onPrevious={handlePrevious}
    onNext={handleNext}
  />
)}

    </main>
  );
}

export default Paintings;