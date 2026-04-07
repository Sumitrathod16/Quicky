import React, { useState } from 'react';

const CHANNELS = [
  { icon: '📧', title: 'Email Support', info: 'saarshop31@gmail.com', sub: 'Replies within 24 hours', color: '#60a5fa', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.18)', href: 'mailto:saarshop31@gmail.com' },
  { icon: '💬', title: 'Community Forum', info: 'community.quicky.dev', sub: 'Get help from 50K+ learners', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)', href: '/FAQ' },
  { icon: '📍', title: 'Our Location', info: 'Pune, Maharashtra, India', sub: 'Available Mon – Fri, 10am – 6pm IST', color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.18)', href: '#' },
];

const QUICK_LINKS = [
  { q: 'How do I reset my password?', href: '/FAQ' },
  { q: 'How do I cancel my subscription?', href: '/FAQ' },
  { q: 'How can I report a bug?', href: '/FAQ' },
  { q: 'Where do I find my certificates?', href: '/FAQ' },
  { q: 'How do I join a study group?', href: '/FAQ' },
];

export default function Support() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .sup-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 55%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .sup-page::before {
          content: '';
          position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, transparent 68%);
          pointer-events: none;
        }
        .sup-inner { max-width: 1060px; margin: 0 auto; position: relative; z-index: 1; }

        /* Hero */
        .sup-hero { text-align: center; margin-bottom: 64px; }
        .sup-eyebrow {
          display: inline-block; padding: 6px 18px;
          background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.22);
          border-radius: 100px; color: #60a5fa; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.2rem;
        }
        .sup-title { font-size: clamp(2rem,4vw,2.8rem); font-weight: 900; color: #fff; margin: 0 0 1rem; letter-spacing: -0.03em; }
        .sup-title span {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sup-subtitle { font-size: 1rem; color: rgba(255,255,255,0.45); max-width: 500px; margin: 0 auto; line-height: 1.7; }

        /* Channels */
        .sup-channels { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 60px; }
        .sup-channel {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px; padding: 24px; text-decoration: none;
          transition: all 0.3s ease; display: block;
        }
        .sup-channel:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.25); }
        .sup-ch-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center; font-size: 1.4rem;
          margin-bottom: 14px;
        }
        .sup-ch-title { font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.88); margin-bottom: 4px; }
        .sup-ch-info { font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; }
        .sup-ch-sub { font-size: 0.78rem; color: rgba(255,255,255,0.38); }

        /* Two-col layout */
        .sup-body { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 48px; }

        /* Contact form */
        .sup-form-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 32px;
        }
        .sup-card-label { font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.28); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
        .sup-card-title { font-size: 1.15rem; font-weight: 800; color: #fff; margin: 0 0 8px; }
        .sup-card-sub { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 0 0 24px; }

        .sup-form { display: flex; flex-direction: column; gap: 12px; }
        .sup-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .sup-field { display: flex; flex-direction: column; gap: 6px; }
        .sup-field label { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); }
        .sup-field input, .sup-field select, .sup-field textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 11px 14px;
          color: #fff; font-size: 0.87rem; font-family: 'Inter', sans-serif;
          transition: all 0.2s ease; outline: none; resize: none;
        }
        .sup-field input::placeholder, .sup-field textarea::placeholder { color: rgba(255,255,255,0.25); }
        .sup-field input:focus, .sup-field select:focus, .sup-field textarea:focus {
          border-color: rgba(96,165,250,0.4); background: rgba(96,165,250,0.05);
          box-shadow: 0 0 0 3px rgba(96,165,250,0.1);
        }
        .sup-field select { cursor: pointer; appearance: none; }
        .sup-field select option { background: #1a1535; color: #fff; }
        .sup-submit {
          padding: 13px; border-radius: 12px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border: none; color: #fff; font-weight: 700; font-size: 0.92rem;
          cursor: pointer; font-family: 'Inter', sans-serif;
          box-shadow: 0 4px 16px rgba(59,130,246,0.35);
          transition: all 0.3s ease; margin-top: 4px;
        }
        .sup-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,130,246,0.5); }

        /* Success state */
        .sup-success {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 12px; padding: 40px 20px; text-align: center;
        }
        .sup-success-icon { font-size: 3rem; }
        .sup-success h3 { font-size: 1.1rem; font-weight: 800; color: #fff; margin: 0; }
        .sup-success p { font-size: 0.88rem; color: rgba(255,255,255,0.45); margin: 0; }

        /* Right side */
        .sup-right { display: flex; flex-direction: column; gap: 16px; }
        .sup-faq-card, .sup-tips-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 28px; flex: 1;
        }
        .sup-faq-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
        .sup-faq-list li a {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 12px; border-radius: 10px;
          color: rgba(255,255,255,0.58); text-decoration: none;
          font-size: 0.84rem; font-weight: 500; transition: all 0.2s;
        }
        .sup-faq-list li a:hover { background: rgba(255,255,255,0.05); color: #fff; }
        .sup-faq-arrow { color: rgba(255,255,255,0.22); margin-left: auto; font-size: 0.75rem; }

        .sup-tips-grid { display: flex; flex-direction: column; gap: 8px; }
        .sup-tip { display: flex; align-items: flex-start; gap: 10px; padding: 12px; border-radius: 10px; background: rgba(255,255,255,0.02); }
        .sup-tip-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
        .sup-tip-text { font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.55; }
        .sup-tip-text strong { color: rgba(255,255,255,0.78); font-weight: 600; }

        /* Bottom CTA */
        .sup-bottom {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px; padding: 32px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;
        }
        .sup-bottom h3 { font-size: 1rem; font-weight: 700; color: #fff; margin: 0 0 4px; }
        .sup-bottom p { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 0; }
        .sup-bottom-btn {
          padding: 11px 26px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border-radius: 10px; color: #fff; font-weight: 700; font-size: 0.88rem;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 14px rgba(124,58,237,0.35); transition: all 0.2s ease;
        }
        .sup-bottom-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(124,58,237,0.5); }

        @media (max-width: 860px) { .sup-body { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .sup-channels { grid-template-columns: 1fr; } .sup-row { grid-template-columns: 1fr; } }
      `}</style>

      <div className="sup-page">
        <div className="sup-inner">

          {/* Hero */}
          <div className="sup-hero">
            <div className="sup-eyebrow">Support Center</div>
            <h1 className="sup-title">We're Here to <span>Help You</span></h1>
            <p className="sup-subtitle">Got a question, bug report, or just need a hand? Reach out through any of the channels below — we respond fast.</p>
          </div>

          {/* Channels */}
          <div className="sup-channels">
            {CHANNELS.map((ch, i) => (
              <a key={i} href={ch.href} className="sup-channel" style={{ borderColor: ch.border }}>
                <div className="sup-ch-icon" style={{ background: ch.bg, border: `1px solid ${ch.border}` }}>{ch.icon}</div>
                <div className="sup-ch-title">{ch.title}</div>
                <div className="sup-ch-info" style={{ color: ch.color }}>{ch.info}</div>
                <div className="sup-ch-sub">{ch.sub}</div>
              </a>
            ))}
          </div>

          {/* Body */}
          <div className="sup-body">

            {/* Contact Form */}
            <div className="sup-form-card">
              <p className="sup-card-label">Message Us</p>
              <h2 className="sup-card-title">Send a Support Ticket</h2>
              <p className="sup-card-sub">We typically respond within 24 hours on business days.</p>
              {sent ? (
                <div className="sup-success">
                  <div className="sup-success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="sup-form" onSubmit={handleSubmit}>
                  <div className="sup-row">
                    <div className="sup-field">
                      <label>Your Name</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Sumit Rathod" required />
                    </div>
                    <div className="sup-field">
                      <label>Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="sup-field">
                    <label>Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Choose a topic…</option>
                      <option value="bug">🐛 Bug Report</option>
                      <option value="account">👤 Account Issue</option>
                      <option value="billing">💳 Billing & Payments</option>
                      <option value="feature">💡 Feature Request</option>
                      <option value="other">📝 Other</option>
                    </select>
                  </div>
                  <div className="sup-field">
                    <label>Message</label>
                    <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Describe your issue in detail…" required />
                  </div>
                  <button type="submit" className="sup-submit">Send Message →</button>
                </form>
              )}
            </div>

            {/* Right */}
            <div className="sup-right">
              {/* FAQ */}
              <div className="sup-faq-card">
                <p className="sup-card-label">Quick Answers</p>
                <h2 className="sup-card-title" style={{ fontSize: '1rem', marginBottom: 16 }}>Common Questions</h2>
                <ul className="sup-faq-list">
                  {QUICK_LINKS.map((l, i) => (
                    <li key={i}>
                      <a href={l.href}>
                        <span>❓</span> {l.q}
                        <span className="sup-faq-arrow">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              <div className="sup-tips-card">
                <p className="sup-card-label">Before You Write</p>
                <div className="sup-tips-grid">
                  <div className="sup-tip">
                    <span className="sup-tip-icon">🔍</span>
                    <span className="sup-tip-text"><strong>Search first:</strong> Check our FAQ page — most answers are already there.</span>
                  </div>
                  <div className="sup-tip">
                    <span className="sup-tip-icon">📸</span>
                    <span className="sup-tip-text"><strong>Include screenshots:</strong> Attach any error messages or screenshots to speed up resolution.</span>
                  </div>
                  <div className="sup-tip">
                    <span className="sup-tip-icon">📋</span>
                    <span className="sup-tip-text"><strong>Share details:</strong> Your browser, OS, and steps to reproduce help us fix bugs faster.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="sup-bottom">
            <div>
              <h3>Browse our full documentation</h3>
              <p>Detailed guides, API references, and tutorials for every feature on the platform.</p>
            </div>
            <a href="/FAQ" className="sup-bottom-btn">Open Help Center →</a>
          </div>

        </div>
      </div>
    </>
  );
}