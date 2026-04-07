import React from 'react';

const paths = [
  {
    icon: '🌐',
    title: 'Web Development',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.18)',
    steps: [
      'Learn HTML5 & CSS3 — structure and style web pages with semantic markup.',
      'Master JavaScript fundamentals — variables, functions, async/await, DOM.',
      'Learn version control with Git and GitHub — the foundation of all team work.',
      'Explore frontend frameworks: React.js or Vue.js for dynamic, reactive UIs.',
      'Understand REST APIs — fetch data, handle responses, and build integrations.',
      'Practice responsive layouts using CSS Grid, Flexbox, and media queries.',
      'Deploy your projects on Vercel or Netlify — go live and share your work.',
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.18)',
    steps: [
      'Master a backend language: Node.js (JavaScript), Python, or Java.',
      'Learn servers, routing, middleware — the architecture behind web apps.',
      'Work with databases: SQL (PostgreSQL, MySQL) and NoSQL (MongoDB).',
      'Build RESTful APIs and explore GraphQL for flexible data querying.',
      'Implement authentication & authorization: JWT, OAuth 2.0, sessions.',
      'Explore cloud basics: AWS, GCP, Azure — deploy your backend to production.',
      'Write tests, handle errors gracefully, and document your APIs.',
    ],
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.18)',
    steps: [
      'Learn core JavaScript/Dart concepts and mobile-specific UI patterns.',
      'Choose your framework: React Native (JS ecosystem) or Flutter (Dart).',
      'Understand UI components, navigation stacks, and state management.',
      'Integrate REST APIs and work with local storage (AsyncStorage, Hive).',
      'Debug and test apps on simulators and real Android/iOS devices.',
      'Publish your apps on Google Play Store and Apple App Store.',
      'Polish with animations, gestures, and performance optimizations.',
    ],
  },
];

function Study() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .study-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .study-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .study-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
        .study-hero { text-align: center; margin-bottom: 64px; }
        .study-eyebrow {
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
        .study-title { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin: 0 0 1rem; letter-spacing: -0.03em; }
        .study-title span {
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .study-subtitle { font-size: 1rem; color: rgba(255,255,255,0.45); max-width: 520px; margin: 0 auto; line-height: 1.7; }

        .study-paths { display: flex; flex-direction: column; gap: 24px; margin-bottom: 56px; }
        .study-path-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .study-path-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }
        .study-path-header {
          padding: 20px 26px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .study-path-icon { font-size: 1.5rem; }
        .study-path-title { font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0; }
        .study-step-list {
          padding: 20px 26px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .study-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.86rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }
        .study-step-num {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          margin-top: 1px;
        }

        .study-footer-note {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 28px 32px;
          text-align: center;
        }
        .study-footer-note p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          font-style: italic;
          margin: 0 0 18px;
          line-height: 1.65;
        }
        .study-footer-btn {
          display: inline-block;
          padding: 11px 28px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(124,58,237,0.35);
          transition: all 0.2s ease;
        }
        .study-footer-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,0.5); }
      `}</style>

      <div className="study-page">
        <div className="study-inner">
          <div className="study-hero">
            <div className="study-eyebrow">Study Plans</div>
            <h1 className="study-title">Start Your <span>Dev Journey 🚀</span></h1>
            <p className="study-subtitle">
              Follow our curated, step-by-step learning paths tailored for different development tracks. Build solid skills and grow with confidence.
            </p>
          </div>

          <div className="study-paths">
            {paths.map((path, pi) => (
              <div key={pi} className="study-path-card" style={{ borderColor: path.border }}>
                <div className="study-path-header" style={{ background: path.bg }}>
                  <span className="study-path-icon">{path.icon}</span>
                  <h2 className="study-path-title">{path.title}</h2>
                </div>
                <div className="study-step-list">
                  {path.steps.map((step, si) => (
                    <div key={si} className="study-step">
                      <span className="study-step-num" style={{ background: `${path.color}20`, color: path.color }}>
                        {si + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="study-footer-note">
            <p>
              💡 Consistency beats speed. Code every day, build real projects,<br />ask questions fearlessly, and never stop learning.
            </p>
            <a href="/Practice" className="study-footer-btn">Start Practicing Now →</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Study;
