import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to SQL',
    description: 'Fundamental concepts of SQL',
    details: '',
  
    chapters: [
"What is SQL?",
"History & importance of SQL in databases",
"SQL standards & versions",
"Types of SQL commands: DDL, DML, DCL, TCL"
    ]
  },
  {
    id: 2,
    title: 'Data Definition Language (DDL)',
    description: 'Understanding DDL',
    details: '',
  
    chapters: [
      "CREATE, ALTER, DROP",
      "Data types in SQL",
      "Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT)",
      "Schema & table creation"
    ]
  },
  {
    id: 3,
    title: 'Data Manipualtion Language(DML)',
    description: 'Understanding DML',
    details: '',
    
    chapters: [
      "INSERT, UPDATE, DELETE",
      "SELECT basics",
      "Filtering with WHERE",
      "Sorting results with ORDER BY",
      "LIMIT / TOP / ROWNUM"
    ]
  },
  {
    id: 4,
    title: 'Joins & Subqueries',
    description: 'Joins and subqueries',
    details: '',
    
    chapters: [
      "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN",
      "CROSS JOIN, SELF JOIN",
      "Nested subqueries",
      "Correlated subqueries",
      "EXISTS, ANY, ALL"
    ]
  },
    {
    id: 5,
    title: 'Functions and Grouping',
    description: 'Functions and Grouping in SQL',
    details: '',
    
    chapters: [
      "Aggregate functions (COUNT, SUM, AVG, MIN, MAX)",
      "GROUP BY and HAVING",
      "Scalar functions (UPPER, LOWER, LEN, ROUND, DATE functions)",
      "String functions (CONCAT, SUBSTRING, TRIM)"
    ]
  },
   {
    id: 6,
    title: 'Advanced SQL',
    description: 'Advance',
    details: '',
    
    chapters: [
      "Views (CREATE VIEW, UPDATE VIEW)",
      "Indexes (Clustered, Non-clustered)",
      "Stored Procedures & Functions",
      "Triggers",
      "Transactions & ACID properties (COMMIT, ROLLBACK, SAVEPOINT)"
    ]
  },
  {
    id:7,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"Sql notes",link:'/files/sql_notes.pdf'}
    ]
  },
  {
    id: 8,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to online courses, books, and articles for deeper understanding.',
    chapters:[
      "Online Courses: Coursera, Udemy, Khan Academy",
    "SQL Documentation: PostgreSQL, MySQL, W3Schools",
    "Books: 'Learning SQL' by Alan Beaulieu, 'SQL for Data Analysis'"
       
    ],
    url :[
        // Courses
    "https://www.coursera.org/learn/sql-for-data-science",
    "https://www.udemy.com/course/the-complete-sql-bootcamp/",
    "https://www.khanacademy.org/computing/computer-programming/sql",

    // Documentation & Tutorials
    "https://www.postgresql.org/docs/",
    "https://dev.mysql.com/doc/",
    "https://www.w3schools.com/sql/",

    // Books (reference)
    "https://www.amazon.com/Learning-SQL-Alan-Beaulieu/dp/0596520832",
    "https://www.oreilly.com/library/view/sql-for-data/9781098455142/"
      
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
          <li><Link to="/Sql">Syllabus</Link></li>
          <li><Link to="/Sqlassign">Assignments</Link></li>
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