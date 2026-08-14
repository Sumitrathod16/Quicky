import React, { useState } from 'react';

const faqs = [
  { q: 'Do I need a technical background to start?', a: 'No! Most beginner courses assume no prior experience. A logical mindset and consistency are more important than a technical background.' },
  { q: 'What programming language should I start with?', a: 'Start with Python or JavaScript depending on your goals. Python is great for beginners and data science; JavaScript is ideal for web development.' },
  { q: 'What tools or software do I need to install?', a: 'You can start in-browser with zero setup. Locally, you\'ll want VS Code, Git, Node.js, or a Python interpreter — all free.' },
  { q: 'How long does it take to become a developer?', a: 'With consistent effort, 6–12 months can prepare you for a junior role. Our structured paths are designed to get you there efficiently.' },
  { q: 'How do I keep my skills up to date?', a: 'Follow updates on GitHub and Dev.to, take regular courses, and build side projects. Quicky\'s course library is updated weekly with the latest tools and trends.' },
  { q: 'Which frameworks and libraries are covered?', a: 'React, Next.js, Express.js, Django, Flask, Spring Boot, Flutter, and many more. We cover both frontend and backend ecosystems comprehensively.' },
  { q: 'Should I contribute to open-source projects?', a: 'Absolutely! Contributing to open source builds your portfolio, improves collaboration skills, and helps you learn from real production codebases.' },
  { q: 'Is Quicky free to use?', a: 'Quicky offers a generous free tier with access to core courses and the practice arena. Premium plans unlock advanced content, projects, and mentorship.' },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => setActiveIndex(prev => prev === i ? null : i);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .faq-page {
          min-height: 100vh;
          background: #f8faff;
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .faq-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .faq-inner {
          max-width: 760px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .faq-hero {
          text-align: center;
          margin-bottom: 56px;
        }
        .faq-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(79,70,229,0.08);
          border: 1px solid rgba(79,70,229,0.2);
          border-radius: 100px;
          color: #4f46e5;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .faq-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #1e1b4b;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }
        .faq-title span {
          background: linear-gradient(135deg, #4f46e5, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .faq-subtitle {
          font-size: 1rem;
          color: #6b7280;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .faq-item {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.open {
          background: rgba(79,70,229,0.06);
          border-color: rgba(124,58,237,0.22);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 12px;
        }
        .faq-q-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: #374151;
          line-height: 1.5;
          font-family: 'Inter', sans-serif;
        }
        .faq-item.open .faq-q-text { color: #1e1b4b; }
        .faq-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.85rem;
          color: #6b7280;
          transition: all 0.3s ease;
        }
        .faq-item.open .faq-arrow {
          background: rgba(79,70,229,0.06);
          border-color: rgba(124,58,237,0.3);
          color: #4f46e5;
          transform: rotate(45deg);
        }
        .faq-answer {
          padding: 0 22px 18px;
          font-size: 0.88rem;
          color: #6b7280;
          line-height: 1.75;
          border-top: 1px solid #e5e7eb;
          padding-top: 14px;
        }
        .faq-still {
          margin-top: 48px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
        }
        .faq-still h3 { font-size: 1.1rem; font-weight: 700; color: #1e1b4b; margin: 0 0 8px; }
        .faq-still p { font-size: 0.88rem; color: #6b7280; margin: 0 0 18px; }
        .faq-contact-btn {
          display: inline-block;
          padding: 11px 28px;
          background: linear-gradient(135deg, #4f46e5, #0ea5e9);
          color: #1e1b4b;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(124,58,237,0.3);
        }
        .faq-contact-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,0.5); }
      `}</style>

      <div className="faq-page">
        <div className="faq-inner">
          <div className="faq-hero">
            <div className="faq-eyebrow">FAQ</div>
            <h1 className="faq-title">Frequently Asked <span>Questions</span></h1>
            <p className="faq-subtitle">Everything you need to know about getting started and making the most of Quicky.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${activeIndex === i ? ' open' : ''}`}>
                <button className="faq-question-btn" onClick={() => toggle(i)}>
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-arrow">+</span>
                </button>
                {activeIndex === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>

          <div className="faq-still">
            <h3>Still have questions?</h3>
            <p>Can't find what you're looking for? Our team is happy to help.</p>
            <a href="/Support" className="faq-contact-btn">Contact Support →</a>
          </div>
        </div>
      </div>
    </>
  );
}
