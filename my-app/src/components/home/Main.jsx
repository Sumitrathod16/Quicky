import React from "react";
import { Link } from "react-router-dom";
import CSS from "../../assets/css.svg";
import HTML from "../../assets/html.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import SQL from "../../assets/sql.svg";

function Main() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

                .main-hero {
                    min-height: 90vh;
                    background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 50%, #e0f2fe 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Inter', sans-serif;
                    padding: 80px 20px 60px;
                }

                .main-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(ellipse at 30% 20%, rgba(79,70,229,0.08) 0%, transparent 60%),
                                radial-gradient(ellipse at 70% 80%, rgba(14,165,233,0.07) 0%, transparent 60%);
                    pointer-events: none;
                }

                .main-hero::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-image:
                        radial-gradient(circle at 20% 50%, rgba(79,70,229,0.05) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(16,185,129,0.04) 0%, transparent 50%);
                    pointer-events: none;
                }

                /* Floating orbs */
                .orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(60px);
                    opacity: 0.6;
                    pointer-events: none;
                    animation: floatOrb 8s ease-in-out infinite;
                }
                .orb-1 {
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(79,70,229,0.18), transparent);
                    top: 10%; left: 5%;
                    animation-delay: 0s;
                }
                .orb-2 {
                    width: 200px; height: 200px;
                    background: radial-gradient(circle, rgba(14,165,233,0.15), transparent);
                    top: 60%; right: 10%;
                    animation-delay: 3s;
                }
                .orb-3 {
                    width: 150px; height: 150px;
                    background: radial-gradient(circle, rgba(16,185,129,0.12), transparent);
                    bottom: 20%; left: 30%;
                    animation-delay: 5s;
                }

                @keyframes floatOrb {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-20px) scale(1.05); }
                }

                .main-content {
                    position: relative;
                    z-index: 2;
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                }

                .badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 20px;
                    background: rgba(79,70,229,0.08);
                    border: 1px solid rgba(79,70,229,0.2);
                    border-radius: 100px;
                    color: #4f46e5;
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                    animation: fadeInDown 0.6s ease both;
                }

                .badge-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                    box-shadow: 0 0 0 3px rgba(16,185,129,0.2);
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                }

                .main-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    color: #1e1b4b;
                    line-height: 1.15;
                    margin: 0 0 1.5rem;
                    letter-spacing: -0.02em;
                    animation: fadeInUp 0.7s ease 0.1s both;
                }

                .main-title .gradient-text {
                    background: linear-gradient(135deg, #4f46e5 0%, #0ea5e9 50%, #10b981 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .main-desc {
                    font-size: 1.15rem;
                    color: #6b7280;
                    line-height: 1.7;
                    margin: 0 0 2.5rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    animation: fadeInUp 0.7s ease 0.2s both;
                }

                .buttons {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 16px;
                    margin-bottom: 3.5rem;
                    animation: fadeInUp 0.7s ease 0.3s both;
                }

                .explore-button {
                    padding: 14px 32px;
                    background: linear-gradient(135deg, #4f46e5, #0ea5e9);
                    color: white;
                    border: none;
                    border-radius: 100px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 700;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(79,70,229,0.3);
                    font-family: 'Inter', sans-serif;
                }

                .explore-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 30px rgba(79,70,229,0.5);
                    color: white;
                }

                .explore-button::after {
                    content: '→';
                    font-size: 1.1rem;
                    transition: transform 0.3s ease;
                }

                .explore-button:hover::after {
                    transform: translateX(4px);
                }

                .secondary-button {
                    padding: 14px 32px;
                    background: #fff;
                    color: #374151;
                    border: 1px solid #e5e7eb;
                    border-radius: 100px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
                    font-family: 'Inter', sans-serif;
                }

                .secondary-button:hover {
                    background: #f0f4ff;
                    border-color: rgba(79,70,229,0.3);
                    transform: translateY(-3px);
                    color: #4f46e5;
                    box-shadow: 0 4px 16px rgba(79,70,229,0.12);
                }

                /* Tech logos */
                .logo-section {
                    animation: fadeInUp 0.7s ease 0.4s both;
                }

                .logo-label {
                    font-size: 0.8rem;
                    color: #9ca3af;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    font-weight: 500;
                    margin-bottom: 1.2rem;
                }

                .logo-container {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .tech-badge {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: #fff;
                    border: 1px solid #e5e7eb;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .tech-badge:hover {
                    background: #f0f4ff;
                    border-color: rgba(79,70,229,0.3);
                    transform: translateY(-6px) scale(1.05);
                    box-shadow: 0 10px 30px rgba(79,70,229,0.15);
                }

                .tech-logo {
                    width: 32px;
                    height: 32px;
                    object-fit: contain;
                }

                /* Stats row */
                .stats-row {
                    display: flex;
                    justify-content: center;
                    gap: 40px;
                    margin-bottom: 2.5rem;
                    animation: fadeInUp 0.7s ease 0.35s both;
                    flex-wrap: wrap;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    display: block;
                    font-size: 2rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #4f46e5, #0ea5e9);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .stat-label {
                    font-size: 0.8rem;
                    color: #9ca3af;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                .stat-divider {
                    width: 1px;
                    background: #e5e7eb;
                    align-self: stretch;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .main-hero { padding: 60px 16px 50px; }
                    .stats-row { gap: 20px; }
                    .stat-divider { display: none; }
                }

                @media (max-width: 480px) {
                    .buttons { flex-direction: column; align-items: center; }
                    .explore-button, .secondary-button { width: 100%; justify-content: center; }
                }
            `}</style>



            <div className="main-hero">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>

                <div className="main-content">
                    <div className="badge">
                        <span className="badge-dot"></span>
                        Best way for learning
                    </div>

                    <h1 className="main-title">
                        The better way to learn{" "}
                        <span className="gradient-text">Web Development</span>
                    </h1>

                    <p className="main-desc">
                        We provide you the complete roadmap of web development with real projects,
                        hands-on exercises, and a thriving community to help you succeed.
                    </p>

                    <div className="stats-row">
                        <div className="stat-item">
                            <span className="stat-number">50K+</span>
                            <span className="stat-label">Students</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Success Rate</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <Link to="/Explorepage" className="explore-button">
                            Explore Courses
                        </Link>
                        <Link to="/features" className="secondary-button">
                            Learn More
                        </Link>
                    </div>

                    <div className="logo-section">
                        <p className="logo-label">Technologies you'll master</p>
                        <div className="logo-container">
                            <div className="tech-badge">
                                <img src={SQL} alt="SQL" className="tech-logo" />
                            </div>
                            <div className="tech-badge">
                                <img src={CSS} alt="CSS" className="tech-logo" />
                            </div>
                            <div className="tech-badge">
                                <img src={HTML} alt="HTML" className="tech-logo" />
                            </div>
                            <div className="tech-badge">
                                <img src={js} alt="JavaScript" className="tech-logo" />
                            </div>
                            <div className="tech-badge">
                                <img src={react} alt="React" className="tech-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
