import React from "react";
import "./about.css";
import myPhoto from "../../assets/favicon.ico";

const TRAITS = [
  {
    n: "01",
    title: "Stoic under pressure",
    desc:
      "I don't panic when things break. I slow down, read the error, and fix it methodically.",
  },
  {
    n: "02",
    title: "Empathetic collaborator",
    desc:
      "I listen before I speak. I understand what the team or user actually needs, not just what they said.",
  },
  {
    n: "03",
    title: "Detail-oriented",
    desc:
      "I notice pixel misalignments and off-by-one bugs. The small things add up to the whole.",
  },
  {
    n: "04",
    title: "Quietly driven",
    desc:
      "I don't make noise about what I'll do. I just do it, learn from it, and move forward.",
  },
];

const EDUCATION = [
  {
    type: "Primary",
    title: "Primary Education",
    place: "Ryan International School",
    desc: ["Built strong academic foundation"],
  },
  {
    type: "Secondary",
    title: "10th (SSC)",
    place: "L.H.BOGHRA (SHISHUVIHAR) SCHOOL",
    desc: ["Developed interest in computers and problem-solving"],
  },
  {
    type: "Higher Secondary",
    title: "12th (HSC)",
    place: "L.H.BOGHRA (SHISHUVIHAR) SCHOOL",
    desc: ["Completed higher secondary during COVID-19 period"],
  },
  {
    type: "College",
    title: "Bachelor of Technology (B.Tech) in Information Technology",
    place: "Uka Tarsadia University",
    desc: [
      "Focused on web development and React.js",
      "Built real-world projects and applications",
    ],
  },
];
const OUTSIDE = [
  {
    icon: "📖",
    title: "Reading",
    desc:
      "Philosophy, stoicism, and tech blogs. Always something on the nightstand.",
  },
  {
    icon: "🎮",
    title: "Gaming",
    desc: "Strategy games that require patience and long-term thinking.",
  },
  {
    icon: "🌿",
    title: "Solitude",
    desc:
      "Long walks with no destination. It's where I reset and think clearly.",
  },
];

const TICKER = [
  "Stoic mindset",
  "Clean code",
  "React.js",
  "Calm collaboration",
  "WordPress",
  "Always learning",
  "Firebase",
  "User-first thinking",
];

export default function About() {
  return (
    <div className="ab-root">
      <div className="ab-grid" />
      <div className="ab-g1" />
      <div className="ab-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="ab-particle" />
        ))}
      </div>
      <div className="ab-page">
        <div className="ab-eyebrow">
          <span className="ab-dot" /> The person behind the code
        </div>
        <div className="ab-intro">
          <div className="ab-intro-top">
            <div className="ab-intro-text-block">
              <h1 className="ab-intro-headline">
                Not just a developer.
                <br />
                <span className="ab-dim">Someone who</span>{" "}
                <span className="ab-red">actually cares.</span>
              </h1>
              <p className="ab-intro-text">
                I'm <strong>Jay Jathar</strong> from India. I build web
                interfaces that feel good to use — not just look good in a
                portfolio screenshot. I got into development because I was
                fascinated by how{" "}
                <strong>
                  a few lines of code can change someone's entire experience
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="ab-rule" />
        <div className="ab-story">
          <p className="ab-section-label">My story</p>
          <div className="ab-story-layout">
            <div className="ab-photo-block">
              <img
                src={myPhoto}
                alt="Jay Jathar"
                className="ab-photo-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div className="ab-photo-placeholder">J</div>
              <div className="ab-photo-caption">
                Jay Jathar · React Developer
              </div>
            </div>
            <div className="ab-story-text">
              <div className="ab-pull-quote">
                <p className="ab-pull-text">
                  "I didn't learn to code to get a job. I learned because I
                  wanted to understand how things work."
                </p>
              </div>
              <p className="ab-story-body">
                I started tinkering with HTML in school, breaking and rebuilding
                things until they made sense. That hands-on curiosity led me to{" "}
                <strong>React.js</strong> and a whole ecosystem I genuinely
                enjoy working in. During my internship at Jyoti Technosoft, I
                didn't just write features — I asked why, questioned the design
                decisions, and pushed myself to understand the full picture. I'm{" "}
                <strong>reserved by nature</strong>, but when I'm in a codebase
                I care about, I go deep.
              </p>
            </div>
          </div>
        </div>

        <div className="ab-rule" />

        <div className="ab-exp">
          <p className="ab-section-label">Education</p>

          {EDUCATION.map((edu, index) => (
            <div key={index} className="ab-exp-entry">
              <div className="ab-exp-meta">
                <div className="ab-exp-type">{edu.type}</div>
              </div>

              <div>
                <div className="ab-exp-role">{edu.title}</div>
                <div className="ab-exp-co">{edu.place}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="ab-rule" />
        <div className="ab-traits">
          <p className="ab-section-label">How I work</p>
          <div className="ab-traits-grid">
            {TRAITS.map(({ n, title, desc }) => (
              <div key={n} className="ab-trait">
                <div className="ab-trait-num">{n}</div>
                <div className="ab-trait-title">{title}</div>
                <div className="ab-trait-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ab-rule" />
        <div className="ab-outside">
          <p className="ab-section-label">Outside of work</p>
          <div className="ab-outside-grid">
            {OUTSIDE.map(({ icon, title, desc }) => (
              <div key={title} className="ab-outside-item">
                <div className="ab-outside-icon">{icon}</div>
                <div className="ab-outside-title">{title}</div>
                <div className="ab-outside-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
