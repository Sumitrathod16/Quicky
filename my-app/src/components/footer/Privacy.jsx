import React from 'react';

const Privacy = () => {
    return (
        <>
        <style>
            {`
            body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

.privacy-policy-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.privacy-policy-header {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ddd;
    margin-bottom: 20px;
}

.privacy-policy-header h1 {
    color: #2c3e50;
    font-size: 2.5em;
    margin: 0;
}

.privacy-policy-content h2 {
    color: #34495e;
    font-size: 1.5em;
    margin-top: 30px;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
}

.privacy-policy-content p {
    margin-bottom: 20px;
    text-align: justify;
}

.privacy-policy-footer {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 2px solid #ddd;
    color: #7f8c8d;
    font-size: 0.9em;
}
            `}
        </style>
        <div className="privacy-policy-container">
            <header className="privacy-policy-header">
                <h1>Privacy Policy</h1>
            </header>
            <main className="privacy-policy-content">
                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to our privacy policy. This document explains how we collect, use, and protect your personal data. By using our service, you agree to the terms of this policy.
                    </p>
                </section>
                <section>
                    <h2>2. Data We Collect</h2>
                    <p>
                        We may collect personal data such as your name, email address, and usage data. This data is used to provide and improve our services.
                    </p>
                </section>
                <section>
                    <h2>3. How We Use Your Data</h2>
                    <p>
                        Your data is used to personalize your experience, process transactions, and send periodic emails regarding your account or services. We do not sell or rent your personal information to third parties.
                    </p>
                </section>
                <section>
                    <h2>4. Data Security</h2>
                    <p>
                        We implement various security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                </section>
            </main>
            <footer className="privacy-policy-footer">
                <p>&copy; {new Date().getFullYear()} Quicky. All Rights Reserved.</p>
            </footer>
        </div>
        </>
    );
};

export default Privacy;