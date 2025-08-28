import React from 'react';

const Terms = () => {
    return (
        <>
        <style>
            {`
           body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa; /* Lighter background */
    color: #495057;
}

.tos-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 30px 50px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* More subtle shadow */
    border-radius: 10px;
}

.tos-header {
    text-align: center;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 20px;
    margin-bottom: 30px;
}

.tos-header h1 {
    color: #007bff; /* Primary brand color */
    font-size: 2.8em;
    margin-bottom: 5px;
}

.tos-header p {
    color: #6c757d;
    font-style: italic;
    font-size: 0.9em;
}

.tos-content h2 {
    color: #343a40;
    font-size: 1.6em;
    margin-top: 40px;
    padding-bottom: 5px;
    border-bottom: 2px solid #007bff;
}

.tos-content p {
    margin-bottom: 25px;
    text-align: justify;
}

.tos-footer {
    text-align: center;
    margin-top: 50px;
    padding-top: 20px;
    border-top: 1px solid #dee2e6;
    color: #adb5bd;
    font-size: 0.85em;
}
           `}
        </style>
        <div className="tos-container">
            <header className="tos-header">
                <h1>Terms of Service</h1>
                <p>Last updated: August 20, 2025</p>
            </header>
            <main className="tos-content">
                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
                    </p>
                </section>
                <section>
                    <h2>2. User Obligations</h2>
                    <p>
                        You agree to use our services in a manner consistent with all applicable laws and regulations. You are prohibited from using the service for any illegal or unauthorized purpose.
                    </p>
                </section>
                <section>
                    <h2>3. Intellectual Property Rights</h2>
                    <p>
                        All content, trademarks, and data on this website, including but not limited to the software, text, graphics, icons, and links, are the property of [Your Company Name] or its content suppliers and are protected by international copyright laws.
                    </p>
                </section>
                <section>
                    <h2>4. Limitation of Liability</h2>
                    <p>
                        In no event shall [Your Company Name] nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                </section>
            </main>
            <footer className="tos-footer">
                <p>&copy; {new Date().getFullYear()} Quicky. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
};

export default Terms;