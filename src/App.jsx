import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "./Art.css";
import Home from "./pages/Home";
import Character from "./components/Character.jsx";
import Work from "./pages/Work";
import SoftwareProjects from "./pages/SoftwareProjects";
import UIUXDesigns from "./pages/UIUXDesigns";
import Art from "./pages/Art";
import ProjectDetails from "./pages/ProjectDetails";
import CrayonsPencils from "./pages/CrayonsPencils";
import SketchesPortraits from "./pages/SketchesPortraits";
import Paintings from "./pages/Paintings";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Character />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/software" element={<SoftwareProjects />} />
        <Route path="/work/ui-ux" element={<UIUXDesigns />} />
        <Route path="/work/art" element={<Art />} />
        <Route
          path="/work/project/:projectId"
          element={<ProjectDetails />}
        />
        <Route
  path="/work/art/crayons-pencils"
  element={<CrayonsPencils />}
/>
<Route path="/work/art/sketches-portraits" element={<SketchesPortraits />} />
        <Route
  path="/work/art/paintings"
  element={<Paintings />}
/>
      </Routes>
      

      <Footer />
    </>
  );
}

export default App;