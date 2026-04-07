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
                    background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
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
                    background: radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
                                radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 60%);
                    pointer-events: none;
                }

                .main-hero::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-image: 
                        radial-gradient(circle at 20% 50%, rgba(120,119,198,0.08) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,107,107,0.05) 0%, transparent 50%);
                    pointer-events: none;
                }

                /* Floating orbs */
                .orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(60px);
                    opacity: 0.5;
                    pointer-events: none;
                    animation: floatOrb 8s ease-in-out infinite;
                }
                .orb-1 {
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(139,92,246,0.4), transparent);
                    top: 10%; left: 5%;
                    animation-delay: 0s;
                }
                .orb-2 {
                    width: 200px; height: 200px;
                    background: radial-gradient(circle, rgba(59,130,246,0.3), transparent);
                    top: 60%; right: 10%;
                    animation-delay: 3s;
                }
                .orb-3 {
                    width: 150px; height: 150px;
                    background: radial-gradient(circle, rgba(245,158,11,0.2), transparent);
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
                    background: rgba(139, 92, 246, 0.15);
                    border: 1px solid rgba(139, 92, 246, 0.3);
                    border-radius: 100px;
                    color: #a78bfa;
                    font-size: 0.85rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                    backdrop-filter: blur(10px);
                    animation: fadeInDown 0.6s ease both;
                }

                .badge-dot {
                    width: 8px;
                    height: 8px;
                    background: #a78bfa;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                }

                .main-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1.15;
                    margin: 0 0 1.5rem;
                    letter-spacing: -0.02em;
                    animation: fadeInUp 0.7s ease 0.1s both;
                }

                .main-title .gradient-text {
                    background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #34d399 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .main-desc {
                    font-size: 1.15rem;
                    color: rgba(255, 255, 255, 0.6);
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
                    background: linear-gradient(135deg, #7c3aed, #4f46e5);
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
                    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
                    font-family: 'Inter', sans-serif;
                }

                .explore-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 30px rgba(124, 58, 237, 0.6);
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
                    background: rgba(255,255,255,0.05);
                    color: rgba(255,255,255,0.85);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 100px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    font-family: 'Inter', sans-serif;
                }

                .secondary-button:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.3);
                    transform: translateY(-3px);
                    color: white;
                }

                /* Tech logos */
                .logo-section {
                    animation: fadeInUp 0.7s ease 0.4s both;
                }

                .logo-label {
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.35);
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
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .tech-badge:hover {
                    background: rgba(139, 92, 246, 0.15);
                    border-color: rgba(139, 92, 246, 0.4);
                    transform: translateY(-6px) scale(1.05);
                    box-shadow: 0 10px 30px rgba(139,92,246,0.2);
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
                    background: linear-gradient(135deg, #a78bfa, #60a5fa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .stat-label {
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.45);
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                .stat-divider {
                    width: 1px;
                    background: rgba(255,255,255,0.1);
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
