import React from 'react';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      body: 'By accessing or using Quicky\'s services, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access the service. These terms apply to all visitors, users, and others who access the service.',
    },
    {
      title: '2. User Obligations',
      body: 'You agree to use our services in a manner consistent with all applicable laws and regulations. You are prohibited from using the service for any illegal or unauthorized purpose, including uploading malicious code, attempting to breach our security, or harassing other users.',
    },
    {
      title: '3. Intellectual Property Rights',
      body: 'All content, trademarks, and data on this platform — including software, text, graphics, course materials, and interactive challenges — are the property of Quicky or its content suppliers and are protected by international copyright laws. You may not reproduce or distribute this content without permission.',
    },
    {
      title: '4. User-Generated Content',
      body: 'By submitting code, comments, or other content to Quicky, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute that content in connection with our services. You retain full ownership of anything you create.',
    },
    {
      title: '5. Limitation of Liability',
      body: 'In no event shall Quicky nor its directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising out of your use of the service.',
    },
    {
      title: '6. Account Termination',
      body: 'We reserve the right to terminate or suspend your account immediately, without prior notice, if you violate these Terms of Service. Upon termination, your right to use the service will cease immediately. All provisions which by nature should survive termination shall survive.',
    },
    {
      title: '7. Changes to Terms',
      body: 'We reserve the right to modify or replace these Terms at any time. We will provide at least 30 days notice prior to any significant changes. Your continued use of the service after changes constitutes acceptance of the new Terms. Please review these Terms periodically.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .terms-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .terms-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .terms-inner { max-width: 780px; margin: 0 auto; position: relative; z-index: 1; }
        .terms-hero { text-align: center; margin-bottom: 56px; }
        .terms-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.22);
          border-radius: 100px;
          color: #f97316;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .terms-title { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin: 0 0 1rem; letter-spacing: -0.03em; }
        .terms-updated { font-size: 0.82rem; color: rgba(255,255,255,0.3); margin: 0; }
        .terms-sections { display: flex; flex-direction: column; gap: 14px; }
        .terms-section {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 22px 26px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .terms-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #f97316, #fbbf24);
          border-radius: 3px 0 0 3px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .terms-section:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); }
        .terms-section:hover::before { opacity: 1; }
        .terms-sec-title { font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.88); margin: 0 0 10px; }
        .terms-sec-body { font-size: 0.86rem; color: rgba(255,255,255,0.5); line-height: 1.75; margin: 0; }
        .terms-footer {
          margin-top: 48px; padding: 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px; text-align: center;
        }
        .terms-footer p { font-size: 0.82rem; color: rgba(255,255,255,0.28); margin: 0; }
        .terms-footer a { color: #f97316; text-decoration: none; }
        .terms-footer a:hover { text-decoration: underline; }
      `}</style>

      <div className="terms-page">
        <div className="terms-inner">
          <div className="terms-hero">
            <div className="terms-eyebrow">Legal</div>
            <h1 className="terms-title">Terms of Service</h1>
            <p className="terms-updated">Last updated: August 20, 2025</p>
          </div>

          <div className="terms-sections">
            {sections.map((s, i) => (
              <div key={i} className="terms-section">
                <h2 className="terms-sec-title">{s.title}</h2>
                <p className="terms-sec-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="terms-footer">
            <p>© {new Date().getFullYear()} Quicky. All Rights Reserved. · <a href="/Privacy">Privacy Policy</a> · <a href="/Cookie">Cookie Policy</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;