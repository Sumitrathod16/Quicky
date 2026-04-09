import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import "./Landing.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="lp-root">
      <header className="lp-topbar">
        <div className="lp-shell lp-topbar-inner">
          <Link to="/" className="lp-brand" aria-label="Quicky home">
            <span className="lp-brand-badge" aria-hidden="true" />
            <span>Quicky</span>
          </Link>

          <nav className="lp-nav" aria-label="Landing navigation">
            <a className="lp-link" href="#features">Features</a>
            <a className="lp-link" href="#how">How it works</a>
            <a className="lp-link" href="#start">Get started</a>
            <div className="lp-cta">
              <Link className="lp-btn" to="/login">Log in</Link>
              <Link className="lp-btn lp-btn-primary" to="/signup">Start free</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="lp-shell">
        <section className="lp-hero">
          <div className="lp-hero-grid">
            <div>
              <div className="lp-kicker">
                <span className="lp-kicker-dot" aria-hidden="true" />
                Learn faster. Build more. Track progress.
              </div>

              <h1 className="lp-h1">
                Become job‑ready with <span>guided learning</span> and real practice.
              </h1>
              <p className="lp-sub">
                Courses, practice arena, assignments, and a profile that tracks your growth — all in one place.
              </p>

              <div className="lp-hero-actions">
                <button className="lp-btn lp-btn-primary" onClick={() => navigate("/signup")}>
                  Start free
                </button>
                <button
                  className="lp-btn"
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore features
                </button>
              </div>

              <div className="lp-micro" aria-label="Quick stats">
                <span><b>30+</b> courses</span>
                <span><b>Practice</b> with autosave</span>
                <span><b>Progress</b> dashboard</span>
              </div>
            </div>

            <div className="lp-panel" aria-label="Product preview">
              <div className="lp-panel-top">
                <div className="lp-dots" aria-hidden="true">
                  <span className="lp-dot r" />
                  <span className="lp-dot y" />
                  <span className="lp-dot g" />
                </div>
                <div className="lp-panel-title">Practice → autosave + results</div>
              </div>
              <div className="lp-code">
                <div className="cm">{`// problem: two sum`}</div>
                <div>{`const `}<span className="fn">twoSum</span>{` = (nums, target) => {`}</div>
                <div>{`  `}<span className="kw">const</span>{` map = new Map();`}</div>
                <div>{`  `}<span className="kw">for</span>{` (let i = 0; i < nums.length; i++) {`}</div>
                <div>{`    `}<span className="kw">const</span>{` need = target - nums[i];`}</div>
                <div>{`    `}<span className="kw">if</span>{` (map.has(need)) `}<span className="kw">return</span>{` [map.get(need), i];`}</div>
                <div>{`    map.set(nums[i], i);`}</div>
                <div>{`  }`}</div>
                <div>{`  `}<span className="kw">return</span>{` [];`}</div>
                <div>{`};`}</div>
                <div className="cm">{`\n// ✓ saved · ✓ tests passed`}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="lp-section">
          <div className="lp-section-h">
            <div>
              <h2 className="lp-h2">Everything you need to keep momentum</h2>
              <p className="lp-h2-sub">
                A clean workflow from learning → practice → tracking, designed to feel fast and motivating.
              </p>
            </div>
          </div>

          <div className="lp-cards">
            <div className="lp-card">
              <div className="lp-card-ico">⚡</div>
              <h3>Practice with autosave</h3>
              <p>Your code saves while you type, so you never lose progress — and you can pick up instantly.</p>
            </div>
            <div className="lp-card">
              <div className="lp-card-ico">📈</div>
              <h3>Track growth in Profile</h3>
              <p>See streaks, points, course progress and more — everything visible in one dashboard.</p>
            </div>
            <div className="lp-card">
              <div className="lp-card-ico">🧩</div>
              <h3>Assignments + submissions</h3>
              <p>Submit work, review status, and keep your learning measurable and structured.</p>
            </div>
          </div>
        </section>

        <section id="how" className="lp-section">
          <div className="lp-section-h">
            <div>
              <h2 className="lp-h2">How it works</h2>
              <p className="lp-h2-sub">A simple loop that keeps you improving every day.</p>
            </div>
          </div>

          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">1</div>
              <h4>Learn a topic</h4>
              <p>Pick a course (React, JS, Python, Node, SQL, Cloud…) and follow clear modules.</p>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <h4>Practice immediately</h4>
              <p>Use the practice arena to apply what you just learned. Save and submit when ready.</p>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <h4>See progress</h4>
              <p>Your profile updates as you complete tasks — you always know what to do next.</p>
            </div>
          </div>
        </section>

        <section id="start" className="lp-section" style={{ paddingBottom: 34 }}>
          <div className="lp-cta-block">
            <div>
              <h3>Start learning in under a minute</h3>
              <p>Create an account, pick a track, and begin practicing with autosave and progress tracking.</p>
            </div>
            <div className="lp-cta">
              <Link className="lp-btn" to="/login">I already have an account</Link>
              <Link className="lp-btn lp-btn-primary" to="/signup">Create free account</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
