import React, { useState } from 'react';

const FEATURE_CATEGORIES = [
  {
    icon: '🎓',
    title: 'Core Learning Experience',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.2)',
    items: [
      { icon: '🖥️', label: 'User Dashboard', desc: 'Personalized home with your progress, streaks, and goals at a glance.' },
      { icon: '▶️', label: 'Course Player', desc: 'Smooth video player with speed control, bookmarks, and auto-resume.' },
      { icon: '📁', label: 'Diverse Content', desc: 'Videos, interactive articles, quizzes, and live coding challenges.' },
      { icon: '📊', label: 'Progress Tracking', desc: 'Visual completion maps and milestone rings for every course.' },
      { icon: '🔍', label: 'Powerful Search', desc: 'Full-text search across all courses, problems, and community posts.' },
      { icon: '📱', label: 'Mobile Experience', desc: 'Responsive design and PWA support so you can learn anywhere.' },
    ],
  },
  {
    icon: '🤝',
    title: 'Community & Collaboration',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.18)',
    items: [
      { icon: '💬', label: 'Q&A Forum', desc: 'Threaded discussion on every lesson — ask, answer, upvote.' },
      { icon: '📨', label: 'Direct Messaging', desc: 'Connect 1-on-1 with peers or mentors instantly.' },
      { icon: '📣', label: 'Announcements', desc: 'Instructor announcements with read receipts and reactions.' },
      { icon: '👥', label: 'Study Groups', desc: 'Create or join private groups with shared goals and chat.' },
      { icon: '🔬', label: 'Peer Reviews', desc: 'Submit projects for peer feedback with rubric-based scoring.' },
    ],
  },
  {
    icon: '📝',
    title: 'Assessments & Evaluation',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.1)',
    border: 'rgba(96,165,250,0.18)',
    items: [
      { icon: '🧪', label: 'Quiz & Test Engine', desc: 'MCQ, fill-in, code output, and drag-drop question types.' },
      { icon: '📋', label: 'Assignments', desc: 'Timed coding challenges graded against hidden test cases.' },
      { icon: '✅', label: 'Grading Interface', desc: 'Manual and automated grading with detailed feedback rubrics.' },
      { icon: '🏅', label: 'Certificates', desc: 'Verifiable completion certificates shareable to LinkedIn.' },
    ],
  },
  {
    icon: '🗂️',
    title: 'Content Management',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.18)',
    items: [
      { icon: '🛠️', label: 'Course Builder', desc: 'Drag-and-drop curriculum builder with rich text and media embeds.' },
      { icon: '📚', label: 'Content Library', desc: 'Asset library for reusing videos, images, and code snippets across courses.' },
      { icon: '📈', label: 'Analytics Dashboard', desc: 'Engagement rates, drop-off points, and completion funnel analytics.' },
      { icon: '🛡️', label: 'Moderation', desc: 'AI-powered flagging system for community and content abuse.' },
    ],
  },
  {
    icon: '🎮',
    title: 'Personalization & Motivation',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.1)',
    border: 'rgba(244,114,182,0.18)',
    items: [
      { icon: '🏆', label: 'Gamification', desc: 'XP points, level-up animations, and unlockable badges.' },
      { icon: '🥇', label: 'Leaderboards', desc: 'Weekly and all-time leaderboards by course, category, and global.' },
      { icon: '🔥', label: 'Streaks', desc: 'Daily learning streaks with freezes to protect your momentum.' },
      { icon: '🗺️', label: 'Learning Paths', desc: 'Curated paths like "Frontend Developer" or "Data Scientist".' },
      { icon: '⏰', label: 'Goal Reminders', desc: 'Smart push and email notifications personalized to your schedule.' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Administrative & Monetization',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.18)',
    items: [
      { icon: '👤', label: 'User Management', desc: 'Role-based access: student, instructor, admin, enterprise.' },
      { icon: '💳', label: 'Flexible Payments', desc: 'One-time, subscription, bundles, and corporate team plans.' },
      { icon: '🔗', label: 'Payment Gateway', desc: 'Stripe, Razorpay, and PayPal integrations with auto-invoicing.' },
      { icon: '🏷️', label: 'Coupons & Discounts', desc: 'Time-limited discount codes, referral rewards, and bulk pricing.' },
      { icon: '♿', label: 'Accessibility', desc: 'WCAG 2.1 compliant with keyboard nav, screen reader support.' },
    ],
  },
];

const STATS = [
  { value: '200+', label: 'Courses' },
  { value: '50K+', label: 'Learners' },
  { value: '12', label: 'Languages' },
  { value: '95%', label: 'Satisfaction' },
];

export default function Features() {
  const [active, setActive] = useState(null);

  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  .feat-page {
    min-height: 100vh;
    background: #f8faff;
    font-family: 'Inter', sans-serif;
    padding: 80px 24px 100px;
    position: relative; overflow: hidden;
  }
  .feat-page::before {
    content: ''; position: absolute; top: -120px; left: 50%;
    transform: translateX(-50%); width: 900px; height: 500px;
    background: radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 65%);
    pointer-events: none;
  }
  .feat-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
  .feat-hero { text-align: center; margin-bottom: 64px; }
  .feat-eyebrow {
    display: inline-flex; align-items: center; gap: 8px; padding: 6px 18px;
    background: rgba(79,70,229,0.08); border: 1px solid rgba(79,70,229,0.2);
    border-radius: 100px; color: #4f46e5; font-size: 0.78rem; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.4rem;
  }
  .feat-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #4f46e5; animation: featPulse 2s infinite; }
  @keyframes featPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
  .feat-title { font-size: clamp(2.2rem,5vw,3.4rem); font-weight: 900; color: #1e1b4b; margin: 0 0 1rem; letter-spacing: -0.04em; line-height: 1.08; }
  .feat-title span { background: linear-gradient(135deg,#4f46e5,#0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .feat-subtitle { font-size: 1.05rem; color: #6b7280; max-width: 560px; margin: 0 auto; line-height: 1.7; }
  .feat-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 72px; }
  .feat-stat {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 22px 16px;
    text-align: center; transition: all 0.3s ease; box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  }
  .feat-stat:hover { background: #f0f4ff; border-color: rgba(79,70,229,0.25); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(79,70,229,0.1); }
  .feat-stat-val { font-size: 2rem; font-weight: 900; background: linear-gradient(135deg,#4f46e5,#0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 5px; }
  .feat-stat-label { font-size: 0.76rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; }
  .feat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-bottom: 60px; }
  .feat-cat {
    background: #fff; border: 1px solid #e5e7eb; border-radius: 20px; padding: 28px 24px;
    cursor: pointer; transition: all 0.3s ease; position: relative; overflow: hidden;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  }
  .feat-cat::after { content: ''; position: absolute; inset: 0; border-radius: 20px; background: var(--cat-glow); opacity: 0; transition: opacity 0.3s ease; pointer-events: none; }
  .feat-cat:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(79,70,229,0.1); border-color: rgba(79,70,229,0.2); }
  .feat-cat:hover::after { opacity: 1; }
  .feat-cat.feat-cat-expanded { border-color: var(--cat-border); box-shadow: 0 0 0 1px var(--cat-border), 0 16px 40px rgba(0,0,0,0.06); }
  .feat-cat-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .feat-cat-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--cat-glow); border: 1px solid var(--cat-border); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
  .feat-cat-title { font-size: 0.95rem; font-weight: 700; color: #1e1b4b; }
  .feat-cat-count { margin-left: auto; font-size: 0.72rem; font-weight: 600; color: var(--cat-color); background: var(--cat-glow); border: 1px solid var(--cat-border); padding: 3px 9px; border-radius: 100px; }
  .feat-preview { display: flex; flex-direction: column; gap: 6px; }
  .feat-preview-item { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: #6b7280; }
  .feat-preview-item span:first-child { font-size: 0.9rem; }
  .feat-expanded-items { margin-top: 16px; border-top: 1px solid #f3f4f6; padding-top: 14px; display: flex; flex-direction: column; gap: 10px; }
  .feat-exp-item { display: flex; align-items: flex-start; gap: 10px; }
  .feat-exp-icon { width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0; background: var(--cat-glow); border: 1px solid var(--cat-border); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; }
  .feat-exp-label { font-size: 0.85rem; font-weight: 600; color: #1e1b4b; margin-bottom: 2px; }
  .feat-exp-desc { font-size: 0.78rem; color: #9ca3af; line-height: 1.55; }
  .feat-expand-btn { width: 100%; margin-top: 14px; background: none; border: 1px solid #e5e7eb; border-radius: 10px; padding: 8px; color: #9ca3af; font-size: 0.78rem; font-weight: 600; cursor: pointer; font-family: 'Inter', sans-serif; transition: all 0.2s; }
  .feat-expand-btn:hover { background: #f9fafb; color: #374151; }
  .feat-cat-expanded .feat-expand-btn { color: var(--cat-color); border-color: var(--cat-border); }
  .feat-cta { background: linear-gradient(135deg,#f0f4ff,#e0f2fe); border: 1px solid rgba(79,70,229,0.18); border-radius: 24px; padding: 56px 40px; text-align: center; position: relative; overflow: hidden; }
  .feat-cta h2 { font-size: 1.6rem; font-weight: 900; color: #1e1b4b; margin: 0 0 10px; }
  .feat-cta p { font-size: 0.95rem; color: #6b7280; margin: 0 0 28px; }
  .feat-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .feat-btn-primary { padding: 13px 32px; background: linear-gradient(135deg,#4f46e5,#0ea5e9); color: #fff; border-radius: 12px; font-weight: 700; font-size: 0.95rem; text-decoration: none; box-shadow: 0 4px 20px rgba(79,70,229,0.3); transition: all 0.3s ease; }
  .feat-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(79,70,229,0.45); color: #fff; }
  .feat-btn-secondary { padding: 13px 32px; background: #fff; border: 1px solid #e5e7eb; color: #374151; border-radius: 12px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.2s ease; }
  .feat-btn-secondary:hover { background: #f9fafb; border-color: #d1d5db; color: #111827; }
  @media (max-width: 960px) { .feat-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 640px) { .feat-grid { grid-template-columns: 1fr; } .feat-stats { grid-template-columns: repeat(2,1fr); } .feat-cta { padding: 36px 20px; } }
`}</style>

      <div className="feat-page">
        <div className="feat-inner">

          {/* Hero */}
          <div className="feat-hero">
            <div className="feat-eyebrow">
              <span className="feat-eyebrow-dot" />
              Platform Features
            </div>
            <h1 className="feat-title">Everything You Need to<br /><span>Level Up as a Developer</span></h1>
            <p className="feat-subtitle">
              Quicky combines a production-grade code editor, structured learning paths, community collaboration, and smart analytics — all in one beautifully designed platform.
            </p>
          </div>

          {/* Stats */}
          <div className="feat-stats">
            {STATS.map((s, i) => (
              <div key={i} className="feat-stat">
                <div className="feat-stat-val">{s.value}</div>
                <div className="feat-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="feat-grid">
            {FEATURE_CATEGORIES.map((cat, ci) => {
              const expanded = active === ci;
              return (
                <div
                  key={ci}
                  className={`feat-cat${expanded ? ' feat-cat-expanded' : ''}`}
                  style={{ '--cat-color': cat.color, '--cat-glow': cat.glow, '--cat-border': cat.border }}
                >
                  <div className="feat-cat-head">
                    <div className="feat-cat-icon">{cat.icon}</div>
                    <span className="feat-cat-title">{cat.title}</span>
                    <span className="feat-cat-count">{cat.items.length}</span>
                  </div>

                  {/* Preview — first 3 items always visible */}
                  <div className="feat-preview">
                    {cat.items.slice(0, 3).map((item, ii) => (
                      <div key={ii} className="feat-preview-item">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                    {cat.items.length > 3 && !expanded && (
                      <div className="feat-preview-item" style={{ color: 'rgba(255,255,255,0.28)', fontStyle: 'italic' }}>
                        +{cat.items.length - 3} more…
                      </div>
                    )}
                  </div>

                  {/* Expanded — all items with descriptions */}
                  {expanded && (
                    <div className="feat-expanded-items">
                      {cat.items.map((item, ii) => (
                        <div key={ii} className="feat-exp-item">
                          <div className="feat-exp-icon">{item.icon}</div>
                          <div>
                            <div className="feat-exp-label">{item.label}</div>
                            <div className="feat-exp-desc">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="feat-expand-btn" onClick={() => setActive(expanded ? null : ci)}>
                    {expanded ? '▲ Collapse' : '▼ View all features'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="feat-cta">
            <h2>Ready to Build Something Great?</h2>
            <p>Start with a free account and unlock the full platform when you're ready to go pro.</p>
            <div className="feat-cta-btns">
              <a href="/signup" className="feat-btn-primary">Get Started Free →</a>
              <a href="/Practice" className="feat-btn-secondary">Try the Practice Arena</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}