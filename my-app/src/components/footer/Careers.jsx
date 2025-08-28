import react from 'react';
function Careers() {
    return(
        <>
        <style>
            {`
            .careers-container {
  max-width: 850px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #333;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #007bff;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 25px;
  text-align: center;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.section ul li {
  margin-bottom: 10px;
}

.slogans p {
  font-style: italic;
  margin: 10px 0;
  color: #444;
  text-align: center;
}

.apply {
  text-align: center;
}

.apply-button {
  display: inline-block;
  padding: 12px 25px;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.apply-button:hover {
  background-color: #218838;
}
`}
</style>

    <div className="careers-container">
      <h1 className="title">Careers in Development 🚀</h1>
      <p className="intro">
        Welcome, future developer! Whether you're just starting out or switching careers, software development is an exciting field full of opportunities. At DevLearn, we believe developers are the builders of the future — and we’re here to help you grow.
      </p>

      <div className="section">
        <h2>💡 Why Software Development Matters</h2>
        <ul>
          <li>It powers everything — from mobile apps to healthcare systems.</li>
          <li>It solves real-world problems and improves lives.</li>
          <li>It gives you the freedom to create, innovate, and explore.</li>
          <li>It offers high-demand, high-growth career paths globally.</li>
        </ul>
      </div>

      <div className="section slogans">
        <h2>✨ Slogans to Keep You Going</h2>
        <p><em>"Code the future you want to see."</em></p>
        <p><em>"Every great app was once just a blank file."</em></p>
        <p><em>"Debugging is like being a detective in a crime movie where you are also the murderer."</em></p>
        <p><em>"Think logically, code magically."</em></p>
        <p><em>"Build, break, learn, repeat."</em></p>
      </div>

      <div className="section">
        <h2>🌱 Advice for New Developers</h2>
        <ul>
          <li>Start small. Build something real, no matter how simple.</li>
          <li>Practice daily. Consistency is more powerful than intensity.</li>
          <li>Break things. You’ll learn more from mistakes than from tutorials.</li>
          <li>Ask questions. The best developers are curious, not perfect.</li>
          <li>Join the community. Collaborate, contribute, and grow together.</li>
        </ul>
      </div>

      <div className="section apply">
        <h2>📬 Ready to Begin?</h2>
        <p>
          Join our community of learners, builders, and thinkers. Your journey in development can start today — and it might just change your life.
        </p>
        <a href=":careers@devlearn.com" className="apply-button">Get Started</a>
      </div>
    </div>
   </>
  );
};

export default Careers;