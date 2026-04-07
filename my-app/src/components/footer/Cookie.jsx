import React from 'react';

function Cookie() {
  const sections = [
    {
      title: '1. What Are Cookies?',
      body: 'Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, keep you logged in, and understand how you use Quicky so we can continuously improve the experience.',
    },
    {
      title: '2. Types of Cookies We Use',
      body: 'We use essential cookies (required for the platform to function), preference cookies (to remember your settings like dark mode and language), analytics cookies (via Vercel Analytics to understand usage patterns), and authentication cookies (via Firebase Auth to keep you securely signed in).',
    },
    {
      title: '3. How We Use Cookies',
      body: 'Cookies help us maintain your login session, save your code editor preferences, track your learning progress across sessions, and gather anonymized analytics data that helps us improve course quality, performance, and user experience.',
    },
    {
      title: '4. Third-Party Cookies',
      body: 'Some cookies on our platform are set by trusted third-party services we use — including Google Firebase (authentication), Vercel (analytics and performance), and potentially embedded content. These third parties have their own privacy and cookie policies.',
    },
    {
      title: '5. Managing Your Cookies',
      body: 'You can control or delete cookies through your browser settings at any time. Please note that disabling essential cookies may impact your ability to use certain features of Quicky, such as staying logged in or saving your progress.',
    },
    {
      title: '6. Changes to This Policy',
      body: 'We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our services. We recommend checking this page periodically. Continued use of Quicky after changes constitutes your acceptance of the updated policy.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .cookie-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .cookie-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(251,191,36,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .cookie-inner { max-width: 780px; margin: 0 auto; position: relative; z-index: 1; }
        .cookie-hero { text-align: center; margin-bottom: 56px; }
        .cookie-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(251,191,36,0.1);
          border: 1px solid rgba(251,191,36,0.22);
          border-radius: 100px;
          color: #fbbf24;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .cookie-title { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin: 0 0 0.5rem; letter-spacing: -0.03em; }
        .cookie-icon { font-size: 2.5rem; margin-bottom: 0.5rem; display: block; }
        .cookie-updated { font-size: 0.82rem; color: rgba(255,255,255,0.3); margin: 0; }
        .cookie-sections { display: flex; flex-direction: column; gap: 14px; }
        .cookie-section {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 22px 26px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .cookie-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #fbbf24, #f97316);
          border-radius: 3px 0 0 3px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cookie-section:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); }
        .cookie-section:hover::before { opacity: 1; }
        .cookie-sec-title { font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.88); margin: 0 0 10px; }
        .cookie-sec-body { font-size: 0.86rem; color: rgba(255,255,255,0.5); line-height: 1.75; margin: 0; }
        .cookie-footer {
          margin-top: 48px; padding: 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px; text-align: center;
        }
        .cookie-footer p { font-size: 0.82rem; color: rgba(255,255,255,0.28); margin: 0; }
        .cookie-footer a { color: #fbbf24; text-decoration: none; }
        .cookie-footer a:hover { text-decoration: underline; }
      `}</style>

      <div className="cookie-page">
        <div className="cookie-inner">
          <div className="cookie-hero">
            <span className="cookie-icon">🍪</span>
            <div className="cookie-eyebrow">Legal</div>
            <h1 className="cookie-title">Cookie Policy</h1>
            <p className="cookie-updated">Last updated: August 20, 2025</p>
          </div>

          <div className="cookie-sections">
            {sections.map((s, i) => (
              <div key={i} className="cookie-section">
                <h2 className="cookie-sec-title">{s.title}</h2>
                <p className="cookie-sec-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="cookie-footer">
            <p>© {new Date().getFullYear()} Quicky. All Rights Reserved. · <a href="/Privacy">Privacy Policy</a> · <a href="/Terms">Terms of Service</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cookie;