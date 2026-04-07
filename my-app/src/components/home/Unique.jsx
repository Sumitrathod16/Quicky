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
                    background: linear-gradient(180deg, #0f0c29 0%, #1a1535 100%);
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                }

                .unique-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);
                }

                .unique-glow {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 500px;
                    height: 300px;
                    background: radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%);
                    pointer-events: none;
                }

                .unique-content {
                    position: relative;
                    z-index: 1;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .unique-number {
                    font-size: clamp(5rem, 12vw, 9rem);
                    font-weight: 900;
                    background: linear-gradient(135deg, rgba(124,58,237,0.3), rgba(79,70,229,0.15));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1;
                    margin: 0;
                    letter-spacing: -0.04em;
                }

                .unique-title {
                    font-size: clamp(1.8rem, 4vw, 3rem);
                    font-weight: 800;
                    color: #ffffff;
                    margin: -10px 0 1.5rem;
                    letter-spacing: -0.02em;
                    line-height: 1.15;
                }

                .unique-title span {
                    background: linear-gradient(135deg, #a78bfa, #60a5fa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .unique-desc {
                    font-size: 1.05rem;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.7;
                    max-width: 560px;
                    margin: 0 auto 3rem;
                }

                .unique-badges {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .unique-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 24px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 100px;
                    color: rgba(255,255,255,0.75);
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    cursor: default;
                }

                .unique-badge:hover {
                    background: rgba(139,92,246,0.1);
                    border-color: rgba(139,92,246,0.3);
                    color: #ffffff;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(139,92,246,0.15);
                }

                .unique-badge-icon {
                    width: 22px;
                    height: 22px;
                    object-fit: contain;
                    opacity: 0.8;
                }

                .unique-cta {
                    margin-top: 3rem;
                }

                .unique-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 32px;
                    background: linear-gradient(135deg, #7c3aed, #4f46e5);
                    color: white;
                    border: none;
                    border-radius: 100px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(124,58,237,0.35);
                    font-family: 'Inter', sans-serif;
                }

                .unique-cta-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 30px rgba(124,58,237,0.5);
                    color: white;
                }

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