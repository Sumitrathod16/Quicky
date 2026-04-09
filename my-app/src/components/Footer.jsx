import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-block">
      <div className="footer-top">
        <div className="footer-branding">
          <div className="footer-logo">Quicky<span>Learn</span></div>
          <p className="footer-description">
            Fast, smart learning for students and developers. Explore courses, practice tests, and expert guidance in one place.
          </p>
          <div className="footer-contact-card">
            <div>
              <strong>Contact</strong>
              <p>support@quicky.dev</p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>+1 (555) 012-3456</p>
            </div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Careers">Careers</Link></li>
              <li><Link to="/Press">Press</Link></li>
              <li><Link to="/Affiliates">Affiliates</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Study">Study</Link></li>
              <li><Link to="/Practice">Practice</Link></li>
              <li><Link to="/FAQ">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/Privacy">Privacy Policy</Link></li>
              <li><Link to="/Terms">Terms of Service</Link></li>
              <li><Link to="/Cookie">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="footer-column footer-cta">
            <h3>Stay in touch</h3>
            <p>Subscribe for updates, exam tips, and new course launches.</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Quicky Learn. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/Privacy">Privacy</Link>
          <Link to="/Terms">Terms</Link>
          <Link to="/Cookie">Cookies</Link>
        </div>
      </div>

      <style>
        {`
          .footer-block {
            background: linear-gradient(180deg, #0b1220 0%, #131b2d 100%);
            color: #f5f7fb;
            padding: 4rem 1.5rem 2rem;
            width: 100%;
          }

          .footer-top {
            max-width: 1180px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.4fr 2.6fr;
            gap: 3rem;
          }

          .footer-branding {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .footer-logo {
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: 0.04em;
          }

          .footer-logo span {
            color: #6c63ff;
          }

          .footer-description {
            color: #b8c2d6;
            line-height: 1.8;
            max-width: 360px;
          }

          .footer-contact-card {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            padding: 1.3rem;
          }

          .footer-contact-card strong {
            display: block;
            margin-bottom: 0.35rem;
            color: #edf2ff;
          }

          .footer-contact-card p {
            margin: 0;
            color: #d3dce8;
          }

          .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1.25rem;
          }

          .footer-column {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .footer-column h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #f8fbff;
            margin: 0;
          }

          .footer-column ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 0.85rem;
          }

          .footer-column li {
            margin: 0;
          }

          .footer-column a {
            color: #b8c2d6;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .footer-column a:hover {
            color: #6c63ff;
          }

          .footer-cta p {
            color: #d3dce8;
            line-height: 1.75;
          }

          .footer-form {
            display: flex;
            gap: 0.75rem;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 1rem;
          }

          .footer-form input {
            flex: 1;
            min-width: 190px;
            padding: 0.95rem 1rem;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: rgba(255, 255, 255, 0.05);
            color: #f5f7fb;
          }

          .footer-form input::placeholder {
            color: #9aa7c2;
          }

          .footer-form button {
            padding: 0.95rem 1.6rem;
            border: none;
            border-radius: 999px;
            background: linear-gradient(135deg, #6c63ff, #8b5cf6);
            color: white;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .footer-form button:hover {
            transform: translateY(-1px);
            box-shadow: 0 12px 30px rgba(108, 99, 255, 0.2);
          }

          .footer-bottom {
            max-width: 1180px;
            margin: 2.5rem auto 0;
            padding-top: 1.75rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            color: #9aa7c2;
          }

          .footer-bottom-links {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
          }

          .footer-bottom-links a {
            color: #9aa7c2;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .footer-bottom-links a:hover {
            color: #6c63ff;
          }

          @media (max-width: 960px) {
            .footer-top {
              grid-template-columns: 1fr;
            }

            .footer-links-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 680px) {
            .footer-contact-card {
              grid-template-columns: 1fr;
            }

            .footer-form {
              flex-direction: column;
            }

            .footer-bottom {
              text-align: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
