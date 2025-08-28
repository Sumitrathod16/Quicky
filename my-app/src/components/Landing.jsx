import React, { useEffect, useState } from "react";
import userImg from '../assets/user.svg';
import aiImg from '../assets/ai.svg';
import codeImg from '../assets/code.svg';
import trendImg from '../assets/trendesetter.svg';
import portfolioImg from '../assets/portfolio.svg';

function LandingPage() {
  const codeLines = [
    "const user = new User('You');",
    "user.learn('AI', 'ML', 'Web', 'Cloud');",
    "user.connect(community);",
    "user.buildPortfolio();",
    "user.getOpportunities();",
    "user.levelUp(); // 🚀",
  ];
  const [displayed, setDisplayed] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx < codeLines.length) {
      if (charIdx < codeLines[lineIdx].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + codeLines[lineIdx][charIdx]);
          setCharIdx(charIdx + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setDisplayed((prev) => prev + "\n");
        setLineIdx(lineIdx + 1);
        setCharIdx(0);
      }
    }
  }, [charIdx, lineIdx]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <style>{`
        .landing-bg {
          min-height: 100vh;
          background: linear-gradient(120deg, black 0%, #181818 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px;
        }
        .glass-card {
          background: rgba(255,255,255,0.12);
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 36px 28px;
          max-width: 720px;
          width: 100%;
          text-align: center;
          margin-bottom: 40px;
        }
        .landing-title {
          font-size: 2.5em;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: 1px;
          text-shadow: 0 2px 16px black;
        }
        .landing-desc {
          font-size: 1.1em;
          color: #e0e0e0;
          margin-bottom: 28px;
          line-height: 1.6;
        }
        .cta-btn {
          background: linear-gradient(90deg, red 60%, #ff9800 100%);
          color: #fff;
          font-size: 1.05em;
          font-weight: bold;
          padding: 14px 32px;
          border: none;
          border-radius: 12px;
          box-shadow: 0 2px 12px #00bfff44;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 4px 24px #ff9800aa;
        }
        .info-containers {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 20px;
          width: 100%;
          max-width: 1200px;
        }
        .info-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px 0 rgba(31,38,135,0.22);
          padding: 28px 20px;
          flex: 1 1 calc(33.33% - 24px);
          max-width: 320px;
          min-width: 240px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .info-card:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 8px 32px #00bfff55;
        }
        .info-img {
          width: 64px;
          height: 64px;
          margin-bottom: 16px;
          filter: drop-shadow(0 2px 8px #00bfff88);
        }
        .info-card h2 {
          font-size: 1.2em;
          font-weight: 700;
          color: #00bfff;
          margin-bottom: 8px;
        }
        .info-card p {
          font-size: 0.95em;
          color: #222;
          margin-bottom: 0;
        }
        .coding-animation {
          background: #181818;
          color: #00bfff;
          font-family: 'Fira Mono', 'Consolas', monospace;
          font-size: 1em;
          border-radius: 16px;
          box-shadow: 0 4px 24px #00bfff44;
          padding: 20px;
          margin: 40px auto 0 auto;
          max-width: 600px;
          min-height: 120px;
          letter-spacing: 1px;
          overflow: hidden;
          width: 100%;
        }
        .coding-cursor {
          display: inline-block;
          width: 8px;
          height: 1.2em;
          background: #00bfff;
          margin-left: 2px;
          animation: blink 1s steps(2, start) infinite;
          vertical-align: middle;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        /* 📱 Mobile Screens */
        @media (max-width: 768px) {
          .landing-title { font-size: 2em; }
          .landing-desc { font-size: 1em; }
          .cta-btn { width: 100%; }
          .info-containers { flex-direction: column; align-items: center; }
          .info-card { flex: 1 1 100%; max-width: 100%; }
          .glass-card { padding: 24px 16px; }
          .coding-animation { font-size: 0.9em; padding: 16px; }
        }
        /* 📱 Small Phones */
        @media (max-width: 480px) {
          .landing-title { font-size: 1.6em; }
          .landing-desc { font-size: 0.9em; }
          .cta-btn { font-size: 1em; padding: 12px 24px; }
          .info-img { width: 48px; height: 48px; }
        }
      `}</style>

      <div className="landing-bg">
        <div className="glass-card">
          <div className="landing-title">Welcome to Services: Your Gateway to Tech Excellence</div>
          <div className="landing-desc">
            <b>Why Services?</b><br />
            Services empowers students, professionals, and tech enthusiasts with assignments, project resources, and real-world learning. <br /><br />
            <b>Key Features:</b><br />
            <ul style={{textAlign:'left', margin:'0 auto', maxWidth:'400px'}}>
              <li><b>Assignments:</b> Practice skills in AI, ML, Web Development, Cloud, and more.</li>
              <li><b>Expert Guidance:</b> Tutorials, docs, and industry support.</li>
              <li><b>Career Growth:</b> Explore internships and opportunities.</li>
              <li><b>Community:</b> Connect, collaborate, and grow together.</li>
              <li><b>Modern & Secure:</b> Privacy-first design and seamless login.</li>
            </ul>
          </div>
          <button className="cta-btn" onClick={() => window.location.href='/login'}>
            Enter Website
          </button>
        </div>

        <div className="info-containers">
          <div className="info-card animate__animated animate__fadeInLeft">
            <img src={aiImg} alt="AI" className="info-img" />
            <h2>AI & ML Integration</h2>
            <p>Hands-on AI/ML projects to build career-ready skills.</p>
          </div>
          <div className="info-card animate__animated animate__fadeInUp">
            <img src={codeImg} alt="Code" className="info-img" />
            <h2>Code Collaboration</h2>
            <p>Collaborate, share, and learn with global coders.</p>
          </div>
          <div className="info-card animate__animated animate__fadeInRight">
            <img src={trendImg} alt="Trends" className="info-img" />
            <h2>Stay Ahead</h2>
            <p>Get the latest updates on tech frameworks and trends.</p>
          </div>
          <div className="info-card animate__animated animate__zoomIn">
            <img src={portfolioImg} alt="Portfolio" className="info-img" />
            <h2>Portfolio Builder</h2>
            <p>Showcase projects to employers and institutions.</p>
          </div>
          <div className="info-card animate__animated animate__fadeIn">
            <img src={userImg} alt="User" className="info-img" />
            <h2>Personalized Experience</h2>
            <p>Tailored dashboard and recommendations for your goals.</p>
          </div>
        </div>

        <div className="coding-animation">
          <pre style={{margin:0, whiteSpace:'pre-wrap'}}>
            {displayed}
            <span className="coding-cursor" />
          </pre>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
