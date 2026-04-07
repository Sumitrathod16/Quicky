import React from 'react';

function About() {
  const stats = [
    { value: '50K+', label: 'Active Learners' },
    { value: '200+', label: 'Courses Available' },
    { value: '95%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Community Support' },
  ];

  const values = [
    { icon: '⚡', title: 'Hands-On Learning', desc: 'We believe the best way to learn is by doing. Every concept comes paired with live exercises and real-world challenges.' },
    { icon: '🎯', title: 'Structured Paths', desc: 'Carefully curated learning paths designed by industry experts to take you from zero to job-ready.' },
    { icon: '🌐', title: 'Multi-Language', desc: 'From Python to C++, JavaScript to Java — practice in the language of your choice with instant feedback.' },
    { icon: '🤝', title: 'Community First', desc: 'Join a thriving community of developers who collaborate, share knowledge, and grow together.' },
    { icon: '📈', title: 'Progress Tracking', desc: 'Detailed analytics and milestone tracking so you always know how far you\'ve come and where to go next.' },
    { icon: '🚀', title: 'Always Evolving', desc: 'Our content library grows every week with the latest industry trends and technologies.' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .about-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
          overflow: hidden;
        }
        .about-page::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .about-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 100px;
          color: #a78bfa;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .about-hero {
          text-align: center;
          margin-bottom: 64px;
        }
        .about-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .about-title span {
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.5);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 60px;
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          background: rgba(124,58,237,0.08);
          border-color: rgba(124,58,237,0.25);
          transform: translateY(-4px);
        }
        .stat-value {
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .about-section-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .about-mission {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 36px 40px;
          margin-bottom: 60px;
          position: relative;
          overflow: hidden;
        }
        .about-mission::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(180deg, #a78bfa, #60a5fa);
          border-radius: 4px 0 0 4px;
        }
        .mission-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
        }
        .mission-body {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin: 0;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 60px;
        }
        .value-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }
        .value-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(167,139,250,0.2);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.2);
        }
        .value-icon {
          font-size: 1.6rem;
          margin-bottom: 12px;
        }
        .value-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .value-desc {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
        }
        .about-cta {
          background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1));
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 20px;
          padding: 48px 40px;
          text-align: center;
        }
        .cta-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin: 0 0 10px;
        }
        .cta-sub {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          margin: 0 0 24px;
        }
        .cta-btn {
          display: inline-block;
          padding: 13px 32px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(124,58,237,0.4);
          transition: all 0.3s ease;
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(124,58,237,0.6); }
        @media (max-width: 768px) {
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .values-grid { grid-template-columns: 1fr; }
          .about-mission { padding: 24px; }
        }
      `}</style>

      <div className="about-page">
        <div className="about-inner">
          <div className="about-hero">
            <div className="about-eyebrow">About Quicky</div>
            <h1 className="about-title">Empowering Developers,<br /><span>One Challenge at a Time</span></h1>
            <p className="about-subtitle">
              Quicky is a modern, interactive learning platform built to bridge the gap between theory and real-world coding — designed for developers of all levels.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about-mission">
            <p className="about-section-label">Our Mission</p>
            <h2 className="mission-title">Bridge Theory & Real-World Application</h2>
            <p className="mission-body">
              We believe every developer deserves access to world-class, practical education. Our mission is to provide interactive coding exercises, real-time feedback, and structured learning paths that transform learners into confident, job-ready professionals — regardless of background or experience level.
            </p>
          </div>

          <p className="about-section-label">What We Stand For</p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>

          <div className="about-cta">
            <h2 className="cta-title">Ready to Start Building?</h2>
            <p className="cta-sub">Join thousands of developers who are leveling up their skills with Quicky every day.</p>
            <a href="/signup" className="cta-btn">Get Started Free →</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
