import React from 'react';

function Press() {
  const highlights = [
    { icon: '📚', title: 'Interactive Lessons', desc: 'Every concept is paired with a live challenge. Learn by doing, not just watching.' },
    { icon: '📊', title: 'Progress Tracking', desc: 'Visual dashboards track milestones, streaks, and solved problems across all languages.' },
    { icon: '💻', title: 'Real-Time Code Editor', desc: 'A full-featured in-browser editor with syntax highlighting, test runners, and multi-language support.' },
    { icon: '🏗️', title: 'Project-Based Learning', desc: 'Build real, portfolio-ready projects guided by industry professionals.' },
    { icon: '🤝', title: 'Community Support', desc: 'Discussion threads, peer reviews, and mentorship from experienced developers.' },
    { icon: '⚡', title: 'Multi-Language Practice', desc: 'Code in JavaScript, Python, Java, C++, C, and more — all within one unified platform.' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .press-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .press-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .press-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
        .press-hero { text-align: center; margin-bottom: 64px; }
        .press-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(96,165,250,0.1);
          border: 1px solid rgba(96,165,250,0.22);
          border-radius: 100px;
          color: #60a5fa;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .press-title { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin: 0 0 1rem; letter-spacing: -0.03em; }
        .press-title span {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .press-subtitle { font-size: 1rem; color: rgba(255,255,255,0.45); max-width: 540px; margin: 0 auto; line-height: 1.7; }

        .press-release-box {
          background: rgba(96,165,250,0.06);
          border: 1px solid rgba(96,165,250,0.18);
          border-radius: 20px;
          padding: 36px 40px;
          margin-bottom: 56px;
          position: relative;
          overflow: hidden;
        }
        .press-release-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(180deg, #60a5fa, #a78bfa);
          border-radius: 4px 0 0 4px;
        }
        .press-release-label { font-size: 0.72rem; font-weight: 600; color: #60a5fa; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px; }
        .press-release-title { font-size: 1.2rem; font-weight: 800; color: #fff; margin: 0 0 14px; }
        .press-release-body { font-size: 0.9rem; color: rgba(255,255,255,0.55); line-height: 1.8; margin: 0 0 10px; }

        .press-sec-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .press-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 56px;
        }
        .press-feature-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 22px;
          transition: all 0.3s ease;
        }
        .press-feature-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(96,165,250,0.2);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.2);
        }
        .press-feat-icon { font-size: 1.5rem; margin-bottom: 10px; }
        .press-feat-title { font-size: 0.9rem; font-weight: 700; color: rgba(255,255,255,0.88); margin-bottom: 8px; }
        .press-feat-desc { font-size: 0.8rem; color: rgba(255,255,255,0.5); line-height: 1.6; }

        .press-contact {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .press-contact-text h3 { font-size: 1rem; font-weight: 700; color: #fff; margin: 0 0 6px; }
        .press-contact-text p { font-size: 0.85rem; color: rgba(255,255,255,0.45); margin: 0; }
        .press-contact-btn {
          padding: 11px 24px;
          background: rgba(96,165,250,0.12);
          border: 1px solid rgba(96,165,250,0.25);
          border-radius: 10px;
          color: #60a5fa;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .press-contact-btn:hover { background: rgba(96,165,250,0.2); }

        @media (max-width: 768px) { .press-grid { grid-template-columns: 1fr 1fr; } .press-release-box { padding: 24px; } }
        @media (max-width: 500px) { .press-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="press-page">
        <div className="press-inner">
          <div className="press-hero">
            <div className="press-eyebrow">Press Release</div>
            <h1 className="press-title">Quicky Launches to <span>Revolutionize Dev Learning</span></h1>
            <p className="press-subtitle">
              We're excited to announce the official launch of Quicky — the most interactive, developer-first learning platform built for the modern age.
            </p>
          </div>

          <div className="press-release-box">
            <p className="press-release-label">📢 Official Announcement</p>
            <h2 className="press-release-title">Quicky: Interactive Learning, Reimagined</h2>
            <p className="press-release-body">
              Quicky is a modern web application designed to revolutionize the way developers learn and practice coding skills. Our mission is to provide an interactive, hands-on learning experience that bridges the gap between theory and real-world application.
            </p>
            <p className="press-release-body">
              With support for 5+ programming languages, 200+ problems, AI-powered study tools, and a vibrant community — Quicky empowers developers at every stage of their journey to level up faster and build things they're proud of.
            </p>
          </div>

          <p className="press-sec-label">Key Features at Launch</p>
          <div className="press-grid">
            {highlights.map((h, i) => (
              <div key={i} className="press-feature-card">
                <div className="press-feat-icon">{h.icon}</div>
                <div className="press-feat-title">{h.title}</div>
                <div className="press-feat-desc">{h.desc}</div>
              </div>
            ))}
          </div>

          <div className="press-contact">
            <div className="press-contact-text">
              <h3>Media Inquiries</h3>
              <p>For press, partnerships, or media requests — we'd love to hear from you.</p>
            </div>
            <a href="mailto:press@quicky.dev" className="press-contact-btn">📧 Contact Press Team</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Press;
