import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/home/home.jsx";
import About from "./containers/about/about";
import Resume from "./containers/resume/resume.jsx";
import Skills from "./containers/skills/Skill.jsx";
import Contact from "./containers/contact/Contact.jsx";
import Work from "./components/Work/Work";
import Navbar from "./components/navBar/navbar.jsx";
import Experience from "./containers/Experience/Experience";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
