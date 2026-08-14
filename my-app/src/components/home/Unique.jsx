import React from 'react';
import Code from '../../assets/code.svg';
import User from '../../assets/user.svg';
import Update from '../../assets/update.svg';

function Unique() {
    const badges = [
        { icon: Code, label: "Well Organized Code" },
        { icon: User, label: "User-Friendly" },
        { icon: Update, label: "Regular Updates" }
    ];

    return (
        <>
            <style>{`
  .unique-section {
    padding: 100px 20px;
    background: linear-gradient(135deg, #f0f4ff 0%, #e0f2fe 100%);
    font-family: 'Inter', sans-serif;
    position: relative; overflow: hidden; text-align: center;
  }
  .unique-section::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(79,70,229,0.2), transparent);
  }
  .unique-glow {
    position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 500px; height: 300px;
    background: radial-gradient(ellipse, rgba(79,70,229,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
  .unique-content { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
  .unique-number {
    font-size: clamp(5rem, 12vw, 9rem); font-weight: 900;
    background: linear-gradient(135deg, rgba(79,70,229,0.2), rgba(14,165,233,0.12));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    line-height: 1; margin: 0; letter-spacing: -0.04em;
  }
  .unique-title {
    font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 800; color: #1e1b4b;
    margin: -10px 0 1.5rem; letter-spacing: -0.02em; line-height: 1.15;
  }
  .unique-title span {
    background: linear-gradient(135deg, #4f46e5, #0ea5e9);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .unique-desc { font-size: 1.05rem; color: #6b7280; line-height: 1.7; max-width: 560px; margin: 0 auto 3rem; }
  .unique-badges { display: flex; justify-content: center; flex-wrap: wrap; gap: 16px; }
  .unique-badge {
    display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px;
    background: #fff; border: 1px solid #e5e7eb; border-radius: 100px;
    color: #374151; font-size: 0.9rem; font-weight: 500;
    transition: all 0.3s ease; cursor: default;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
  .unique-badge:hover {
    background: #f0f4ff; border-color: rgba(79,70,229,0.3); color: #4f46e5;
    transform: translateY(-3px); box-shadow: 0 8px 20px rgba(79,70,229,0.12);
  }
  .unique-badge-icon { width: 22px; height: 22px; object-fit: contain; }
  .unique-cta { margin-top: 3rem; }
  .unique-cta-btn {
    display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px;
    background: linear-gradient(135deg, #4f46e5, #0ea5e9); color: white;
    border: none; border-radius: 100px; font-size: 1rem; font-weight: 700;
    cursor: pointer; text-decoration: none; transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(79,70,229,0.3); font-family: 'Inter', sans-serif;
  }
  .unique-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(79,70,229,0.45); color: white; }
  @media (max-width: 768px) {
    .unique-section { padding: 70px 16px; }
    .unique-badges { gap: 12px; }
  }
`}</style>

            <section className="unique-section">
                <div className="unique-glow"></div>

                <div className="unique-content">
                    <p className="unique-number">03+</p>
                    <h2 className="unique-title">
                        Pre-Built <span>Unique Projects</span>
                    </h2>
                    <p className="unique-desc">
                        Choose from stunning hero sections including video backgrounds, image covers,
                        and main layouts — all designed for maximum impact and flexibility.
                    </p>

                    <div className="unique-badges">
                        {badges.map((b, i) => (
                            <div key={i} className="unique-badge">
                                <img src={b.icon} alt={b.label} className="unique-badge-icon" />
                                <span>{b.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Unique;