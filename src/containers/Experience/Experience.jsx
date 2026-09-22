import React, { useRef, useEffect, useState } from "react";
import "./Experience.css";

/* ── Experience Data ── */
const EXPERIENCES = [
  {
    role: "React Developer Intern",
    company: "CorefinExperts Global Technologies Pvt. Ltd., Pune",
    type: "Internship",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Developed an admin panel using React.js and TypeScript.",
      "Implemented CRUD operations using React Query for efficient data handling.",
      "Built features including questionnaire management, booking system, search and filters.",
      "Integrated REST APIs and handled dynamic data updates.",
      "Improved UI responsiveness and component reusability.",
    ],
    tech: ["React.js", "TypeScript", "React Query", "REST APIs", "MUI"],
  },

  {
    role: "React Developer",
    company: "Sassy Infotech Pvt. Ltd., Surat",
    type: "Full-time",
    period: "May 2026 – Present",
    bullets: [
      "Working on responsive web interfaces and frontend development.",
      "Currently contributing to Shopify-based web development and customization.",
      "Worked with Shopify themes, Liquid, HTML, CSS, and responsive layouts.",
      "Implemented UI improvements and customized website components based on project requirements.",
      "Collaborating with the team to deliver responsive and user-friendly web experiences.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Shopify",
      "Liquid",
      "Responsive Design",
    ],
  },

  {
    role: "React Developer Intern",
    company: "Jyoti Technosoft LLP, Adajan, Surat",
    type: "Internship",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Developed a responsive billing system using React.js and Material-UI.",
      "Implemented authentication and user profile management.",
      "Built product inventory management for efficient stock tracking.",
      "Created reusable React components and improved UI consistency.",
    ],
    tech: [
      "React.js",
      "Material-UI",
      "JavaScript",
      "Authentication",
      "State Management",
    ],
  },

  {
    role: "Frontend Developer",
    company: "Open to Freelance Opportunities",
    type: "Freelance",
    period: "Available Now",
    bullets: [
      "Available for freelance and contract-based frontend development projects.",
      "Can build responsive websites and frontend interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
      "Available for landing pages, UI development, responsive fixes, and REST API integration.",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
];

/* ── Stats ── */
const STATS = [
  { num: "1+", label: "Year Experience" },
  { num: "4+", label: "Projects Built" },
  { num: "2", label: "Internships Completed" },
];

/* ── Experience Card ── */
function ExCard({ data, side, delay }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, []);

  return (
    <div className={`ex-item ex-${side}`} ref={ref}>
      {/* Card */}
      <div
        className={`ex-card ${inView ? "ex-card-in" : ""}`}
        style={{
          transitionDelay: `${delay}s`,
        }}
      >
        <div className="ex-card-head">
          <span className="ex-role">{data.role}</span>

          <span className="ex-period">{data.period}</span>
        </div>

        <div className="ex-company-row">
          <span className="ex-company">{data.company}</span>

          <span className="ex-type">{data.type}</span>
        </div>

        <ul className="ex-bullets">
          {data.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="ex-tags">
          {data.tech.map((t, i) => (
            <span className="ex-tech" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Centre node */}
      <div className="ex-node-col">
        <div className="ex-node" />
      </div>

      {/* Empty spacer */}
      <div className="ex-spacer" />
    </div>
  );
}

/* ── Main Section ── */
export default function Experience() {
  const rootRef = useRef(null);
  const statsRef = useRef(null);

  const [headerIn, setHeaderIn] = useState(false);
  const [statsIn, setStatsIn] = useState(false);

  useEffect(() => {
    const headerObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderIn(true);
        }
      },
      { threshold: 0.1 },
    );

    const statsObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsIn(true);
        }
      },
      { threshold: 0.3 },
    );

    if (rootRef.current) {
      headerObs.observe(rootRef.current);
    }

    if (statsRef.current) {
      statsObs.observe(statsRef.current);
    }

    return () => {
      headerObs.disconnect();
      statsObs.disconnect();
    };
  }, []);

  return (
    <section className="ex-root" ref={rootRef}>
      {/* Backgrounds */}
      <div className="ex-grid-bg" />

      <div className="ex-glow ex-g1" />
      <div className="ex-glow ex-g2" />
      <div className="ex-glow ex-g3" />

      {/* Header */}
      <div className={`ex-header ${headerIn ? "ex-header-in" : ""}`}>
        <div className="ex-tag">
          <span className="ex-tdot" />
          My Journey
        </div>

        <h2 className="ex-title">
          <span className="ex-muted">Where I've</span> been
          <br />& what I've <span className="ex-accent">built.</span>
        </h2>

        <p className="ex-desc">
          A timeline of roles, projects, and experiences that shaped how I think
          about building for the web.
        </p>
      </div>

      {/* Timeline */}
      <div className="ex-timeline">
        {EXPERIENCES.map((exp, i) => (
          <ExCard
            key={i}
            data={exp}
            side={i % 2 === 0 ? "left" : "right"}
            delay={0.05}
          />
        ))}
      </div>

      {/* Stats Row */}
      <div
        className={`ex-stats ${statsIn ? "ex-stats-in" : ""}`}
        ref={statsRef}
      >
        {STATS.map((s, i) => (
          <div className="ex-stat" key={i}>
            <span className="ex-stat-num">{s.num}</span>

            <span className="ex-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="ex-divider">
        <span />
        <span className="ex-div-dot" />
        <span />
      </div>
    </section>
  );
}
