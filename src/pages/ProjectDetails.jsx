import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import projects from "../data/projects";
import projectMedia from "../data/projectMedia";



function ProjectDetails() {

    const [selectedImage, setSelectedImage] = useState(null);
const [selectedImageIndex, setSelectedImageIndex] = useState(0);


  const { projectId } = useParams();

  const project = projects[projectId];
  const media = projectMedia[projectId] || {};
const screenshots = media.screenshots || [];
const demoVideo = media.demoVideo;

  const goToPreviousImage = () => {
  if (!screenshots.length) return;

  const newIndex =
    selectedImageIndex === 0
      ? screenshots.length - 1
      : selectedImageIndex - 1;

  setSelectedImageIndex(newIndex);
  setSelectedImage(screenshots[newIndex]);
};

const goToNextImage = () => {
  if (!screenshots.length) return;

  const newIndex =
    selectedImageIndex === screenshots.length - 1
      ? 0
      : selectedImageIndex + 1;

  setSelectedImageIndex(newIndex);
  setSelectedImage(screenshots[newIndex]);
};


  // If project doesn't exist
  if (!project) {
    return (
      <main className="project-details-page">

        <section className="project-not-found">
          <div className="section-container">

            <h1>Project Not Found</h1>

            <p>
              The project you are looking for does not exist.
            </p>

            <Link
              to="/work/software"
              className="btn primary-btn"
            >
              ← Back to Projects
            </Link>

          </div>
        </section>

      </main>
    );
  }


  return (
    <main className="project-details-page">


      {/* =========================
          Project Hero
      ========================= */}
      <section className="project-detail-hero">

        <div className="section-container">

          <p className="section-subtitle">
            {project.category}
          </p>

          <h1>{project.title}</h1>

          <p className="project-detail-type">
            {project.type}
          </p>

          <p className="project-detail-description">
            {project.description}
          </p>

        </div>

      </section>


      {/* =========================
          Cover Image
      ========================= */}
      <section className="project-cover-section">

        <div className="section-container">

          {project.cover ? (
            <div className="project-detail-cover">

              <img
                src={project.cover}
                alt={`${project.title} project preview`}
              />

            </div>
          ) : (
            <div className="project-video-placeholder">

              <span>
                Project Preview
              </span>

            </div>
          )}

        </div>

      </section>


      {/* =========================
          Project Information
      ========================= */}
      <section className="section project-information">

        <div className="section-container">

          <div className="project-info-grid">


            {/* Main Content */}
            <div className="project-main-content">

              {/* Overview */}
              <section className="project-detail-section">

                <p className="section-subtitle">
                  About the project
                </p>

                <h2>Overview</h2>

                <p>
                  {project.overview}
                </p>

              </section>


              {/* Features */}
              <section className="project-detail-section">

                <p className="section-subtitle">
                  What it includes
                </p>

                <h2>Key Features</h2>

                <div className="feature-list">

                  {project.features.map((feature, index) => (
                    <div
                      className="feature-item"
                      key={index}
                    >
                      <span>✓</span>
                      <p>{feature}</p>
                    </div>
                  ))}

                </div>

              </section>


              <section className="project-detail-section">

  <p className="section-subtitle">
    Visual showcase
  </p>

  <h2>Screenshots & Videos</h2>

  {screenshots.length > 0 && (
    <div className="project-screenshot-grid">

      {screenshots.map((screenshot, index) => (
        <div
          className="project-screenshot-card"
          key={index}
        >

          <div
  className="project-screenshot-image"
onClick={() => {
  setSelectedImage(screenshot);
  setSelectedImageIndex(index);
}}
>
  <img
    src={screenshot.image}
    alt={screenshot.title}
  />
</div>

          <p>{screenshot.title}</p>

        </div>
      ))}

    </div>
  )}

  {demoVideo && (
  <div className="project-demo-video-section">

    <h3>Project Demo</h3>

    <video
      className="project-demo-video"
      controls
      preload="metadata"
    >
      <source
        src={demoVideo}
        type="video/mp4"
      />

      Your browser does not support the video tag.
    </video>

  </div>
)}

</section>
{selectedImage && (
  <div
    className="image-lightbox"
    onClick={() => setSelectedImage(null)}
  >

    <button
      className="image-lightbox-close"
      onClick={() => setSelectedImage(null)}
      aria-label="Close image"
    >
      ×
    </button>


    <button
      className="image-lightbox-arrow image-lightbox-prev"
      onClick={(e) => {
        e.stopPropagation();
        goToPreviousImage();
      }}
      aria-label="Previous image"
    >
      ←
    </button>


    <div
      className="image-lightbox-content"
      onClick={(e) => e.stopPropagation()}
    >

      <img
        src={selectedImage.image}
        alt={selectedImage.title}
      />

      <p>{selectedImage.title}</p>

      <span className="image-lightbox-counter">
        {selectedImageIndex + 1} / {screenshots.length}
      </span>

    </div>


    <button
      className="image-lightbox-arrow image-lightbox-next"
      onClick={(e) => {
        e.stopPropagation();
        goToNextImage();
      }}
      aria-label="Next image"
    >
      →
    </button>

  </div>
)}


              {/* Case Study */}
              <section className="project-detail-section">

                <p className="section-subtitle">
                  Design & development
                </p>

                <h2>Case Study</h2>

                <p>
                  This section will contain the detailed case study
                  for the project, including the problem, planning,
                  design decisions, development process, challenges,
                  solutions and final outcome.
                </p>

              </section>

            </div>


            {/* Sidebar */}
            <aside className="project-sidebar">

              <div className="project-sidebar-card">

                <h3>Project Information</h3>

                <div className="sidebar-item">

                  <span>Category</span>

                  <strong>
                    {project.category}
                  </strong>

                </div>


                <div className="sidebar-item">

                  <span>Role</span>

                  <strong>
                    {project.role}
                  </strong>

                </div>


                <div className="sidebar-item">

                  <span>Technologies</span>

                  <div className="sidebar-tech">

                    {project.technologies.map(
                      (technology, index) => (
                        <span key={index}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>


                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary-btn project-demo-btn"
                  >
                    View Live Project →
                  </a>
                )}

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =========================
          Navigation
      ========================= */}
      <section className="project-navigation">

        <div className="section-container">

          <Link
            to="/work/software"
            className="back-link"
          >
            ← Back to Software & Web Projects
          </Link>

        </div>

      </section>

    </main>
  );
}

export default ProjectDetails;
