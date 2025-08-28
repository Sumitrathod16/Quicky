import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Dbms',
    description: 'Fundamental concepts of Dbms',
    details: '',
  
    chapters: [
    "Database concepts and characteristics",
    "File system vs. DBMS",
    "Advantages of DBMS",
    "Data models: Hierarchical, Network, Relational, Object-Oriented",
    "DBMS architecture & components"
    ]
  },
  {
    id: 2,
    title: 'Entity-relationship(ER) Model',
    description: 'Understanding ER diagrams and keys',
    details: '',
  
    chapters: [
      "Entities, attributes, relationships",
      "ER diagrams with cardinality & participation",
      "Weak vs. strong entity sets",
      "Generalization, specialization, aggregation"
    ]
  },
  {
    id: 3,
    title: 'Relational Model and Relational Algebra',
    description: 'Exploring relational model and algebra',
    details: '',
    
    chapters: [
      "Structure of relational databases",
      "Keys (primary, candidate, foreign, composite)",
      "Integrity constraints (domain, entity, referential)",
      "Relational algebra operations (select, project, join, union, intersection, division)"
    ]
  },
  {
    id: 4,
    title: 'Structured Query Language(SQL)',
    description: 'Understanding SQL',
    details: '',
    
    chapters: [
     "DDL, DML, DCL, TCL commands",
     "SQL queries (SELECT, WHERE, GROUP BY, HAVING, ORDER BY)",
     "Joins (inner, outer, self join)",
     "Subqueries & nested queries",
     "Views, indexes, sequences"
    ]
  },
    {
    id: 5,
    title: 'Normalization and Transaction Management',
    description: 'Understanding normalization and transaction',
    details: '',
    
    chapters: [
      "Functional dependencies",
      "Normal forms (1NF, 2NF, 3NF, BCNF, 4NF, 5NF)",
      "Transaction properties (ACID)",
      "Concurrency control (locking, deadlock)",
      "Recovery techniques"
    ]
  },
   {
    id: 6,
    title: 'Advanced topics in Dbms',
    description: 'Advanced Dbms',
    details: '',
    
    chapters: [
     "NoSQL databases (MongoDB, Cassandra, Redis)",
     "Distributed databases",
     "Data warehousing & data mining basics",
     "Database security & authorization",
     "Big Data & Cloud databases"
    ]
  },
  {
    id:7,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"DBMS Notes",link:'/files/dbms_notes.pdf'}
    ]
  },
  {
    id: 8,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to online courses, books, and articles for deeper understanding.',
    chapters:[
      "Online Courses: Coursera, edX, Udacity",
    "DBMS: MySQL, PostgreSQL, Oracle, MongoDB",
    "Platforms: GitHub, Heroku, Firebase, AWS"
       
    ],
    url :[
       // Web Development
    "https://www.coursera.org/specializations/html",
    "https://www.edx.org/professional-certificate/harvardx-data-science",

    // DBMS Sources
    "https://www.coursera.org/learn/database-management",
    "https://www.udemy.com/course/the-complete-sql-bootcamp/",
    "https://www.mongodb.com/university/courses/M001/about",
    "https://www.oracle.com/database/technologies/appdev/learn-oracle-sql.html",

    // Platforms
    "https://docs.github.com/en/get-started/quickstart",
    "https://devcenter.heroku.com/start",
    "https://firebase.google.com/docs",
    "https://aws.amazon.com/getting-started/"
      
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
          <li><Link to="/Dbms">Syllabus</Link></li>
          <li><Link to="/">Assignments</Link></li>
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