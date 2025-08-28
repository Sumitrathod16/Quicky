import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introuction to hibernate & ORM Concepts ',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
"What is hibernate",
"ORM basics",
"JPA vs Hibernate",
"Hibernate architecture"
]
  },
  {
    id: 2,
    title: 'Hibernate Configuration & setup',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    
    chapters: [
     "Hibernate dependencies",
     "Configuration Files",
     "Database Connectivity",
     "Annotation vs XML mapping"
]
  },
  {
    id: 3,
    title: 'Entity Mapping',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [
"Defining entities",
"Primary key strategies",
"Data types & attributee mapping",
"Embedded and transient fields"
]
  },
  {
    id: 4,
    title: 'Relationships Mapping',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "One-to-one",
      "One-to-Many",
      "Many-to-Many",
      "Cascade operations & Fetch types"
]
  },
  {
    id: 5,
    title: 'CRUD operations & session Management',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "Basic CRUD",
       "Session lifecycle",
       "Transaction Management",
       "Detaching and merging objects"
    ]
  },
  {
    id: 6,
    title: 'HQL,JPQL & Criteria API',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "Hibernate Query Language(HQL)",
      "JPQL",
      "Named Queries",
      "Criteria API",
      "Native SQL Queries"
    ]
  },
  {
    id: 7,
    title: 'Advanced Topics & Performance Optimization',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
"Caching",
"Lazy vs Eager Loading",
"Batch processing & fetching strategies",
"Transactions with JTA, Spring Itegration",
"Best Practices"
    ]
  },
  {
    id:8,
    title:'Notes',
    description:"Notes to understand the concept",
    notes:[
      {name:'Hibernate Notes',link:'/files/hibernate_notes.pdf'}
    ]
  },
  {
    id: 9,
    title: 'Sources',
    description: 'Resources for further learning',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    chapters: [
      "Hibernate Documentation",
      "Books (Java Persistence with Hibernate, etc.)",
      "Online Courses (Udemy, Coursera)",
      "Community Forums (Stack Overflow, Hibernate Forums)",
      "YouTube Channels (Java Brains, Telusko)"
    ],
    url: [
      "https://hibernate.org/orm/documentation/",
      "https://www.amazon.com/Java-Persistence-Hibernate-Coverage-Annotations/dp/1617291043",
      "https://www.udemy.com/course/hibernate-tutorial-for-beginners/",
      "https://stackoverflow.com/questions/tagged/hibernate",
      "https://www.youtube.com/c/JavaBrainsChannel"
    ],
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
          <li><Link to="/Hibernate">Syllabus</Link></li>
          <li><Link to="/Hiberassign">Assignments</Link></li>
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