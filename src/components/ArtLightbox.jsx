import { useEffect } from "react";

function ArtLightbox({
  artworks,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  if (!artworks || selectedIndex === null) {
    return null;
  }

  const artwork = artworks[selectedIndex];

  if (!artwork) {
    return null;
  }

  return (
    <div className="art-lightbox" onClick={onClose}>

      {/* Close */}
      <button
        className="art-lightbox-close"
        onClick={onClose}
        aria-label="Close artwork"
      >
        ×
      </button>

      {/* Previous */}
      <button
        className="art-lightbox-arrow art-lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous artwork"
      >
        ←
      </button>

      {/* Artwork */}
      <div
        className="art-lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
        />

        <h2>{artwork.title}</h2>
      </div>

      {/* Next */}
      <button
        className="art-lightbox-arrow art-lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next artwork"
      >
        →
      </button>

    </div>
  );
}

export default ArtLightbox;