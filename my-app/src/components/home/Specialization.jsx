import React from "react";
import bookLogo from "../../assets/book.svg";
import authorLogo from "../../assets/author.svg";
import trendsetterLogo from "../../assets/trendesetter.svg";

function Specialization() {
    const items = [
        {
            icon: bookLogo,
            alt: "Book Logo",
            title: "Elite Curriculum",
            desc: "Made by elite authors with real-world expertise and industry experience",
            gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            glow: "rgba(124, 58, 237, 0.3)"
        },
        {
            icon: authorLogo,
            alt: "Author logo",
            title: "Expert Instructors",
            desc: "Learn directly from exclusive authors and industry professionals",
            gradient: "linear-gradient(135deg, #0ea5e9, #2563eb)",
            glow: "rgba(14, 165, 233, 0.3)"
        },
        {
            icon: trendsetterLogo,
            alt: "Trendsetter Logo",
            title: "Trending Playlists",
            desc: "Access curated trendsetter playlists that are always up to date",
            gradient: "linear-gradient(135deg, #10b981, #059669)",
            glow: "rgba(16, 185, 129, 0.3)"
        }
    ];

    return (
        <>
            <style>{`
                .spec-section {
                    padding: 90px 20px;
                    background: linear-gradient(180deg, #0f0c29 0%, #1a1535 100%);
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                .spec-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent);
                }

                .spec-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .spec-eyebrow {
                    display: inline-block;
                    padding: 6px 18px;
                    background: rgba(139, 92, 246, 0.12);
                    border: 1px solid rgba(139, 92, 246, 0.25);
                    border-radius: 100px;
                    color: #a78bfa;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 1.2rem;
                }

                .spec-title {
                    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
                    font-weight: 800;
                    color: #ffffff;
                    margin: 0 0 1rem;
                    letter-spacing: -0.02em;
                }

                .spec-desc-text {
                    font-size: 1.05rem;
                    color: rgba(255,255,255,0.5);
                    max-width: 500px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .spec-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .spec-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 20px;
                    padding: 36px 28px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                    transition: all 0.35s ease;
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                }

                .spec-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    opacity: 0;
                    transition: opacity 0.35s ease;
                }

                .spec-card:hover {
                    transform: translateY(-8px);
                    background: rgba(255,255,255,0.06);
                    border-color: rgba(255,255,255,0.15);
                }

                .spec-card:hover::before {
                    opacity: 1;
                }

                .spec-card-0::before { background: linear-gradient(90deg, #7c3aed, #4f46e5); }
                .spec-card-1::before { background: linear-gradient(90deg, #0ea5e9, #2563eb); }
                .spec-card-2::before { background: linear-gradient(90deg, #10b981, #059669); }

                .spec-icon-wrap {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .spec-card-0 .spec-icon-wrap { background: rgba(124,58,237,0.15); }
                .spec-card-1 .spec-icon-wrap { background: rgba(14,165,233,0.15); }
                .spec-card-2 .spec-icon-wrap { background: rgba(16,185,129,0.15); }

                .spec-icon {
                    width: 32px;
                    height: 32px;
                    object-fit: contain;
                    filter: brightness(1.2);
                    transition: transform 0.3s ease;
                }

                .spec-card:hover .spec-icon {
                    transform: scale(1.15) rotate(-5deg);
                }

                .spec-card-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }

                .spec-card-desc {
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.65;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .spec-section { padding: 70px 16px; }
                    .spec-grid { grid-template-columns: 1fr; max-width: 420px; }
                }
            `}</style>

            <section className="spec-section">
                <div className="spec-header">
                    <div className="spec-eyebrow">Why choose us</div>
                    <h2 className="spec-title">Specialization</h2>
                    <p className="spec-desc-text">Discover our specialized services tailored to help you grow faster and smarter.</p>
                </div>

                <div className="spec-grid">
                    {items.map((item, i) => (
                        <div key={i} className={`spec-card spec-card-${i}`}>
                            <div className="spec-icon-wrap">
                                <img src={item.icon} alt={item.alt} className="spec-icon" />
                            </div>
                            <h3 className="spec-card-title">{item.title}</h3>
                            <p className="spec-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Specialization;