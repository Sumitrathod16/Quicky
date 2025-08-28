import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',

    chapters: [
    "What is React and why use it?",
    "SPA (Single Page Applications) vs MPA",
    "JSX (JavaScript XML) and how it compiles",
    "Functional Components vs Class Components",
    "Rendering elements",
    "Props and Prop Drilling",
    "State and setState",
    "Conditional Rendering",
    "Handling Events",
    "Lists and Keys"  
    ]
  },
  {
    id: 2,
    title: ' React State & Lifecycle',
    description:'Master data management and component behavior over time',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    
    chapters: [
      "useState Hook",
     "useEffect Hook",
     "Component Lifecycle Methods (Class-based: componentDidMount, etc.)",
     "Controlled vs Uncontrolled Components",
     "Forms in React",
     "Handling form input and validation",
     "Lifting State Up",
     "useRef and DOM manipulation",
     "useReducer for complex state",
     "Memoization with React.memo and useCallback",
     "useContext for global state sharing"
    ]
  },
  {
    id: 3,
    title: ' Component Architecture & Routing',
    description: 'Build modular, navigable applications',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
  
    chapters: [
   "Component-based architecture and best practices",
    "Smart vs Dumb Components",
    "Container vs Presentational Components",
    "Routing with React Router:",
    "Setting up React Router",
    "Route, Link, Navigate, useNavigate",
    "Route Params and Query Params",
    "Nested Routes ",
    "Protected Routes and Redirects",
    "Layout Components (Header, Footer, etc.)",
    "Lazy Loading and Code Splitting (React.lazy, Suspense)"  
    ]
  },
  {
    id: 4,
    title: 'State Management & APIs',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters: [
    "State Management Strategies in React",
    "Fetching APIs with:",
    "Fetch API",
    "Axios",
    "async/await in React",
    "Custom Hooks (useFetch, etc.)",
    "Error Handling in API requests",
    "Loading states and placeholders (e.g., spinners)",
    "Global State with:",
    "React Context API",
    "Redux Toolkit",
    "Zustand or Recoil (modern alternatives)",
    "Persisting state with localStorage/sessionStorage"  
    ]
  },
  {
    id:5,
    title:'Advanced React & Best Practices',
    description:'Prepare for production-level apps and interviews',
    details:'',

    chapters:[
       "Performance Optimization:",
       "useMemo",
       "useCallback",
       "React.memo",
       "Debouncing & Throttling",
       "React Portals",
       "Error Boundaries",
       "Testing in React:",
       "Unit Testing with Jest",
       "Component Testing with React Testing Library",
       "Accessibility (ARIA, semantic HTML)",
       "SEO with React (CSR vs SSR)",
       "Server-Side Rendering (SSR) Basics (Next.js)",
       "Environment Variables in React",
       "Folder Structure Best Practices",
       "Deployment (Vercel, Netlify, Firebase, etc.)",
     
    ]
  },
  {
    id:6,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"React js",link:'/files/react_notes.pdf'}
    ]
  },
  {
    id: 7,
    title: 'Sources',
    description: 'Resources for further learning',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    chapters: [
      "React Documentation",
      "React Training and Certification",
      "Online Courses (Coursera, Udemy, etc.)",
      "React Blogs and Whitepapers",
      "YouTube Channels (React Official, FreeCodeCamp, etc.)"
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
            <div className="icon">{item.icon}</div>
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
                  {item.details && <p>{item.details}</p>}

                  {item.chapters && (
                    <ul className="chapter-list">
                      {item.chapters.map((chapter, idx) => (
                        <li key={idx}>{chapter}</li>
                      ))}
                    </ul>
                  )}

                  {item.notes && Array.isArray(item.notes) && (
                    <div style={{marginLeft:"20px", marginTop: "10px" }}>
                      <strong>Download Notes:</strong>
                      <ul>
                        {item.notes.map((note, idx) => (
                          <li key={idx}>
                            <a
                              href={note.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#4f46e5", textDecoration: "underline" }}
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
                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                      <strong>Useful Links:</strong>
                      <ul>
                        {item.url.map((link, idx) => (
                          <li key={idx}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#4f46e5", textDecoration: "none" }}
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