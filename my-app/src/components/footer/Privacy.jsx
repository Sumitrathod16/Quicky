import React from 'react';

const Privacy = () => {
  const sections = [
    {
      title: '1. Introduction',
      body: 'Welcome to Quicky\'s Privacy Policy. This document explains how we collect, use, and protect your personal data. By using our service, you agree to the terms described here. We are committed to handling your information with the utmost care and transparency.',
    },
    {
      title: '2. Data We Collect',
      body: 'We may collect personal data such as your name, email address, and usage data (pages visited, courses completed, code submissions). This information helps us provide, maintain, and improve the Quicky platform and personalize your learning experience.',
    },
    {
      title: '3. How We Use Your Data',
      body: 'Your data is used to personalize your experience, track learning progress, process transactions, and send relevant notifications about your account or new content. We do not sell or rent your personal information to third parties under any circumstances.',
    },
    {
      title: '4. Data Security',
      body: 'We implement industry-standard security measures including encryption at rest and in transit, secure authentication (Firebase Auth), and regular security audits to safeguard your personal information. However, no method of internet transmission is 100% secure.',
    },
    {
      title: '5. Cookies & Tracking',
      body: 'We use cookies and similar tracking technologies to maintain your session, remember your preferences, and gather analytics that help us improve the platform. You can control cookie preferences through your browser settings at any time.',
    },
    {
      title: '6. Third-Party Services',
      body: 'Quicky integrates trusted third-party services such as Firebase (Google) for authentication and data storage, and Vercel Analytics for performance monitoring. These services have their own privacy policies and data handling practices.',
    },
    {
      title: '7. Your Rights',
      body: 'You have the right to access, correct, or delete your personal data at any time. You may request a copy of your data or ask us to delete your account by contacting our support team. We will respond to all such requests within 30 days.',
    },
    {
      title: '8. Changes to This Policy',
      body: 'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or a prominent notice on the platform. Continued use constitutes acceptance of the updated policy.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .policy-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .policy-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .policy-inner {
          max-width: 780px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .policy-hero {
          text-align: center;
          margin-bottom: 56px;
        }
        .policy-eyebrow {
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
        .policy-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }
        .policy-updated {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.3);
          margin: 0;
        }
        .policy-sections {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .policy-section {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 22px 26px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .policy-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #a78bfa, #60a5fa);
          border-radius: 3px 0 0 3px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .policy-section:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); }
        .policy-section:hover::before { opacity: 1; }
        .policy-sec-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: rgba(255,255,255,0.88);
          margin: 0 0 10px;
        }
        .policy-sec-body {
          font-size: 0.86rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin: 0;
        }
        .policy-footer {
          margin-top: 48px;
          padding: 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          text-align: center;
        }
        .policy-footer p { font-size: 0.82rem; color: rgba(255,255,255,0.28); margin: 0; }
        .policy-footer a { color: #a78bfa; text-decoration: none; }
        .policy-footer a:hover { text-decoration: underline; }
      `}</style>

      <div className="policy-page">
        <div className="policy-inner">
          <div className="policy-hero">
            <div className="policy-eyebrow">Legal</div>
            <h1 className="policy-title">Privacy Policy</h1>
            <p className="policy-updated">Last updated: August 20, 2025</p>
          </div>

          <div className="policy-sections">
            {sections.map((s, i) => (
              <div key={i} className="policy-section">
                <h2 className="policy-sec-title">{s.title}</h2>
                <p className="policy-sec-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="policy-footer">
            <p>© {new Date().getFullYear()} Quicky. All Rights Reserved. · <a href="/Terms">Terms of Service</a> · <a href="/Cookie">Cookie Policy</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;