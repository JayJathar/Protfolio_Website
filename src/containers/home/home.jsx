import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import myPhoto from "../../assets/favicon.ico";

const WORDS = [
  "React frontends",
  "API integrations",
  "Firebase apps",
  "MERN projects",
  "responsive UIs",
  "web experiences",
];

const TICKER = [
  "React.js",
  "JavaScript",
  "MERN Stack",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Firebase",
  "Tailwind CSS",
];

/* ── Floating particles canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 80;
    const color = "#ff4d4d";

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.004 + 0.001,
    }));

    let frame = 0;

    const draw = () => {
      frame++;

      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 77, 77, ${0.25 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.dx + Math.sin(frame * p.speed + p.phase) * 0.2;
        p.y += p.dy + Math.cos(frame * p.speed + p.phase) * 0.15;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);

        grd.addColorStop(0, `rgba(255,77,77,${p.opacity})`);
        grd.addColorStop(1, "rgba(255,77,77,0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="p-particle-canvas" />;
}

export default function Home() {
  const navigate = useNavigate();

  const [wordIdx, setWordIdx] = useState(0);
  const [animOut, setAnimOut] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimOut(true);

      setTimeout(() => {
        setWordIdx((i) => (i + 1) % WORDS.length);
        setAnimOut(false);
      }, 400);
    }, 2200);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-root">
      {/* Moving particle background */}
      {/* Uncomment if you want particles */}
      {/* <ParticleCanvas /> */}

      <div className="p-grid-bg" />

      <div className="p-glow p-g1" />
      <div className="p-glow p-g2" />
      <div className="p-glow p-g3" />

      {/* ================= HERO ================= */}

      <section className="p-hero">
        {/* LEFT CONTENT */}

        <div className="p-left">
          <div className="p-tag">
            <span className="p-tdot" />
            Open to work · India
          </div>

          <h1 className="p-headline">
            <span className="p-muted">I</span> build
            <br />
            <span className={`p-word ${animOut ? "p-word-out" : "p-word-in"}`}>
              {WORDS[wordIdx]}
            </span>
            <br />
            <span className="p-accent">that matter.</span>
          </h1>

          <p className="p-sub">
            Hi, I'm <strong>Jay Jathar</strong> — a{" "}
            <strong>React.js Frontend Developer</strong> and{" "}
            <strong>MERN Stack Enthusiast</strong> with hands-on experience in
            building responsive UIs, integrating REST APIs, and working with
            Firebase. I enjoy building clean, user-focused web experiences and
            continuously expanding my skills across the MERN ecosystem.
          </p>

          {/* BUTTONS */}

          <div className="p-btns">
            <button className="p-bm" onClick={() => navigate("/work")}>
              See My Work
              <span className="p-arr">→</span>
            </button>

            <button className="p-bo" onClick={() => navigate("/resume")}>
              View Resume
              <span className="p-arr">↗</span>
            </button>
          </div>
        </div>

        {/* ================= PHOTO ================= */}

        <div className="ab-photo-wrap">
          <div className="ab-photo-ring">
            <img
              src={myPhoto}
              alt="Jay Jathar"
              className="ab-photo"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            <div className="ab-photo-fallback">J</div>
          </div>

          <div className="ab-photo-badge">
            <span className="ab-online-dot" />
            Open to work
          </div>
        </div>
      </section>

      {/* ================= TICKER ================= */}

      <div className="p-ticker">
        <div className="p-ttrack">
          {[...TICKER, ...TICKER].map((item, i) => (
            <React.Fragment key={i}>
              <span className="p-ti">{item}</span>

              <span className="p-td" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
