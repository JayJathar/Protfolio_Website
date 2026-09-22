import React, { useRef, useEffect, useState } from "react";
import "./Work.css";

import musicHubImage from "../../assets/Music Hub.jpg";
import bookwormImage from "../../assets/Book worm.jpg";
import JTbillingSystem from "../../assets/JT Billing System.png";
import devOrbitImage from "../../assets/devorbit logo.jpg";

const PROJECTS = [
  {
    title: "DevOrbit",
    type: "MERN Stack",
    badge: "Currently Building",
    img: devOrbitImage,
    alt: "DevOrbit Developer Social Platform",
    desc:
      "Developer-focused social platform built with the MERN stack, featuring developer profiles, project sharing, code posts, authentication, social interactions, and REST API integration.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
  },
  {
    title: "Music Hub",
    type: "Frontend + API",
    badge: null,
    img: musicHubImage,
    alt: "Music Hub Streaming Platform",
    desc:
      "Spotify-inspired music streaming platform built with React. Features real-time audio playback, playlist management, search, and a fully responsive player UI using Web Audio API.",
    tags: ["React.js", "JavaScript", "CSS", "Audio API"],
  },
  {
    title: "BookWorm",
    type: "Frontend + Firebase",
    badge: "Firebase",
    img: bookwormImage,
    alt: "BookWorm Library Management",
    desc:
      "Library management app with dual roles — admins manage the catalog while users save favourites. Firebase handles authentication and real-time database integration.",
    tags: ["React.js", "Firebase", "Auth", "JavaScript", "CSS"],
  },
  {
    title: "JT Billing System",
    type: "Frontend",
    badge: null,
    img: JTbillingSystem,
    alt: "Billing System",
    desc:
      "React billing app with product inventory, sales dashboard, PDF invoice generation, and local-storage persistence for offline support.",
    tags: ["React.js", "Material-UI", "JavaScript", "LocalStorage"],
  },
];

const FILTERS = [
  "All",
  "MERN Stack",
  "Frontend",
  "Frontend + Firebase",
  "Frontend + API",
];

function ProjectCard({ project, delay, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.12 },
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`wk-card ${inView ? "wk-card-in" : ""} ${
        index === 0 ? "wk-card-featured" : ""
      } ${project.title === "DevOrbit" ? "wk-card-devorbit" : ""}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      {project.badge && <div className="wk-card-badge">{project.badge}</div>}

      <div className="wk-card-img-wrap">
        <img src={project.img} alt={project.alt} className="wk-card-img" />

        <span className="wk-card-num">
          {String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="wk-card-body">
        <div className="wk-card-top">
          <h3 className="wk-card-title">{project.title}</h3>

          <span className="wk-card-type">{project.type}</span>
        </div>

        <p className="wk-card-desc">{project.desc}</p>

        <div className="wk-card-tags">
          {project.tags.map((t, i) => (
            <span className="wk-card-tag" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <div className="wk-root">
      <div className="wk-grid-bg" />

      <div className="wk-glow wk-g1" />
      <div className="wk-glow wk-g2" />
      <div className="wk-glow wk-g3" />

      <div className="wk-header">
        <div className="wk-tag">
          <span className="wk-tag-dot" />
          My Work
        </div>

        <h2 className="wk-title">
          <span className="wk-title-muted">Things I've</span>
          <br />
          actually <span className="wk-title-accent">shipped.</span>
        </h2>

        <p className="wk-subtitle">
          Frontend developer building React applications with MERN, Firebase,
          and API integration. Focused on clean UI and real-world functionality.
        </p>
      </div>

      {/* Filters */}
      <div className="wk-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`wk-filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}

        <span className="wk-filter-count">{filtered.length} projects</span>
      </div>

      {/* Projects */}
      <div className="wk-grid">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={i * 0.1}
            index={i}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="wk-stats">
        <div className="wk-stat">
          <span className="wk-stat-num">4</span>
          <span className="wk-stat-label">Projects Built</span>
        </div>

        <div className="wk-stat-divider" />

        <div className="wk-stat">
          <span className="wk-stat-num">4+</span>
          <span className="wk-stat-label">Tech Stacks</span>
        </div>
      </div>

      <div className="wk-divider">
        <span />
        <span className="wk-div-dot" />
        <span />
      </div>
    </div>
  );
}
