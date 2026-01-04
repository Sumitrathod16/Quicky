import React from 'react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: {
      title: 'Platform',
      links: [
        { name: 'Courses', href: '/courses' },
        { name: 'Assignments', href: '/assignments' },
        { name: 'Speed Test', href: '/speed-test' },
        { name: 'Practice', href: '/practice' },
        { name: 'Study Materials', href: '/study' }
      ]
    },
    courses: {
      title: 'Popular Courses',
      links: [
        { name: 'React Development', href: '/courses/react' },
        { name: 'Python Programming', href: '/courses/python' },
        { name: 'Machine Learning', href: '/courses/ml' },
        { name: 'AWS Cloud', href: '/courses/aws' },
        { name: 'Node.js', href: '/courses/node' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Community', href: '/community' },
        { name: 'System Status', href: '/status' },
        { name: 'Feedback', href: '/feedback' }
      ]
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/techlearn' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/techlearn' },
    { name: 'GitHub', icon: '💻', href: 'https://github.com/techlearn' },
    { name: 'YouTube', icon: '📺', href: 'https://youtube.com/techlearn' },
    { name: 'Discord', icon: '💬', href: 'https://discord.gg/techlearn' }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-text">TechLearn</span>
              <span className="logo-accent">Pro</span>
            </div>
            <p className="brand-description">
              Empowering developers worldwide with cutting-edge technology education.
              Master the skills that drive the future of tech.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="footer-column">
                <h4 className="column-title">{section.title}</h4>
                <ul className="column-links">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Get the latest tech insights, course updates, and exclusive offers delivered to your inbox.</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} TechLearn Pro. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms of Service</a>
              <a href="/cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          margin-top: 80px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 4rem;
          padding: 4rem 0 2rem;
        }

        .footer-brand {
          max-width: 300px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .logo-text {
          font-size: 2rem;
          font-weight: 800;
          color: white;
        }

        .logo-accent {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-description {
          color: #bdc3c7;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #667eea;
          transform: translateY(-2px);
        }

        .social-icon {
          font-size: 1.2rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .footer-column h4 {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .column-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .column-links li {
          margin-bottom: 0.5rem;
        }

        .footer-link {
          color: #bdc3c7;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #667eea;
        }

        .footer-newsletter {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 3rem 2rem;
          margin: 2rem 0;
          text-align: center;
        }

        .newsletter-content h3 {
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .newsletter-content p {
          color: #bdc3c7;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .newsletter-input {
          flex: 1;
          min-width: 250px;
          padding: 1rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
        }

        .newsletter-input::placeholder {
          color: #bdc3c7;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #667eea;
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-btn {
          padding: 1rem 2rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: #bdc3c7;
          font-size: 0.9rem;
        }

        .legal-links {
          display: flex;
          gap: 2rem;
        }

        .legal-link {
          color: #bdc3c7;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #667eea;
        }

        @media (max-width: 1024px) {
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .footer-brand {
            max-width: none;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .newsletter-form {
            flex-direction: column;
            align-items: center;
          }

          .newsletter-input {
            min-width: auto;
            width: 100%;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .legal-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
          }

          .newsletter-content h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;