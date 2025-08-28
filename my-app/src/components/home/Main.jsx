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
                .Container {
                    padding: 80px 20px 20px 20px;
                    background-color: black;
                    min-height: 60vh;
                    width: 100%;
                    margin: 0 auto;
                    box-sizing: border-box;
                }

                .box-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .box_title {
                    font-size: 1em;
                    color: white;
                    text-align: center;
                    padding: 6px 16px;
                    background-color: #333;
                    border-radius: 5px;
                    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
                    max-width: 300px;
                }

                .main-content {
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 0 10px;
                }

                .main-title {
                    font-size: 2.5em;
                    color: white;
                    margin-top: 10px;
                }

                .main-desc {
                    font-size: 1em;
                    color: #aaa;
                    margin-top: 10px;
                }

                .buttons {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 20px;
                }

                .explore-button {
                    padding: 10px 20px;
                    background-color: red;
                    color: black;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    text-decoration: none;
                }

                .explore-button:hover {
                    background-color: darkred;
                }

                .explore-button:active {
                    background-color: maroon;
                }

                .explore-button:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5);
                }

                .info-button {
                    padding: 10px 20px;
                    background-color: white;
                    color: black;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                }

                .info-button:hover {
                    background-color: #f0f0f0;
                }

                .info-button:active {
                    background-color: #e0e0e0;
                }

                .info-button:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5);
                }

                .logo-container {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-top: 30px;
                }

                .tech-logo {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s;
                }

                .tech-logo:hover {
                    transform: scale(1.1);
                }

                .tech-logo:active {
                    transform: scale(0.9);
                }

                .tech-logo:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5);
                }

                /* Responsive Styles */
                @media (max-width: 768px) {
                    .main-title {
                        font-size: 2em;
                    }

                    .main-desc {
                        font-size: 0.95em;
                    }

                    .tech-logo {
                        width: 40px;
                        height: 40px;
                    }
                }

                @media (max-width: 480px) {
                    .main-title {
                        font-size: 1.6em;
                    }

                    .main-desc {
                        font-size: 0.9em;
                    }

                    .box_title {
                        font-size: 0.9em;
                    }

                    .explore-button,
                    .info-button {
                        font-size: 0.9em;
                        padding: 8px 16px;
                    }

                    .tech-logo {
                        width: 35px;
                        height: 35px;
                    }
                }
            `}</style>

            <div className="Container">
                <div className="main-content">
                    <div className="box-container">
                        <h1 className="box_title">Best way for learning</h1>
                    </div>
                    <h1 className="main-title">The better way to learn Web-development</h1>
                    <p className="main-desc">
                        We provide you the roadmap of web-development and web-connections. The better way to learn.
                    </p>
                    <div className="buttons">
                        <Link to="/Explorepage" className="explore-button">
                            Explore More
                        </Link>
                    </div>
                    <div className="logo-container">
                        <img src={SQL} alt="SQL" className="tech-logo" />
                        <img src={CSS} alt="CSS" className="tech-logo" />
                        <img src={HTML} alt="HTML" className="tech-logo" />
                        <img src={js} alt="JavaScript" className="tech-logo" />
                        <img src={react} alt="React" className="tech-logo" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
