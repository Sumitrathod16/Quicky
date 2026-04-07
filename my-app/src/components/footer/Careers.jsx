import React from 'react';

function Careers() {
  const reasons = [
    { icon: '💡', text: 'It powers everything — from mobile apps to life-saving healthcare systems.' },
    { icon: '🌍', text: 'It solves real-world problems and directly improves millions of lives.' },
    { icon: '🎨', text: 'It gives you the creative freedom to build, innovate, and explore.' },
    { icon: '📈', text: 'It offers high-demand, high-growth career paths with global reach.' },
  ];

  const advice = [
    { icon: '🔨', tip: 'Start small', detail: 'Build something real, no matter how simple. A working to-do app beats a half-built social network.' },
    { icon: '🔄', tip: 'Practice daily', detail: 'Consistency beats intensity. Even 30 minutes a day compounds into mastery over months.' },
    { icon: '💥', tip: 'Break things', detail: 'You learn more from errors and failures than from perfect tutorials. Embrace the debugger.' },
    { icon: '❓', tip: 'Ask questions', detail: 'The best developers are endlessly curious — not perfect. Never be afraid to not know something.' },
    { icon: '🤝', tip: 'Join the community', detail: 'Collaborate, contribute to open source, and grow alongside others on the same journey.' },
  ];

  const quotes = [
    '"Code the future you want to see."',
    '"Every great app was once just a blank file."',
    '"Debugging is like being a detective where you\'re also the murderer."',
    '"Think logically, code magically."',
    '"Build, break, learn, repeat."',
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .careers-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .careers-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(52,211,153,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .careers-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .careers-hero {
          text-align: center;
          margin-bottom: 64px;
        }
        .careers-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(52,211,153,0.1);
          border: 1px solid rgba(52,211,153,0.22);
          border-radius: 100px;
          color: #34d399;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .careers-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }
        .careers-title span {
          background: linear-gradient(135deg, #34d399, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .careers-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .careers-sec-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 60px;
        }
        .reason-card {
          background: rgba(52,211,153,0.04);
          border: 1px solid rgba(52,211,153,0.12);
          border-radius: 14px;
          padding: 20px 22px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: all 0.3s ease;
        }
        .reason-card:hover {
          background: rgba(52,211,153,0.08);
          border-color: rgba(52,211,153,0.22);
          transform: translateY(-2px);
        }
        .reason-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
        .reason-text { font-size: 0.88rem; color: rgba(255,255,255,0.65); line-height: 1.6; }
        .advice-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 60px;
        }
        .advice-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 18px 22px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: all 0.3s ease;
        }
        .advice-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.12);
          transform: translateX(4px);
        }
        .advice-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
        .advice-tip {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }
        .advice-detail { font-size: 0.83rem; color: rgba(255,255,255,0.5); line-height: 1.6; }
        .quotes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 60px;
        }
        .quote-card {
          background: rgba(167,139,250,0.04);
          border: 1px solid rgba(167,139,250,0.12);
          border-radius: 12px;
          padding: 18px 20px;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.6);
          font-style: italic;
          line-height: 1.6;
          transition: all 0.3s ease;
        }
        .quote-card:hover {
          background: rgba(167,139,250,0.08);
          border-color: rgba(167,139,250,0.22);
          color: rgba(255,255,255,0.8);
        }
        .quote-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .careers-cta {
          background: linear-gradient(135deg, rgba(52,211,153,0.1), rgba(96,165,250,0.08));
          border: 1px solid rgba(52,211,153,0.2);
          border-radius: 20px;
          padding: 48px 40px;
          text-align: center;
        }
        .cta-title { font-size: 1.4rem; font-weight: 800; color: #fff; margin: 0 0 10px; }
        .cta-sub { font-size: 0.92rem; color: rgba(255,255,255,0.5); margin: 0 0 24px; }
        .cta-btn {
          display: inline-block;
          padding: 13px 32px;
          background: linear-gradient(135deg, #059669, #0284c7);
          color: #fff;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(5,150,105,0.35);
          transition: all 0.3s ease;
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(5,150,105,0.5); }
        @media (max-width: 640px) {
          .reasons-grid, .quotes-grid { grid-template-columns: 1fr; }
          .careers-cta { padding: 32px 24px; }
        }
      `}</style>

      <div className="careers-page">
        <div className="careers-inner">
          <div className="careers-hero">
            <div className="careers-eyebrow">Careers</div>
            <h1 className="careers-title">Build the Future <span>with Code 🚀</span></h1>
            <p className="careers-subtitle">
              Whether you're just starting out or switching careers, software development is an exciting field full of limitless opportunity. Let Quicky be your guide.
            </p>
          </div>

          <p className="careers-sec-label">Why Software Development Matters</p>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <span className="reason-icon">{r.icon}</span>
                <span className="reason-text">{r.text}</span>
              </div>
            ))}
          </div>

          <p className="careers-sec-label">Advice for New Developers</p>
          <div className="advice-list">
            {advice.map((a, i) => (
              <div key={i} className="advice-card">
                <span className="advice-icon">{a.icon}</span>
                <div>
                  <div className="advice-tip">{a.tip}</div>
                  <div className="advice-detail">{a.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="careers-sec-label">Slogans to Keep You Going ✨</p>
          <div className="quotes-grid">
            {quotes.map((q, i) => (
              <div key={i} className="quote-card">{q}</div>
            ))}
          </div>

          <div className="careers-cta">
            <h2 className="cta-title">📬 Ready to Begin Your Journey?</h2>
            <p className="cta-sub">Join our community of learners, builders, and thinkers. Your story in development starts today.</p>
            <a href="/signup" className="cta-btn">Start Learning Free →</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;