
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // Apply theme
  useEffect(() => {
    document.body.className = darkMode
      ? "dark-theme"
      : "light-theme";
      closeMenu();
  }, [darkMode]);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    closeMenu();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToSection = (section) => {
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", {
        state: {
          scrollTo: section,
        },
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          My <span>Work</span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>

          <Link
            to="/"
            onClick={handleHomeClick}
          >
            Home
          </Link>

          <button onClick={() => goToSection("about")}>
            About
          </button>

          <button onClick={() => goToSection("skills")}>
            Skills
          </button>

          <button onClick={() => goToSection("projects")}>
            Projects
          </button>

          <button onClick={() => goToSection("education")}>
            Education
          </button>

          <button onClick={() => goToSection("contact")}>
            Contact
          </button>

          <Link to="/work" onClick={closeMenu}>
            Work
          </Link>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
