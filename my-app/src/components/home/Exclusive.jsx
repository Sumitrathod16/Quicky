import React from "react";
import Seo from "../../assets/seo.svg";
import Code from "../../assets/code.svg";
import bootstrap from "../../assets/bootstrap.svg";

function Exclusive() {
    const features = [
        {
            icon: Seo,
            alt: "Notes",
            emoji: "📚",
            title: "Notes & Resources",
            desc: "Comprehensive notes and curated resources for every topic — everything you need to study smarter.",
            accent: "#7c3aed",
            accentBg: "rgba(124,58,237,0.1)",
            border: "rgba(124,58,237,0.25)"
        },
        {
            icon: Code,
            alt: "Code",
            emoji: "💻",
            title: "100+ Programs",
            desc: "Clean, well-organized code examples that are easy to read, customize, and apply to real projects.",
            accent: "#0ea5e9",
            accentBg: "rgba(14,165,233,0.1)",
            border: "rgba(14,165,233,0.25)"
        },
        {
            icon: bootstrap,
            alt: "SEO",
            emoji: "🚀",
            title: "SEO-Friendly Markup",
            desc: "Semantic HTML structure ensures better search indexing, faster load times, and top SEO performance.",
            accent: "#10b981",
            accentBg: "rgba(16,185,129,0.1)",
            border: "rgba(16,185,129,0.25)"
        }
    ];

    return (
        <>
            <style>{`
                .exclusive-section {
                    padding: 100px 20px;
                    background: linear-gradient(180deg, #1a1535 0%, #0f0c29 100%);
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                .exclusive-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);
                }

                .exclusive-bg-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 400px;
                    background: radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                .exclusive-header {
                    text-align: center;
                    margin-bottom: 70px;
                    position: relative;
                    z-index: 1;
                }

                .exclusive-eyebrow {
                    display: inline-block;
                    padding: 6px 18px;
                    background: rgba(139,92,246,0.12);
                    border: 1px solid rgba(139,92,246,0.25);
                    border-radius: 100px;
                    color: #a78bfa;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 1.2rem;
                }

                .exclusive-title {
                    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
                    font-weight: 800;
                    color: #ffffff;
                    margin: 0 0 1rem;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                }

                .exclusive-title span {
                    background: linear-gradient(135deg, #a78bfa, #60a5fa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .exclusive-subtitle {
                    font-size: 1.05rem;
                    color: rgba(255,255,255,0.5);
                    max-width: 520px;
                    margin: 0 auto;
                    line-height: 1.65;
                }

                .exclusive-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
                    gap: 24px;
                    max-width: 1050px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                .exclusive-card {
                    background: rgba(255,255,255,0.02);
                    border-radius: 24px;
                    padding: 40px 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    transition: all 0.35s ease;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                }

                .exclusive-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                    border: 1px solid transparent;
                    transition: border-color 0.35s ease;
                }

                .exclusive-card-0::after { border-color: rgba(124,58,237,0.15); }
                .exclusive-card-1::after { border-color: rgba(14,165,233,0.15); }
                .exclusive-card-2::after { border-color: rgba(16,185,129,0.15); }

                .exclusive-card:hover {
                    transform: translateY(-10px);
                }

                .exclusive-card-0:hover { background: rgba(124,58,237,0.06); box-shadow: 0 20px 50px rgba(124,58,237,0.15); }
                .exclusive-card-1:hover { background: rgba(14,165,233,0.06); box-shadow: 0 20px 50px rgba(14,165,233,0.15); }
                .exclusive-card-2:hover { background: rgba(16,185,129,0.06); box-shadow: 0 20px 50px rgba(16,185,129,0.15); }

                .exclusive-card:hover::after {
                    border-color: transparent;
                }

                .exclusive-card-0:hover::after { border-color: rgba(124,58,237,0.4); }
                .exclusive-card-1:hover::after { border-color: rgba(14,165,233,0.4); }
                .exclusive-card-2:hover::after { border-color: rgba(16,185,129,0.4); }

                .exc-icon-row {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .exc-emoji {
                    font-size: 2rem;
                    line-height: 1;
                }

                .exc-icon-wrap {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }

                .exclusive-card:hover .exc-icon-wrap { transform: scale(1.1) rotate(-5deg); }

                .exclusive-card-0 .exc-icon-wrap { background: rgba(124,58,237,0.15); }
                .exclusive-card-1 .exc-icon-wrap { background: rgba(14,165,233,0.15); }
                .exclusive-card-2 .exc-icon-wrap { background: rgba(16,185,129,0.15); }

                .exc-icon {
                    width: 28px;
                    height: 28px;
                    object-fit: contain;
                }

                .exc-card-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                    line-height: 1.3;
                }

                .exc-card-desc {
                    font-size: 0.92rem;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.7;
                    margin: 0;
                }

                .exc-arrow {
                    margin-top: auto;
                    font-size: 1.2rem;
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.3s ease;
                }

                .exclusive-card-0 .exc-arrow { color: #a78bfa; }
                .exclusive-card-1 .exc-arrow { color: #38bdf8; }
                .exclusive-card-2 .exc-arrow { color: #34d399; }

                .exclusive-card:hover .exc-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }

                @media (max-width: 768px) {
                    .exclusive-section { padding: 70px 16px; }
                    .exclusive-grid { grid-template-columns: 1fr; max-width: 420px; }
                }
            `}</style>

            <section className="exclusive-section">
                <div className="exclusive-bg-glow"></div>

                <div className="exclusive-header">
                    <div className="exclusive-eyebrow">What makes us different</div>
                    <h2 className="exclusive-title">
                        Expertly Crafted with{" "}
                        <span>Exclusive Features</span>
                    </h2>
                    <p className="exclusive-subtitle">
                        Everything you need to go from beginner to job-ready developer, all in one place.
                    </p>
                </div>

                <div className="exclusive-grid">
                    {features.map((f, i) => (
                        <div key={i} className={`exclusive-card exclusive-card-${i}`}>
                            <div className="exc-icon-row">
                                <div className="exc-icon-wrap">
                                    <img src={f.icon} alt={f.alt} className="exc-icon" />
                                </div>
                            </div>
                            <h3 className="exc-card-title">{f.title}</h3>
                            <p className="exc-card-desc">{f.desc}</p>
                            <div className="exc-arrow">→</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Exclusive;
