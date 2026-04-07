import React from 'react';
import { Link } from 'react-router-dom';
import htmlIcon from '../../assets/html.svg';
import CSS from '../../assets/css.svg';
import js from '../../assets/js.svg';
import nodeIcon from '../../assets/nodejs.svg';
import ReactIcon from '../../assets/react.svg';
import MongodbIcon from '../../assets/mongodb.svg';
import AWSIcon from '../../assets/aws.svg';
import AzureIcon from '../../assets/azure.svg';
import GcpIcon from '../../assets/gcp.svg';
import FlutterIcon from '../../assets/flutter.svg';
import PythonIcon from '../../assets/python.svg';
import DjangoIcon from '../../assets/django.svg';
import FlaskIcon from '../../assets/flask.svg';
import JavaIcon from '../../assets/java.svg';
import SpringIcon from '../../assets/spring.svg';
import HibernateIcon from '../../assets/hibernate.svg';
import MLIcon from '../../assets/ml.svg';
import DeepLearningIcon from '../../assets/dl.svg';
import AIIcon from '../../assets/ai.svg';
import SQL from '../../assets/sql.svg';

const courses = [
  {
    title: 'Frontend Developer',
    emoji: '🎨',
    accent: '#f97316',
    accentBg: 'rgba(249,115,22,0.1)',
    accentBorder: 'rgba(249,115,22,0.25)',
    tags: [
      { label: 'HTML', to: '/HTML' },
      { label: 'CSS', to: '/CSS' },
      { label: 'JavaScript', to: '/JavaScript' },
    ],
    icons: [{ src: htmlIcon, alt: 'HTML' }, { src: CSS, alt: 'CSS' }, { src: js, alt: 'JS' }],
  },
  {
    title: 'Backend Developer',
    emoji: '⚙️',
    accent: '#22c55e',
    accentBg: 'rgba(34,197,94,0.1)',
    accentBorder: 'rgba(34,197,94,0.25)',
    tags: [
      { label: 'NodeJS', to: '/NodeJS' },
      { label: 'ReactJS', to: '/ReactJS' },
      { label: 'MongoDB', to: '/MongoDB' },
    ],
    icons: [{ src: nodeIcon, alt: 'Node' }, { src: ReactIcon, alt: 'React' }, { src: MongodbIcon, alt: 'MongoDB' }],
  },
  {
    title: 'Cloud Computing',
    emoji: '☁️',
    accent: '#0ea5e9',
    accentBg: 'rgba(14,165,233,0.1)',
    accentBorder: 'rgba(14,165,233,0.25)',
    tags: [
      { label: 'AWS', to: '/AWS' },
      { label: 'Azure', to: '/Azure' },
      { label: 'GCP', to: '/GCP' },
    ],
    icons: [{ src: AWSIcon, alt: 'AWS' }, { src: AzureIcon, alt: 'Azure' }, { src: GcpIcon, alt: 'GCP' }],
  },
  {
    title: 'Flutter',
    emoji: '📱',
    accent: '#38bdf8',
    accentBg: 'rgba(56,189,248,0.1)',
    accentBorder: 'rgba(56,189,248,0.25)',
    tags: [{ label: 'Flutter', to: '/Flutter' }],
    icons: [{ src: FlutterIcon, alt: 'Flutter' }],
  },
  {
    title: 'Python',
    emoji: '🐍',
    accent: '#facc15',
    accentBg: 'rgba(250,204,21,0.1)',
    accentBorder: 'rgba(250,204,21,0.25)',
    tags: [
      { label: 'Python', to: '/Python' },
      { label: 'Django', to: '/Django' },
      { label: 'Flask', to: '/Flask' },
    ],
    icons: [{ src: PythonIcon, alt: 'Python' }, { src: DjangoIcon, alt: 'Django' }, { src: FlaskIcon, alt: 'Flask' }],
  },
  {
    title: 'Java',
    emoji: '☕',
    accent: '#f43f5e',
    accentBg: 'rgba(244,63,94,0.1)',
    accentBorder: 'rgba(244,63,94,0.25)',
    tags: [
      { label: 'Java', to: '/Java' },
      { label: 'Spring', to: '/Spring' },
      { label: 'Hibernate', to: '/Hibernate' },
    ],
    icons: [{ src: JavaIcon, alt: 'Java' }, { src: SpringIcon, alt: 'Spring' }, { src: HibernateIcon, alt: 'Hibernate' }],
  },
  {
    title: 'Machine Learning',
    emoji: '🤖',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.1)',
    accentBorder: 'rgba(167,139,250,0.25)',
    tags: [
      { label: 'ML', to: '/Ml' },
      { label: 'Deep Learning', to: '/Dl' },
      { label: 'AI', to: '/AI' },
    ],
    icons: [{ src: MLIcon, alt: 'ML' }, { src: DeepLearningIcon, alt: 'DL' }, { src: AIIcon, alt: 'AI' }],
  },
  {
    title: 'Base Languages',
    emoji: '💾',
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.1)',
    accentBorder: 'rgba(52,211,153,0.25)',
    tags: [
      { label: 'C', to: '/C' },
      { label: 'C++', to: '/C++' },
      { label: 'PHP', to: '/Php' },
    ],
    icons: [],
  },
  {
    title: 'Projects',
    emoji: '🚀',
    accent: '#f97316',
    accentBg: 'rgba(249,115,22,0.1)',
    accentBorder: 'rgba(249,115,22,0.25)',
    tags: [
      { label: 'DBMS', to: '/DBMS' },
      { label: 'SQL', to: '/SQL' },
    ],
    icons: [{ src: SQL, alt: 'SQL' }],
  },
];

function Explore() {
  return (
    <>
      <style>{`
        .explore-section {
          padding: 90px 20px;
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 100%);
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .explore-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);
        }

        .explore-header {
          text-align: center;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }

        .explore-eyebrow {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 100px;
          color: #a78bfa;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .explore-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
        }

        .explore-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.45);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .explore-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .course-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .course-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.12);
        }

        .course-card:hover::before {
          opacity: 1;
        }

        .card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .card-emoji-wrap {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .course-card:hover .card-emoji-wrap {
          transform: rotate(-5deg) scale(1.1);
        }

        .card-icon-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .card-tech-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          object-fit: contain;
          padding: 4px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.2s ease;
        }

        .course-card:hover .card-tech-icon {
          transform: scale(1.1);
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }

        .card-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .card-tag {
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .card-tag:hover {
          transform: translateY(-1px);
          filter: brightness(1.2);
        }

        @media (max-width: 900px) {
          .explore-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 580px) {
          .explore-section { padding: 70px 16px; }
          .explore-grid { grid-template-columns: 1fr; max-width: 420px; }
        }
      `}</style>

      <section className="explore-section">
        <div className="explore-header">
          <div className="explore-eyebrow">What we teach</div>
          <h2 className="explore-title">Explore Our Courses</h2>
          <p className="explore-subtitle">
            Preparing students for different coding languages. Find the one you are preparing for.
          </p>
        </div>

        <div className="explore-grid">
          {courses.map((course, i) => (
            <div
              key={i}
              className="course-card"
              style={{
                '--accent': course.accent,
                boxShadow: `0 0 0 0 ${course.accent}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = course.accentBg;
                e.currentTarget.style.borderColor = course.accentBorder;
                e.currentTarget.style.boxShadow = `0 16px 40px ${course.accent}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top accent line on hover via inline pseudo — use a div instead */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${course.accent}, transparent)`,
                opacity: 0.6, borderRadius: '20px 20px 0 0'
              }} />

              <div className="card-header-row">
                <div
                  className="card-emoji-wrap"
                  style={{ background: course.accentBg, border: `1px solid ${course.accentBorder}` }}
                >
                  {course.emoji}
                </div>
                {course.icons.length > 0 && (
                  <div className="card-icon-row">
                    {course.icons.map((icon, j) => (
                      <img key={j} src={icon.src} alt={icon.alt} className="card-tech-icon" />
                    ))}
                  </div>
                )}
              </div>

              <h3 className="card-title">{course.title}</h3>

              <div className="card-tags-row">
                {course.tags.map((tag, j) => (
                  <Link
                    key={j}
                    to={tag.to}
                    className="card-tag"
                    style={{
                      color: course.accent,
                      background: course.accentBg,
                      border: `1px solid ${course.accentBorder}`,
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Explore;