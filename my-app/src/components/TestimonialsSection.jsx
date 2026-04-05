import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'This platform transformed my career. The hands-on projects and mentor guidance helped me land my dream job. The AI projects were particularly impressive.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist',
      company: 'DataFlow Inc',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The ML courses here are outstanding. I went from knowing nothing about machine learning to building production-ready models. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cloud Engineer',
      company: 'CloudTech Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The AWS and GCP courses are incredibly detailed. The real-world scenarios and expert mentorship made all the difference in my cloud career.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      company: 'AppWorks',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Flutter and React Native courses here are top-notch. Built my first app within weeks and got it published. The community support is amazing.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'DevOps Engineer',
      company: 'DevOps Pro',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The DevOps and CI/CD courses gave me the skills I needed to excel in my role. The practical assignments were exactly what I needed.',
      rating: 5
    },
    {
      name: 'Alex Turner',
      role: 'Cybersecurity Analyst',
      company: 'SecureNet',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Security courses here are comprehensive and up-to-date. Learned ethical hacking and penetration testing. Career-changing experience.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Students Trained' },
    { number: '500+', label: 'Expert Instructors' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Our Students Say</h2>
          <p>Join thousands of successful developers who transformed their careers with us</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
              </div>

              <blockquote className="testimonial-content">
                "{testimonial.content}"
              </blockquote>

              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3>Ready to Start Your Journey?</h3>
          <p>Join our community of successful developers and transform your career</p>
          <div className="cta-buttons">
            <button className="btn-primary">Start Learning Today</button>
            <button className="btn-secondary">Schedule a Demo</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 80px 20px;
          background: white;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #7f8c8d;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 60px;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          color: white;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 60px;
        }

        .testimonial-card {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .rating {
          color: #ffd700;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .testimonial-content {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #667eea;
        }

        .author-info h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: #2c3e50;
        }

        .author-info p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: #667eea;
          font-weight: 500;
        }

        .author-info span {
          font-size: 0.8rem;
          color: #7f8c8d;
        }

        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
          border-radius: 20px;
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .cta-section h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.1rem;
          color: #7f8c8d;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
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
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2.5rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;