import React from 'react';
function Support(){
    return(
        <>
        <div className="support">
            <h1 className="title">Support</h1>
            <div className="support-list">
                <div className="support-item">
                    <h2>Contact Us</h2>
                    <p>
                        <ul>
                            <li>Email:saarshop31@gmail.com</li>
                            <li>Address: Pune, India</li>
                        </ul>
                    </p>
                </div>
                <div className="support-item">
                    <h2>FAQs</h2>
                    <p>
                        <ul>
                            <li>How to reset password?</li>
                            <li>How to contact support?</li>
                            <li>How to report a bug?</li>
                        </ul>
                    </p>
                </div>
                <div className="support-item">
                    <h2>Feedback</h2>
                    <p>
                        <ul>
                            <li>Submit your feedback</li>
                            <li>Report an issue</li>
                            <li>Suggest a feature</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
        <style>{`
            .support {
                padding: 20px;
                background-color: #f9f9f9;
            }
            .title {
                text-align: center;
                color: #333;
            }
            .support-list {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .support-item {
                background-color: #fff;
                padding: 15px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .support-item h2 {
                margin-bottom: 10px;
                text-align: center;
                color: black;
            }
            .support-item ul {
                list-style-type: none;
                padding: 0;
            }
            .support-item li {
                margin: 5px 0;
            }
            .support-item li::before {
                content: "•";
                margin-right: 5px;
                color: black;
                font-weight: bold;
            }
            .support-item ul li {
                text-align: left;
            }

            .support-item ul li::hover{
                color: blue;
                cursor: pointer;
            }
            .support-item ul li:hover {
                text-decoration: underline;
            }
            .support-item ul li {
                text-align: center;
                font-weight: bold;
                margin: 5px 0;
            }
            .support-item ul li:: active{
                transform: scale(1.1);
            }
        `}</style>

        </>
    );
}
export default Support;