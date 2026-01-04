import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Master the core concepts of React development and component-based architecture',
    details: 'Learn what React is, JSX syntax, component types, props, state, event handling, and conditional rendering - the foundation of modern React development.',
    duration: '3 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8',
    thumbnail: 'https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg',
    chapters: [
      "What is React and why use it?",
      "SPA (Single Page Applications) vs MPA",
      "JSX (JavaScript XML) and how it compiles",
      "Functional Components vs Class Components",
      "Rendering elements and expressions",
      "Props and Prop Drilling concepts",
      "State and setState in class components",
      "Conditional Rendering techniques",
      "Handling Events in React",
      "Lists and Keys for dynamic content"
    ],
    resources: [
      { name: 'React Official Docs', url: 'https://reactjs.org/docs/getting-started.html' },
      { name: 'JSX Guide', url: 'https://reactjs.org/docs/introducing-jsx.html' }
    ]
  },
  {
    id: 2,
    title: 'React State & Lifecycle',
    description: 'Master data management and component behavior with modern React hooks',
    details: 'Learn useState, useEffect, forms, controlled components, and advanced state management patterns for building interactive React applications.',
    duration: '4 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/O6P86uwfdR0',
    thumbnail: 'https://img.youtube.com/vi/O6P86uwfdR0/maxresdefault.jpg',
    chapters: [
      "useState Hook for state management",
      "useEffect Hook for side effects",
      "Component Lifecycle Methods (Class-based)",
      "Controlled vs Uncontrolled Components",
      "Forms in React with validation",
      "Handling form input and submission",
      "Lifting State Up pattern",
      "useRef for DOM manipulation",
      "useReducer for complex state logic",
      "Memoization with React.memo and useCallback",
      "useContext for global state sharing"
    ],
    resources: [
      { name: 'Hooks Documentation', url: 'https://reactjs.org/docs/hooks-intro.html' },
      { name: 'State Management Guide', url: 'https://reactjs.org/docs/state-and-lifecycle.html' }
    ]
  },
  {
    id: 3,
    title: 'Component Architecture & Routing',
    description: 'Build modular, scalable applications with proper component design and navigation',
    details: 'Master component architecture patterns, React Router for navigation, nested routes, protected routes, and code splitting for optimal performance.',
    duration: '3.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/Ul3y1LXxzdU',
    thumbnail: 'https://img.youtube.com/vi/Ul3y1LXxzdU/maxresdefault.jpg',
    chapters: [
      "Component-based architecture principles",
      "Smart vs Dumb Components pattern",
      "Container vs Presentational Components",
      "React Router setup and configuration",
      "Route, Link, Navigate, and useNavigate",
      "Route parameters and query strings",
      "Nested routes and route composition",
      "Protected routes and authentication",
      "Layout components (Header, Footer, Sidebar)",
      "Lazy loading with React.lazy and Suspense"
    ],
    resources: [
      { name: 'React Router Docs', url: 'https://reactrouter.com/docs/en/v6' },
      { name: 'Component Patterns', url: 'https://www.patterns.dev/posts/react-component-patterns' }
    ]
  },
  {
    id: 4,
    title: 'State Management & APIs',
    description: 'Master data fetching, API integration, and global state management',
    details: 'Learn to fetch data from APIs, handle loading states, implement error boundaries, and manage global application state with Context API and Redux.',
    duration: '4.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/FGQp6y6eYm0',
    thumbnail: 'https://img.youtube.com/vi/FGQp6y6eYm0/maxresdefault.jpg',
    chapters: [
      "State management strategies overview",
      "Fetching APIs with Fetch API",
      "Axios for HTTP requests",
      "async/await patterns in React",
      "Custom hooks for data fetching",
      "Error handling in API requests",
      "Loading states and skeleton screens",
      "React Context API for global state",
      "Redux Toolkit for complex state",
      "Modern alternatives (Zustand, Recoil)",
      "State persistence with localStorage"
    ],
    resources: [
      { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
      { name: 'API Integration Guide', url: 'https://reactjs.org/docs/faq-ajax.html' }
    ]
  },
  {
    id: 5,
    title: 'Advanced React & Best Practices',
    description: 'Master production-ready React development with performance optimization and testing',
    details: 'Learn performance optimization, testing strategies, accessibility, SEO, server-side rendering, and deployment best practices for professional React applications.',
    duration: '5 hours',
    difficulty: 'Advanced',
    videoUrl: 'https://www.youtube.com/embed/5fLuHq2FHpY',
    thumbnail: 'https://img.youtube.com/vi/5fLuHq2FHpY/maxresdefault.jpg',
    chapters: [
      "Performance optimization techniques",
      "useMemo and useCallback hooks",
      "React.memo for component memoization",
      "Debouncing and throttling",
      "React Portals for DOM manipulation",
      "Error boundaries implementation",
      "Unit testing with Jest",
      "Component testing with React Testing Library",
      "Accessibility (ARIA, semantic HTML)",
      "SEO optimization for React apps",
      "Server-Side Rendering basics",
      "Environment variables management",
      "Project structure best practices",
      "Deployment strategies (Vercel, Netlify)"
    ],
    resources: [
      { name: 'Performance Optimization', url: 'https://reactjs.org/docs/optimizing-performance.html' },
      { name: 'Testing Documentation', url: 'https://reactjs.org/docs/testing.html' },
      { name: 'Next.js for SSR', url: 'https://nextjs.org/docs' }
    ]
  },
  {
    id: 6,
    title: 'Notes',
    description: 'Download comprehensive React.js programming notes',
    notes: [
      { name: 'React.js Notes', link: '/files/react_notes.pdf' }
    ]
  },
  {
    id: 7,
    title: 'Sources',
    description: 'Comprehensive resources for mastering React development',
    details: 'Official documentation, premium courses, community resources, and expert channels to accelerate your React learning journey.',
    chapters: [
      "React Official Documentation",
      "React Community and Support",
      "Premium React Courses on Udemy",
      "Official React YouTube Channel",
      "FreeCodeCamp React Tutorials"
    ],
    url: [
      "https://reactjs.org/docs/getting-started.html",
      "https://reactjs.org/community/support.html",
      "https://www.udemy.com/topic/react/",
      "https://www.youtube.com/c/ReactJS",
      "https://www.youtube.com/c/FreeCodeCamp"
    ]
  }
];

const Syllabus = () => {
  const [openId, setOpenId] = useState(null);

  const toggleInfo = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="main-container">
      <aside className="sidebar">
        <h2>Syllabus</h2>
        <ul>
          <li><Link to="/React">Syllabus</Link></li>
          <li><Link to="/Reactassign">Assignments</Link></li>
        </ul>
      </aside>

      <section className="content">
        {syllabusData.map((item) => (
          <div
            key={item.id}
            className="syllabus-card clickable"
            onClick={() => toggleInfo(item.id)}
          >
            <div className="card-header">
              {item.thumbnail && (
                <div className="video-thumbnail">
                  <img src={item.thumbnail} alt={`${item.title} thumbnail`} />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
              )}
              <div className="card-meta">
                {item.duration && (
                  <span className="duration">
                    <i className="clock-icon">⏱️</i> {item.duration}
                  </span>
                )}
                {item.difficulty && (
                  <span className={`difficulty ${item.difficulty.toLowerCase()}`}>
                    {item.difficulty}
                  </span>
                )}
              </div>
            </div>

            <div className="info">
              <h3>{item.id}. {item.title}</h3>
              <p>{item.description}</p>

              {item.id === 1 && (
                <div className="progress-bar">
                  <div className="bar-fill" />
                </div>
              )}

              {openId === item.id && (
                <div className="extra-info">
                  {item.details && <p className="details-text">{item.details}</p>}

                  {item.videoUrl && (
                    <div className="video-section">
                      <h4>📹 Video Lecture</h4>
                      <div className="video-container">
                        <iframe
                          src={item.videoUrl}
                          title={`${item.title} video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  {item.chapters && (
                    <div className="chapters-section">
                      <h4>📚 Chapters Covered</h4>
                      <ul className="chapter-list">
                        {item.chapters.map((chapter, idx) => (
                          <li key={idx}>{chapter}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.resources && (
                    <div className="resources-section">
                      <h4>🔗 Additional Resources</h4>
                      <ul className="resource-list">
                        {item.resources.map((resource, idx) => (
                          <li key={idx}>
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="resource-link"
                            >
                              {resource.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.notes && Array.isArray(item.notes) && (
                    <div className="notes-section">
                      <h4>📄 Download Notes</h4>
                      <ul className="notes-list">
                        {item.notes.map((note, idx) => (
                          <li key={idx}>
                            <a
                              href={note.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="note-link"
                              download
                            >
                              {note.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.url && Array.isArray(item.url) && (
                    <div className="links-section">
                      <h4>🌐 Useful Links</h4>
                      <ul className="links-list">
                        {item.url.map((link, idx) => (
                          <li key={idx}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-item"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};


export default Syllabus;