import React, { useEffect, useState } from 'react';

const allUpdates = [
  { category: 'Top Apps', tag: '#60a5fa', icon: '📱', title: 'ChatMaster hits 100M downloads!', description: 'ChatMaster, the popular messaging app, just reached 100 million downloads worldwide, cementing its place as the go-to communication platform for developers.', date: 'Apr 5, 2026' },
  { category: 'Companies', tag: '#34d399', icon: '🏢', title: 'TechSoft acquires InnovateX', description: 'In a landmark deal, TechSoft acquires InnovateX to expand its AI research capabilities and accelerate product innovation across its global engineering teams.', date: 'Apr 3, 2026' },
  { category: 'New Records', tag: '#f97316', icon: '⚡', title: 'QuantumComp breaks speed record', description: 'QuantumComp\'s new processor completes complex ML calculations 5x faster than any previous benchmark, setting a new global standard in computing performance.', date: 'Apr 1, 2026' },
  { category: 'Top Apps', tag: '#60a5fa', icon: '📸', title: 'PhotoSnap launches AI filters', description: 'PhotoSnap introduces real-time AI-powered filters and scene detection, transforming how creators capture and share content across platforms.', date: 'Mar 28, 2026' },
  { category: 'Companies', tag: '#34d399', icon: '💰', title: 'Cloudify raises $200M in Series C', description: 'Cloudify secures $200 million in Series C funding to accelerate cloud services expansion, with plans to triple its engineering workforce by end of year.', date: 'Mar 25, 2026' },
  { category: 'New Records', tag: '#f97316', icon: '🌍', title: 'OpenCode hits 1 million commits', description: 'OpenCode\'s open-source repository surpasses 1 million commits from contributors across 80+ countries — a testament to the power of collaborative development.', date: 'Mar 22, 2026' },
  { category: 'Top Apps', tag: '#60a5fa', icon: '💪', title: 'FitTrack integrates sleep monitoring', description: 'FitTrack now monitors sleep patterns using advanced biosensors and AI-driven insights, becoming a full-stack health companion for developers on the go.', date: 'Mar 18, 2026' },
  { category: 'New Records', tag: '#f97316', icon: '🌐', title: 'NetSpeed achieves 10 Gbps globally', description: 'NetSpeed rolls out 10 Gbps internet connectivity across multiple countries, bringing ultra-low latency networking to millions of developers and enterprises.', date: 'Mar 14, 2026' },
  { category: 'Companies', tag: '#34d399', icon: '🔬', title: 'DevWorks opens AI innovation hub', description: 'DevWorks launches a new research center focused on sustainable tech and AI, with a $50M annual research budget targeting climate and health solutions.', date: 'Mar 10, 2026' },
];

function shuffle(arr) { return [...arr].sort(() => 0.5 - Math.random()); }

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { setPosts(shuffle(allUpdates).slice(0, 6)); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .blog-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 50%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative;
        }
        .blog-page::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .blog-inner {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .blog-hero {
          text-align: center;
          margin-bottom: 56px;
        }
        .blog-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(96,165,250,0.1);
          border: 1px solid rgba(96,165,250,0.22);
          border-radius: 100px;
          color: #60a5fa;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .blog-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }
        .blog-title span {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .blog-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .blog-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.3s ease;
          animation: fadeUp 0.5s ease forwards;
          opacity: 0;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blog-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
        }
        .blog-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .blog-cat-badge {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .blog-icon { font-size: 1.4rem; }
        .blog-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: rgba(255,255,255,0.88);
          line-height: 1.4;
          margin: 0;
        }
        .blog-card-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          flex: 1;
        }
        .blog-card-date {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.25);
          font-weight: 500;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 10px;
        }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="blog-page">
        <div className="blog-inner">
          <div className="blog-hero">
            <div className="blog-eyebrow">Latest News</div>
            <h1 className="blog-title">Tech Updates &amp; <span>Records</span></h1>
            <p className="blog-subtitle">Stay ahead with the freshest updates from top apps, companies, and breakthrough records in the tech world.</p>
          </div>

          <div className="blog-grid">
            {posts.map((p, i) => (
              <div key={i} className="blog-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="blog-card-top">
                  <span className="blog-cat-badge" style={{ background: `${p.tag}15`, color: p.tag, border: `1px solid ${p.tag}30` }}>
                    {p.category}
                  </span>
                  <span className="blog-icon">{p.icon}</span>
                </div>
                <h2 className="blog-card-title">{p.title}</h2>
                <p className="blog-card-desc">{p.description}</p>
                <div className="blog-card-date">{p.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
