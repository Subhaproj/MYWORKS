import { useState } from "react";
import { Link } from "react-router-dom";
import artMedia from "../data/artMedia";
import ArtLightbox from "../components/ArtLightbox";

function CrayonsPencils() {
  const artworks = artMedia["crayons-pencils"] || [];

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

      <section className="art-gallery-hero">
        <div className="section-container">
          <p className="section-subtitle">Art & Illustration</p>

          <h1>Crayons & Pencils</h1>

          <p>
            A collection of colorful drawings, pencil artwork and
            creative illustrations created using traditional art mediums.
          </p>
        </div>
      </section>

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
                  <p>Traditional artwork</p>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

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

export default CrayonsPencils;