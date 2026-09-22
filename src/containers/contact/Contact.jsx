import React, { useRef, useEffect, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const SOCIALS = [
  { label: "GitHub", icon: "⌥", href: "https://github.com/JayJathar" },
  {
    label: "LinkedIn",
    icon: "◈",
    href: "https://www.linkedin.com/in/jay-jathar/",
  },
  {
    label: "Call Me",
    icon: "📞",
    href: "tel:+919510511751",
  },
];
const INFO_CARDS = [
  {
    icon: "✉",
    label: "Email",
    value: "jayjathar.dev27@gmail.com",
    href: "mailto:jayjathar.dev27@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 95105 11751",
    href: "tel:+919510511751",
  },
  {
    icon: "◌",
    label: "Location",
    value: "India · Open to Remote",
    href: null,
  },
  {
    icon: "◷",
    label: "Response",
    value: "Usually within 24 hrs",
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /* ── Intersection observer ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* ── Form handlers ── */
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setSending(true);

    emailjs
      .send(
        "service_2zo8dl9",
        "template_31u83th",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "zTL3sEwrNbRJBGmy8",
      )
      .then(() => {
        setSending(false);
        setSent(true);
        setShowToast(true);

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setShowToast(false), 4000);
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error(error);
        setSending(false);
        alert("Failed to send message");
      });
  };

  /* ── Render ── */
  return (
    <div className="ct-root" ref={sectionRef}>
      {/* Backgrounds */}
      <div className="ct-grid-bg" />
      <div className="ct-glow ct-g1" />
      <div className="ct-glow ct-g2" />
      <div className="ct-glow ct-g3" />

      {/* Header */}
      <div className={`ct-header ${visible ? "ct-header-in" : ""}`}>
        <div className="ct-tag">
          <span className="ct-tdot" />
          Get In Touch
        </div>
        <h2 className="ct-title">
          <span className="ct-muted">Let's</span> work
          <br />
          <span className="ct-accent">together.</span>
        </h2>
        <p className="ct-desc">
          Got a project in mind, a role to fill, or just want to say hi? My
          inbox is always open — I'll get back to you fast.
        </p>
      </div>

      {/* Body */}
      <div className="ct-body">
        {/* ── Left: Info Panel ── */}
        <div className={`ct-info ${visible ? "ct-info-in" : ""}`}>
          {INFO_CARDS.map((card, i) =>
            card.href ? (
              <a
                key={i}
                className="ct-info-card"
                href={card.href}
                target={card.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="ct-ic-icon">{card.icon}</div>
                <div className="ct-ic-content">
                  <div className="ct-ic-label">{card.label}</div>
                  <div className="ct-ic-value">{card.value}</div>
                </div>
              </a>
            ) : (
              <div
                key={i}
                className="ct-info-card"
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="ct-ic-icon">{card.icon}</div>
                <div className="ct-ic-content">
                  <div className="ct-ic-label">{card.label}</div>
                  <div className="ct-ic-value">{card.value}</div>
                </div>
              </div>
            ),
          )}

          {/* Socials */}
          <div className="ct-socials">
            <div className="ct-social-label">Find me online</div>
            <div className="ct-social-row">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  className="ct-social-btn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="ct-social-icon">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Form Panel ── */}
        <div className={`ct-form-wrap ${visible ? "ct-form-wrap-in" : ""}`}>
          <form className="ct-form" onSubmit={handleSubmit} noValidate>
            {/* Row: Name + Email */}
            <div className="ct-form-row">
              <div className="ct-field">
                <label className="ct-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="ct-input"
                  placeholder="Jay Jathar"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ct-field">
                <label className="ct-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="ct-input"
                  placeholder="jay@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="ct-field" style={{ marginTop: "1.2rem" }}>
              <label className="ct-label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="ct-input"
                placeholder="Project enquiry, freelance, just saying hi…"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="ct-field" style={{ marginTop: "1.2rem" }}>
              <label className="ct-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="ct-textarea"
                placeholder="Tell me a bit about your project or what you need…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Footer */}
            <div className="ct-form-footer">
              <span className="ct-form-note">✦ No spam, ever. Promise.</span>
              <button
                type="submit"
                className={`ct-submit ${sending ? "ct-sending" : ""} ${
                  sent ? "ct-sent" : ""
                }`}
              >
                {sent ? (
                  <>✓ Message Sent</>
                ) : sending ? (
                  <>Sending…</>
                ) : (
                  <>
                    Send Message <span className="ct-arr">→</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="ct-divider">
        <span />
        <span className="ct-div-dot" />
        <span />
      </div>

      {/* Toast */}
      {showToast && (
        <div className="ct-toast">
          <span className="ct-toast-dot" />
          Message sent! I'll get back to you soon.
        </div>
      )}
    </div>
  );
}
