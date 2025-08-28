import React from 'react';
function Study() {
  return (
    <>
      <style>{`
        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 30px 25px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          color: #222;
        }
        h1 {
          text-align: center;
          font-size: 3rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        p.intro {
          font-size: 1.15rem;
          color: #555;
          text-align: center;
          margin-bottom: 3rem;
          font-style: italic;
        }
        .plan {
          background: white;
          border-radius: 10px;
          padding: 20px 25px;
          margin-bottom: 2.5rem;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }
        .plan:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        h2 {
          color: #007bff;
          margin-bottom: 15px;
          border-bottom: 2px solid #007bff;
          padding-bottom: 6px;
        }
        ol {
          padding-left: 20px;
          line-height: 1.6;
          color: #444;
        }
        ol li {
          margin-bottom: 12px;
          font-size: 1.1rem;
          position: relative;
          padding-left: 12px;
        }
        ol li::before {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.2rem;
        }
        .footer-note {
          text-align: center;
          font-size: 1rem;
          color: #666;
          margin-top: 40px;
          font-style: italic;
        }
      `}</style>

      <div className="container">
        <h1>Start Your Development Journey 🚀</h1>
        <p className="intro">
          Follow these step-by-step plans tailored for different development paths to build solid skills and grow confidently.
        </p>

        <section className="plan">
          <h2>Web Development Plan</h2>
          <ol>
            <li>Learn HTML5 and CSS3 basics – structure and style web pages.</li>
            <li>Understand JavaScript fundamentals – variables, functions, DOM manipulation.</li>
            <li>Get familiar with version control using Git and GitHub.</li>
            <li>Explore frontend frameworks: React.js or Vue.js for dynamic UIs.</li>
            <li>Learn about REST APIs and how to consume them.</li>
            <li>Practice building responsive layouts using CSS Grid and Flexbox.</li>
            <li>Deploy your projects on platforms like Netlify or Vercel.</li>
          </ol>
        </section>

        <section className="plan">
          <h2>Backend Development Plan</h2>
          <ol>
            <li>Master a backend language like Node.js (JavaScript), Python, or Java.</li>
            <li>Learn about servers, routing, and middleware concepts.</li>
            <li>Understand working with databases – SQL & NoSQL.</li>
            <li>Build RESTful APIs and explore GraphQL.</li>
            <li>Implement authentication & authorization (JWT, OAuth).</li>
            <li>Learn basics of cloud services like AWS, Azure, or Heroku.</li>
            <li>Practice writing tests and error handling.</li>
          </ol>
        </section>

        <section className="plan">
          <h2>Mobile App Development Plan</h2>
          <ol>
            <li>Learn basics of JavaScript and mobile-specific concepts.</li>
            <li>Choose a framework: React Native or Flutter.</li>
            <li>Understand UI components, navigation, and state management.</li>
            <li>Integrate APIs and work with local storage.</li>
            <li>Debug and test your apps on simulators and real devices.</li>
            <li>Publish your apps on Google Play Store and Apple App Store.</li>
            <li>Keep improving by adding animations and optimizing performance.</li>
          </ol>
        </section>

        <p className="footer-note">
          Remember: Consistency beats speed. Build projects, ask questions, and never stop learning!
        </p>
      </div>
    </>
  );
}

export default Study;
