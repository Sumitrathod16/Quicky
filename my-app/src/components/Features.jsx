import React from 'react';
function Features(){
    return(
        <>
        <div className="features">
            <h1 className="title">Features</h1>
            <div className="feature-list">
                <div className="feature-item">  
                    <h2>Core Learning Experience</h2>
                    <p>
                        <ul>
                            <li>User Dashboard</li>
                            <li>Course Player</li>
                            <li>Diverse Content Support</li>
                            <li>Progress Tracking</li>
                            <li>Powerful Search</li>
                            <li>Mobile Experience</li>
                        </ul>
                    </p>
                </div>
                <div className="feature-item">
                    <h2>Community & Collaboration</h2>
                    <p>
                        <ul>
                            <li>Q&A Discussion forum</li>
                            <li>Direct Messaging</li>
                            <li>Announcements</li>
                            <li>Study Groups</li>
                            <li>Peer Review System</li>
                        </ul>
                    </p>
                </div>
                <div className="feature-item">
                    <h2>Assements & Evaluation</h2>
                    <p>
                        <ul>
                            <li>Quiz & Test engine</li>
                            <li>Assignments</li>
                            <li>Grading Interface</li>
                            <li>Certificates of Completion</li>
                        </ul>
                    </p>
                    </div>
                    <div className="feature-item">
                        <h2>Content Management</h2>
                        <p>
                            <ul>
                                <li>Course Creation Tools</li>
                                <li>Content Library</li>
                                <li>Analytics Dashboard</li>
                                <li>Content Moderation</li>
                            </ul>
                            </p>
                            </div>
                <div className="feature-item">
                    <h2>Personalization & Motivation</h2>    
                    <p>
                        <ul>
                            <li>Gamification</li>
                            <li>Points & Badges</li>
                            <li>Leaderboards</li>
                            <li>Streaks</li>
                            <li>Learning Paths</li>
                            <li>Goal Setting & Reminders</li>
                        </ul>
                    </p>
                        </div>
                <div className="feature-item">
                    <h2>Administrative & Monetization</h2>
                    <p>
                        <ul>
                            <li>User Management</li>
                            <li>One time purchase</li>
                            <li>Subscriptions</li>
                            <li>Course bundles</li>
                            <li>Corporate/Team plans</li>
                            <li>Payment Gateway Integration</li>
                            <li>Coupon & Discount System</li>
                            <li>Accessibility</li>
                        </ul>
                    </p>
                    </div>
                
            </div>
            <div className="feature-image">
                <img src="https://via.placeholder.com/400" alt="Feature illustration" />
            </div>
        </div>
        <style jsx>{`
            .features {
                text-align: center;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .feature-list {
                display:flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                margin-bottom: 20px;
                align-items: flex-start;
            }
            .feature-item {
                width: 30%;
                min-width: 250px;
                margin: 10px;
                border: 1px solid #ddd;
                padding: 10px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .feature-image img {
                max-width: 100%;
                height: auto;
            }
            .title {
                font-size: 2em;
                margin-bottom: 20px;
                color: #333;
            }
            .feature-item h2 {
                font-size: 1.5em;
                margin-bottom: 10px;
                color:black;
            }
            .feature-item p {
                font-size: 1em;
                color: #555;
            }
            .feature-item ul {
                list-style-type: none;
                padding: 0;
            }
            .feature-item li {
                margin: 5px 0;
            }
            .feature-item li::before {
                content: "✔️";
                margin-right: 5px;
                color: black;
            }
            .feature-item ul li {
                text-align: left;
            }
            .feature-item ul li::before {
                content: "•";
                color: black;
                font-weight: bold;
            }
            .feature-item ul li {
            text-align: center;
               font-weight:bold;
                margin: 5px 0;
            }
            .feature-item ul li::before {
                content: "✔️";
                margin-right: 5px;
                color: black;
            }
            .feature-item ul li {
                text-align: left;
            }
            .feature-item ul li::before {
                content: "•";
                color: black;
                font-weight: bold;
            }
            .feature-item ul li {
                margin: 5px 0;
            }
            .feature-item ul li::before {
                content: "✔️";
                margin-right: 5px;
                color: black;
            }
            .feature-item ul li {
                text-align: left;
            }

      /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .feature-list {
                        flex-direction: column;
                        align-items: center;
                    }

                    .feature-item {
                        width: 90%;
                    }

                    .title {
                        font-size: 1.6em;
                    }
                }
                
        `}</style>
        </>
    );
}
export default Features;