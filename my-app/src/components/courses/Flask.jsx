import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Flask Basics & App structure ',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
      "What is Flask",
      "Setting up Flask",
      "Application structure",
      
]
  },
  {
    id: 2,
    title: 'Routing & views',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',

    chapters: [
     "Routing",
     "HTTP methods",
     "URL Building",
     "View functions"
]
  },
  {
    id: 3,
    title: 'Templates & Static Files',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [
"Jinja2 templating",
"Template inheritance",
"Static files",
"Rendering templates"
]
  },
  {
    id: 4,
    title: 'Forms & User Input',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "HTML Forms handling",
      "Form validations",
      "File uploads",
      "Form-based routing logic"
    ]
  },
  {
    id: 5,
    title: 'Databases & ORM',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Flask-SQLAlchemy",
       "Migrations",
       "Form validations",
       "File uploads",
       "Form-based routing logic"
    ]
  },
  {
    id: 6,
    title: 'Blueprints & Modularization',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "Blueprints",
      "Registering blueprints",
      "Factory Pattern",
      "Reusbility"
    ]
  },
  {
    id: 7,
    title: 'Authentication , APIs & deployment',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "User Authentication",
       "REST APIs",
       "Error handling",
       "Deplyment"
    ]
  },
  {
    id:8,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"Flask notes",link:'/files/flask_notes.pdf'}
    ]
  },
  {
    id: 9,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to online courses, books, and articles for deeper understanding.',
    chapters:[
      "Flask Documentation",
      "Flask Mega-Tutorial by Miguel Grinberg",
      "Online Courses (Coursera, Udemy, etc.)",
      "Books: 'Flask Web Development' by Miguel Grinberg"
    ],
    url:[
      "https://flask.palletsprojects.com/",
      "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
      "https://www.coursera.org/specializations/flask",
      "https://www.udemy.com/course/flask-tutorial-for-beginners/"
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
          <li><Link to="/Flask">Syllabus</Link></li>
          <li><Link to="/flaskassign">Assignments</Link></li>
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