import React, { useRef, useEffect, useState } from "react";
import "./resume.css";

const FILE_ID = "1svgiirOg5In7xUxP39n_zerhZSY_7AGr";

const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
const DRIVE_URL = `https://drive.google.com/file/d/${FILE_ID}/view`;

const INFO = [
  { k: "Location", v: "India", open: false },
  { k: "Status", v: "Open to Work", open: true },
  { k: "Type", v: "Full-time · Freelance", open: false },
  { k: "Email", v: "jayjathar.dev27@gmail.com", open: false },
];

const SKILLS = [
  { name: "React.js", pct: 90 },
  { name: "JavaScript", pct: 88 },
  { name: "HTML & CSS", pct: 92 },
  { name: "Tailwind CSS", pct: 85 },
  { name: "REST APIs", pct: 82 },
  { name: "Firebase", pct: 78 },
  { name: "MongoDB", pct: 72 },
  { name: "Node.js", pct: 70 },
];

const STATS = [
  { n: "1", l: "Years" },
  { n: "4+", l: "Projects" },
];

const TAGS = [
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MERN Stack",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Firebase",
  "Git",
  "GitHub",
];

const FOOTER = [
  { n: "1", l: "Years" },
  { n: "4+", l: "Projects" },
  { n: "MERN", l: "Stack" },
];

export default function ResumePage() {
  const sidebarRef = useRef(null);
  const [barsOn, setBarsOn] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setBarsOn(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sidebarRef.current) {
      obs.observe(sidebarRef.current);
    }

    return () => obs.disconnect();
  }, []);

  return (
    <div className="rv-root">
      <div className="rv-grid-bg" />

      <div className="rv-glow rv-g1" />
      <div className="rv-glow rv-g2" />

      {/* ================= HEADER ================= */}

      <div className="rv-header">
        <div className="rv-header-left">
          <div className="rv-pill-tag">
            <span className="rv-pill-dot" />
            Résumé
          </div>

          <h1 className="rv-page-title">
            Jay &nbsp;<span>Jathar.</span>
          </h1>

          <p className="rv-page-sub">
            React.js · MERN Stack · Frontend Developer
          </p>
        </div>

        <div className="rv-header-right">
          <div className="rv-btn-row">
            <a
              className="rv-btn-red"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              download
            >
              ↓ &nbsp;Download PDF
            </a>

            <a
              className="rv-btn-outline"
              href={DRIVE_URL}
              target="_blank"
              rel="noreferrer"
            >
              ↗ &nbsp;Open in Drive
            </a>
          </div>

          <div className="rv-avail">
            <span className="rv-avail-dot" />
            Available for new projects
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}

      <div className="rv-main">
        {/* ================= SIDEBAR ================= */}

        <aside className="rv-sidebar" ref={sidebarRef}>
          {/* PROFILE */}

          <div className="rv-avatar-wrap">
            <div className="rv-avatar">J</div>

            <div>
              <div className="rv-av-name">Jay Jathar</div>

              <div className="rv-av-role">React Developer · India</div>
            </div>
          </div>

          {/* ABOUT */}

          <div className="rv-sec">
            <div className="rv-sec-title">About</div>

            <div className="rv-info">
              {INFO.map((r, i) => (
                <div key={i}>
                  <div className="rv-info-k">{r.k}</div>

                  <div className={`rv-info-v ${r.open ? "open" : ""}`}>
                    {r.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}

          <div className="rv-sec">
            <div className="rv-sec-title">Skills</div>

            <div className="rv-skill-list">
              {SKILLS.map((s, i) => (
                <div key={i}>
                  <div className="rv-skill-head">
                    <span className="rv-skill-name">{s.name}</span>

                    <span className="rv-skill-pct">{s.pct}%</span>
                  </div>

                  <div className="rv-skill-track">
                    <div
                      className="rv-skill-fill"
                      style={{
                        width: barsOn ? `${s.pct}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}

          <div className="rv-sec">
            <div className="rv-sec-title">Highlights</div>

            <div className="rv-stat-grid">
              {STATS.map((s, i) => (
                <div className="rv-stat-pill" key={i}>
                  <span className="rv-stat-n">{s.n}</span>

                  <span className="rv-stat-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGIES */}

          <div className="rv-sec">
            <div className="rv-sec-title">Technologies</div>

            <div className="rv-tag-list">
              {TAGS.map((t, i) => (
                <span className="rv-tag-chip" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* ================= PDF VIEWER ================= */}

        <div className="rv-viewer">
          {/* Chrome bar */}

          <div className="rv-chrome">
            <div className="rv-dots">
              <div className="rv-dot" />
              <div className="rv-dot" />
              <div className="rv-dot" />
            </div>

            <div className="rv-url-bar">
              <span className="rv-lock">🔒</span>
              drive.google.com &nbsp;·&nbsp; Jay Jathar — Resume.pdf
            </div>

            <div className="rv-chrome-btns">
              <a
                className="rv-chrome-btn"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                download
                title="Download PDF"
              >
                ↓
              </a>

              <a
                className="rv-chrome-btn"
                href={DRIVE_URL}
                target="_blank"
                rel="noreferrer"
                title="Open in Drive"
              >
                ↗
              </a>
            </div>
          </div>

          {/* PDF FRAME */}

          <div className="rv-frame">
            {iframeError ? (
              <div className="rv-fallback">
                <div className="rv-fallback-icon">📄</div>

                <p className="rv-fallback-title">Preview unavailable</p>

                <p className="rv-fallback-sub">
                  Your browser blocked the embed. Open it directly instead.
                </p>

                <div className="rv-fallback-btns">
                  <a
                    className="rv-btn-red"
                    href={DOWNLOAD_URL}
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    ↓ &nbsp;Download PDF
                  </a>

                  <a
                    className="rv-btn-outline"
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ↗ &nbsp;Open in Drive
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={PREVIEW_URL}
                className="rv-iframe"
                title="Resume"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setIframeError(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}

      <footer className="rv-footer">
        <div className="rv-fstats">
          {FOOTER.map((s, i) => (
            <div className="rv-fstat" key={i}>
              <span className="rv-fn">{s.n}</span>

              <span className="rv-fl">{s.l}</span>
            </div>
          ))}
        </div>

        <div className="rv-fright">
          <span>Updated 2026</span>

          <span className="rv-fpipe" />

          <span>Jay Jathar · Portfolio</span>
        </div>
      </footer>
    </div>
  );
}
