import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Master Technology with
            <span className="highlight"> Expert Guidance</span>
          </h1>
          <p className="hero-subtitle">
            Unlock your potential with hands-on projects, personalized learning paths,
            and industry-recognized certifications. Join thousands of successful developers.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">Start Learning Free</button>
            <button className="btn-secondary">View Courses</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Students learning"
              className="hero-main-image"
            />
            <div className="floating-card card-1">
              <div className="card-icon">🚀</div>
              <div className="card-text">
                <h4>AI Projects</h4>
                <p>Build real AI applications</p>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">💼</div>
              <div className="card-text">
                <h4>Career Ready</h4>
                <p>Industry certifications</p>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🌟</div>
              <div className="card-text">
                <h4>Expert Mentors</h4>
                <p>Learn from professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
          opacity: 0.1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 100vh;
        }

        .hero-text {
          color: white;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(45deg, #ff6b6b, #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffd93d;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(45deg, #ff6b6b, #ffd93d);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero-image {
          position: relative;
        }

        .hero-image-container {
          position: relative;
        }

        .hero-main-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .floating-card {
          position: absolute;
          background: white;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          animation: float 6s ease-in-out infinite;
        }

        .card-1 {
          top: -20px;
          right: -20px;
          animation-delay: 0s;
        }

        .card-2 {
          bottom: 20px;
          left: -30px;
          animation-delay: 2s;
        }

        .card-3 {
          top: 50%;
          left: -40px;
          animation-delay: 4s;
        }

        .card-icon {
          font-size: 1.5rem;
        }

        .card-text h4 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
        }

        .card-text p {
          margin: 0;
          font-size: 0.8rem;
          color: #666;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            padding: 20px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .floating-card {
            display: none;
          }

          .hero-main-image {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;