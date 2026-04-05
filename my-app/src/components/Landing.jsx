import React from "react";
import { useNavigate } from "react-router-dom";

// Professional images and icons (using placeholder URLs that can be replaced with actual images)
const aiImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const codeImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const communityImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const portfolioImage = "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          color: white;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero-image {
          position: relative;
        }

        .hero-illustration {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-illustration::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(-50%, -50%) rotate(180deg); }
        }

        .coding-demo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.8);
          color: #00ff88;
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 136, 0.3);
          white-space: pre-line;
          line-height: 1.6;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          max-width: 400px;
          width: 90%;
        }

        .features-section {
          padding: 80px 20px;
          background: #ffffff;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-image {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          margin-bottom: 1.5rem;
          object-fit: cover;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #666;
          line-height: 1.6;
          font-size: 1rem;
        }

        .pricing-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .pricing-card.popular {
          border-color: #667eea;
          transform: scale(1.05);
        }

        .pricing-card.popular::before {
          content: 'Most Popular';
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .pricing-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .pricing-price {
          font-size: 3rem;
          font-weight: 800;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .pricing-period {
          color: #666;
          font-size: 1rem;
        }

        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        .pricing-features li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
        }

        .pricing-features li:last-child {
          border-bottom: none;
        }

        .pricing-features li::before {
          content: '✓';
          color: #28a745;
          font-weight: bold;
          margin-right: 1rem;
          font-size: 1.2rem;
        }

        .pricing-button {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pricing-card:not(.popular) .pricing-button {
          background: #f8f9fa;
          color: #6c757d;
          border: 2px solid #dee2e6;
        }

        .pricing-card:not(.popular) .pricing-button:hover {
          background: #e9ecef;
          border-color: #adb5bd;
        }

        .pricing-card.popular .pricing-button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .pricing-card.popular .pricing-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .stats-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-item {
          padding: 2rem;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .coding-demo {
            font-size: 0.8rem;
            padding: 1.5rem;
          }
        }
        .coding-demo {
          border-radius: 16px;
          box-shadow: 0 4px 24px #00bfff44;
          padding: 20px;
          margin: 40px auto 0 auto;
          max-width: 600px;
          min-height: 120px;
          letter-spacing: 1px;
          overflow: hidden;
          width: 100%;
        }
        /* 📱 Mobile Screens */
        @media (max-width: 768px) {
          .landing-title { font-size: 2em; }
          .landing-desc { font-size: 1em; }
          .cta-btn { width: 100%; }
          .info-containers { flex-direction: column; align-items: center; }
          .info-card { flex: 1 1 100%; max-width: 100%; }
          .glass-card { padding: 24px 16px; }
          .coding-animation { font-size: 0.9em; padding: 16px; }
        }
        /* 📱 Small Phones */
        @media (max-width: 480px) {
          .landing-title { font-size: 1.6em; }
          .landing-desc { font-size: 0.9em; }
          .cta-btn { font-size: 1em; padding: 12px 24px; }
          .info-img { width: 48px; height: 48px; }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate__animated animate__fadeInUp">
              Master Tech Skills with <span style={{color: '#ff6b6b'}}>Expert</span> Guidance
            </h1>
            <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">
              Join thousands of developers learning AI, Web Development, Cloud Computing, and more.
              Get personalized mentorship, build real projects, and land your dream job.
            </p>
            <div className="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
              <button className="btn-primary" onClick={() => navigate('/home')}>
                Start Learning Free
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})}>
                View Pricing
              </button>
            </div>
          </div>
          <div className="hero-image animate__animated animate__fadeInRight animate__delay-1s">
            <div className="hero-illustration">
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern coding workspace with laptop and code" 
                className="coding-demo-image"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '90%',
                  maxHeight: '80%',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <p className="section-subtitle">
            Experience learning like never before with our comprehensive platform designed for modern developers
          </p>

          <div className="features-grid">
            <div className="feature-card animate__animated animate__fadeInUp">
              <img src={aiImage} alt="AI & ML" className="feature-image" />
              <h3 className="feature-title">AI & Machine Learning</h3>
              <p className="feature-description">
                Master cutting-edge AI technologies with hands-on projects and real-world applications.
                Learn from industry experts and build intelligent systems.
              </p>
            </div>

            <div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
              <img src={codeImage} alt="Full Stack Development" className="feature-image" />
              <h3 className="feature-title">Full Stack Development</h3>
              <p className="feature-description">
                Complete web development curriculum covering frontend, backend, databases, and deployment.
                Build production-ready applications from scratch.
              </p>
            </div>

            <div className="feature-card animate__animated animate__fadeInUp animate__delay-2s">
              <img src={communityImage} alt="Community" className="feature-image" />
              <h3 className="feature-title">Expert Community</h3>
              <p className="feature-description">
                Connect with mentors, peers, and industry professionals. Get code reviews,
                career advice, and collaborate on exciting projects.
              </p>
            </div>

            <div className="feature-card animate__animated animate__fadeInUp animate__delay-3s">
              <img src={portfolioImage} alt="Portfolio" className="feature-image" />
              <h3 className="feature-title">Portfolio Development</h3>
              <p className="feature-description">
                Build an impressive portfolio with guided projects. Get feedback from experts
                and showcase your skills to potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <h2 className="section-title" style={{color: '#1a1a1a'}}>Choose Your Learning Path</h2>
          <p className="section-subtitle" style={{color: '#666'}}>
            Flexible pricing plans designed for students, professionals, and teams
          </p>

          <div className="pricing-grid">
            <div className="pricing-card animate__animated animate__fadeInUp">
              <div className="pricing-header">
                <h3 className="pricing-title">Free</h3>
                <div className="pricing-price">$0</div>
                <div className="pricing-period">Forever</div>
              </div>
              <ul className="pricing-features">
                <li>Access to basic courses</li>
                <li>Community forum access</li>
                <li>Basic code challenges</li>
                <li>Limited project reviews</li>
                <li>Email support</li>
              </ul>
              <button className="pricing-button" onClick={() => navigate('/home')}>
                Get Started
              </button>
            </div>

            <div className="pricing-card popular animate__animated animate__fadeInUp animate__delay-1s">
              <div className="pricing-header">
                <h3 className="pricing-title">Pro</h3>
                <div className="pricing-price">$29</div>
                <div className="pricing-period">/month</div>
              </div>
              <ul className="pricing-features">
                <li>Unlimited course access</li>
                <li>1-on-1 mentorship sessions</li>
                <li>Advanced projects & certifications</li>
                <li>Priority code reviews</li>
                <li>Live Q&A sessions</li>
                <li>Resume & portfolio review</li>
                <li>Job placement assistance</li>
              </ul>
              <button className="pricing-button" onClick={() => navigate('/home')}>
                Start Pro Trial
              </button>
            </div>

            <div className="pricing-card animate__animated animate__fadeInUp animate__delay-2s">
              <div className="pricing-header">
                <h3 className="pricing-title">Team</h3>
                <div className="pricing-price">$99</div>
                <div className="pricing-period">/month</div>
              </div>
              <ul className="pricing-features">
                <li>Everything in Pro</li>
                <li>Up to 10 team members</li>
                <li>Team progress tracking</li>
                <li>Custom learning paths</li>
                <li>Admin dashboard</li>
                <li>API access</li>
                <li>Priority support</li>
              </ul>
              <button className="pricing-button" onClick={() => navigate('/home')}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item animate__animated animate__fadeInUp">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Learners</div>
          </div>
          <div className="stat-item animate__animated animate__fadeInUp animate__delay-1s">
            <div className="stat-number">200+</div>
            <div className="stat-label">Expert Courses</div>
          </div>
          <div className="stat-item animate__animated animate__fadeInUp animate__delay-2s">
            <div className="stat-number">95%</div>
            <div className="stat-label">Job Placement Rate</div>
          </div>
          <div className="stat-item animate__animated animate__fadeInUp animate__delay-3s">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
