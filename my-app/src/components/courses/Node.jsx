import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Nodejs',
    description:'Understand the core of how Node.js works',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',

    chapters: [
    "What is Node.js and why use it?",
    "Node.js Architecture (Event Loop, Call Stack, Libuv)",
    "V8 JavaScript Engine",
    "Synchronous vs Asynchronous programming",
    "Node.js Global Objects (__dirname, __filename, process, global)",
    "CommonJS Modules vs ES Modules",
    "REPL (Read-Eval-Print Loop)",
    "NPM (Node Package Manager) and package.json",
    "Installing and updating Node.js and NPM " 
    ]
  },
  {
    id: 2,
    title: ' Core Modules & File System',
    description: 'Learn to work with built-in modules and file operations',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    
    chapters: [
    "fs (File System)",
    "path",
    "os",
    "url",
    "events",
    "util",
    "stream",
    "buffer",
    "Creating and reading files (sync/async)",
    "Working with directories",
    "EventEmitter and custom events",
    "Streams and piping",
    "Understanding Buffers and handling binary data"
    ]
  },
  {
    id: 3,
    title: ' Networking and HTTP',
    description: 'Build servers and handle requests/responses',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
  
    chapters: [
    "Creating a basic HTTP server",
    "Request and response handling",
    "Routing manually without a framework",
    "Handling form data (GET & POST)",
    "Working with query strings and URL parsing",
    "Setting response headers and status codes",
    "Introduction to HTTPS and TLS",
    "Introduction to WebSockets"  
    ]
  },
  {
    id: 4,
    title: 'Express.js & Middleware',
    description: 'Use the most popular framework for building apps with Node.js',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "What is Express.js?",
     "Creating routes (GET, POST, PUT, DELETE)",
     "Route parameters and query strings",
     "Express middleware (built-in, third-party, custom)",
     "Static file serving",
     "Error handling middleware",
     "Express Router (modular routing)",
     "Working with forms and JSON",
     "Using Postman for testing APIs",
     "Handling CORS in Express",
    "RESTful API structure using Express"
    ]
  },{
  id: 5,
    title: ' Advanced Concepts & Tooling',
    description: 'Deepen your knowledge and explore production-ready practices',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "MongoDB using Mongoose",
      "MySQL or PostgreSQL",
      "Environment Variables with dotenv",
      "Authentication & Authorization (JWT, OAuth)",
      "File Uploads with multer",
      "Async/Await and Promises in-depth",
      "Error Handling & Logging (Winston, Morgan)", 
      "Using Nodemon and debugging techniques",
      "Writing Unit Tests (Mocha, Chai, Jest)",
      "Building and consuming REST APIs",
      "Introduction to GraphQL with Node.js",
      "Deploying Node.js Apps (Heroku, Vercel, DigitalOcean, etc.)",
      "Performance optimization (Clustering, Load balancing)"
    
    ]
  },
  {
    id:6,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:'Node js',link:'/files/node_notes.pdf'}
    ]
  },
  {
    id: 7,
    title: 'Sources',
    description: 'Resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "Node.js Documentation",
      "Express.js Documentation",
      "Online Courses (Coursera, Udemy, etc.)",
      "YouTube Channels (Traversy Media, Academind, etc.)",
      "GitHub Repositories and Open Source Projects"
    ],
    url: [
      "https://nodejs.org/en/docs/",
      "https://expressjs.com/",
      "https://www.udemy.com/topic/nodejs/",
      "https://www.youtube.com/c/TraversyMedia",
      "https://www.youtube.com/c/Academind",
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
          <li><Link to="/Node">Syllabus</Link></li>
          <li><Link to="/Nodeassign">Assignments</Link></li>
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