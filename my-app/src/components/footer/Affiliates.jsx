import React from 'react';

const Affiliates = () => {
  const benefits = [
    { icon: '💸', title: 'Generous Commissions', desc: 'Earn competitive commissions on every qualifying purchase made through your unique referral link.' },
    { icon: '🏆', title: 'High-Quality Product', desc: 'Promote a platform that learners genuinely love — Quicky\'s 95% satisfaction rate speaks for itself.' },
    { icon: '🎯', title: 'Real-Time Dashboard', desc: 'Track your clicks, conversions, and commissions in real-time through your personal affiliate dashboard.' },
    { icon: '🤝', title: 'Dedicated Support', desc: 'Our affiliate team is always available to help you create content, optimize performance, and grow.' },
  ];

  const steps = [
    { n: '01', title: 'Sign Up Free', desc: 'Fill out our quick application form. Approval is usually instant.' },
    { n: '02', title: 'Get Your Link', desc: 'Receive your unique referral link and access to affiliate resources and banners.' },
    { n: '03', title: 'Promote', desc: 'Share your link on your blog, YouTube, social media, email newsletter — anywhere your audience hangs out.' },
    { n: '04', title: 'Earn', desc: 'Receive your commission automatically for every successful sale.' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .aff-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .aff-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(52,211,153,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .aff-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
        .aff-hero { text-align: center; margin-bottom: 64px; }
        .aff-eyebrow {
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
        .aff-title { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin: 0 0 1rem; letter-spacing: -0.03em; }
        .aff-title span {
          background: linear-gradient(135deg, #34d399, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .aff-subtitle { font-size: 1rem; color: rgba(255,255,255,0.45); max-width: 500px; margin: 0 auto; line-height: 1.7; }

        .aff-sec-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .aff-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 60px;
        }
        .aff-step {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 22px 18px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .aff-step:hover {
          background: rgba(52,211,153,0.05);
          border-color: rgba(52,211,153,0.18);
          transform: translateY(-4px);
        }
        .aff-step-num {
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #34d399, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }
        .aff-step-title { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .aff-step-desc { font-size: 0.8rem; color: rgba(255,255,255,0.45); line-height: 1.6; }

        .aff-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 60px;
        }
        .aff-benefit {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: all 0.3s ease;
        }
        .aff-benefit:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(52,211,153,0.2);
          transform: translateY(-2px);
        }
        .aff-benefit-icon { font-size: 1.5rem; flex-shrink: 0; }
        .aff-benefit-title { font-size: 0.92rem; font-weight: 700; color: rgba(255,255,255,0.88); margin-bottom: 6px; }
        .aff-benefit-desc { font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.65; }

        .aff-cta {
          background: linear-gradient(135deg, rgba(52,211,153,0.1), rgba(96,165,250,0.08));
          border: 1px solid rgba(52,211,153,0.2);
          border-radius: 20px;
          padding: 48px 40px;
          text-align: center;
        }
        .aff-cta h2 { font-size: 1.4rem; font-weight: 800; color: #fff; margin: 0 0 10px; }
        .aff-cta p { font-size: 0.92rem; color: rgba(255,255,255,0.5); margin: 0 0 24px; }
        .aff-cta-btn {
          display: inline-block;
          padding: 13px 36px;
          background: linear-gradient(135deg, #059669, #0284c7);
          color: #fff;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(5,150,105,0.35);
          transition: all 0.3s ease;
        }
        .aff-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(5,150,105,0.5); }
        .aff-footer-note { margin-top: 20px; font-size: 0.8rem; color: rgba(255,255,255,0.25); }

        @media (max-width: 768px) {
          .aff-steps { grid-template-columns: repeat(2, 1fr); }
          .aff-benefits { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .aff-steps { grid-template-columns: 1fr; }
          .aff-cta { padding: 32px 24px; }
        }
      `}</style>

      <div className="aff-page">
        <div className="aff-inner">
          <div className="aff-hero">
            <div className="aff-eyebrow">Affiliates</div>
            <h1 className="aff-title">Partner With Us &amp; <span>Earn Together</span></h1>
            <p className="aff-subtitle">
              Join Quicky's affiliate program and earn generous commissions by sharing the platform that developers love.
            </p>
          </div>

          <p className="aff-sec-label">How It Works — 4 Simple Steps</p>
          <div className="aff-steps">
            {steps.map((s, i) => (
              <div key={i} className="aff-step">
                <div className="aff-step-num">{s.n}</div>
                <div className="aff-step-title">{s.title}</div>
                <div className="aff-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <p className="aff-sec-label">Why Join Our Affiliate Program?</p>
          <div className="aff-benefits">
            {benefits.map((b, i) => (
              <div key={i} className="aff-benefit">
                <span className="aff-benefit-icon">{b.icon}</span>
                <div>
                  <div className="aff-benefit-title">{b.title}</div>
                  <div className="aff-benefit-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="aff-cta">
            <h2>🚀 Ready to Start Earning?</h2>
            <p>Join our growing community of affiliates today. It's free, fast, and rewarding.</p>
            <a href="/signup" className="aff-cta-btn">Join the Program →</a>
            <p className="aff-footer-note">For inquiries: affiliates@quicky.dev</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliates;
