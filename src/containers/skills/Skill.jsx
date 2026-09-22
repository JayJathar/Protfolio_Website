import React, { useRef, useEffect, useState } from "react";
import "./Skill.css";

/* ─── DATA ─────────────────────────────────────── */

const CATEGORIES = [
  {
    icon: "⬡",
    label: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    icon: "◈",
    label: "MERN Stack",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 72 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    icon: "◎",
    label: "Backend & Tools",
    skills: [
      { name: "Git & GitHub", level: 87 },
      { name: "Firebase", level: 78 },
      { name: "Postman", level: 82 },
      { name: "MUI", level: 85 },
    ],
  },
];

/* ─── BADGES ─────────────────────────────────── */

const BADGES = [
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "MERN Stack",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Firebase",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Postman",
  "MUI",
  "VS Code",
];

/* ─── SKILL BAR ─────────────────────────────────── */

function SkillBar({ name, level, visible }) {
  return (
    <div className="sk-bar-row">
      <div className="sk-bar-meta">
        <span className="sk-bar-name">{name}</span>

        <span className="sk-bar-pct">{level}%</span>
      </div>

      <div className="sk-bar-track">
        <div
          className="sk-bar-fill"
          style={{
            width: visible ? `${level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────── */

export default function Skills() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  /* ─── SCROLL REVEAL ─────────────────────────── */

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      obs.observe(sectionRef.current);
    }

    return () => obs.disconnect();
  }, []);

  return (
    <section className="sk-root" ref={sectionRef}>
      {/* ── BACKGROUND ── */}

      <div className="sk-glow-1" />
      <div className="sk-glow-2" />
      <div className="sk-grid-bg" />

      {/* ── HEADER ── */}

      <div className={`sk-header ${visible ? "sk-in" : ""}`}>
        <div className="sk-pill">
          <span className="sk-pill-dot" />
          My Arsenal
        </div>

        <h2 className="sk-title">
          <span className="sk-title-dim">What I</span> bring
          <br />
          to the <span className="sk-title-acc">table.</span>
        </h2>

        <p className="sk-desc">
          A curated stack sharpened across real projects — pixel-perfect UIs to
          production-grade integrations.
        </p>
      </div>

      {/* ── SKILLS ── */}

      <div className="sk-main">
        <div className={`sk-panel ${visible ? "sk-in" : ""}`}>
          {CATEGORIES.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="sk-cat-block"
            >
              <div className="sk-cat-label">
                <span className="sk-cat-icon">
                  {category.icon}
                </span>

                <span className="sk-cat-name">
                  {category.label}
                </span>
              </div>

              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                  visible={visible}
                />
              ))}

              {categoryIndex < CATEGORIES.length - 1 && (
                <div className="sk-cat-divider" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── BADGES ── */}

      <div className={`sk-badges ${visible ? "sk-in" : ""}`}>
        <div className="sk-badges-label">
          Also comfortable with
        </div>

        <div className="sk-badge-list">
          {BADGES.map((badge, index) => (
            <span
              key={index}
              className="sk-badge"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ── DIVIDER ── */}

      <div className="sk-divider">
        <span className="sk-divider-line" />

        <span className="sk-divider-dot" />

        <span className="sk-divider-line" />
      </div>
    </section>
  );
}