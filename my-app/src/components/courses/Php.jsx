import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Php Basics',
    description: 'Fundamental concepts of PHP and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
  
    chapters: [
      "Introduction to PHP", 
      "Installing XAMPP / WAMP / LAMP",
       "PHP syntax and tags",
       "PHP file structure and execution",
        "Variables and data types",
        "Constants",
        "Comments",
         "Output: echo, print",
          "Basic operators: arithmetic, assignment, comparison, logical"
    ]
  },
  {
    id: 2,
    title: 'Control Structures',
    description: 'Understanding control structures in PHP',
    details: '',

    chapters: [
    "Conditional statements: if, if-else, if-elseif-else, switch",
    "Looping: for, while, do-while, foreach",
    "Break and continue",
    "Match expression (PHP 8+)"  
    ]
  },
  {
    id: 3,
    title: 'Functions and Arrays',
    description: 'Functions and Arrays in PHP',
    details: '',

    chapters: [
     "Declaring and calling functions",
     "Function parameters and return values",
     "Variable scope: local, global, static",
     "Built-in functions",
     "User-defined functions",
     "Arrays: Indexed, associative, and multidimensional arrays",
     "Array functions: array_push(), array_merge(), count(), etc.",
     "Looping through arrays"
    ]
  },
  {
    id: 4,
    title: 'Forms and User Input',
    description: 'Handling forms and user input in PHP',
    details: '',
  
    chapters: [
     "HTML forms with PHP",
     "$_GET and $_POST",
     "$_REQUEST, $_SERVER, $_FILES",
     "Form validation and sanitization",
     "File upload handling",
     "Security basics: input filtering, escaping HTML, preventing XSS/SQL injection" 
    ]
  },
  {
    id: 5,
    title: 'Strings, Date/Time and File handling',
    description: 'Working with strings, date/time, and file handling in PHP',
    details: '',
  
    chapters: [
     "String functions: strlen(), strtoupper(), str_replace(), etc.",
     "String concatenation",
     "Date and time functions: date(), time(), strtotime()",
     "Timezones and formatting",
     "File operations:fopen(), fread(), fwrite(), fclose()",
     "File upload basics",
     "File existence and deletion"
    ]
  },
  {
    id: 6,
    title: 'Php with MySQL',
    description: 'Connecting PHP with MySQL databases',
    details: '',
  
    chapters: [
"Introduction to MySQL and phpMyAdmin",
"Connecting to MySQL using mysqli or PDO",
"Performing queries: SELECT, INSERT, UPDATE, DELETE",
"Displaying data from database",
"Prepared statements (for security)",
"Error handling",
"Database CRUD operations",
"Using JOINs in PHP queries"
    ]
  },
  {
    id: 7,
    title: 'Advanced PHP Concepts',
    description: 'Advanced concepts in PHP',
    details: '',
    
    chapters: [
"Sessions and Cookies:",
"session_start(), $_SESSION, setcookie(), $_COOKIE",
"PHP OOP (Object-Oriented Programming):",
"Classes and objects",
"Constructors and destructors",
"Inheritance and visibility",
"Interfaces and traits",
"PHP and JSON",
"PHP and APIs (RESTful)",
"Sending emails using mail(), PHPMailer",
"Introduction to Composer (PHP package manager)",
"Introduction to MVC frameworks (e.g., Laravel basics)"
    ]
  },
  {
    id:8,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:'PHP',link:'/files/php_notes.pdf'}
    ]
  },
  {
    id: 8,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
        "PHP Documentation",
        "Online Tutorials (W3Schools, PHP.net, etc.)",
        "Books (PHP: The Right Way)",
        "Community Forums (Stack Overflow, Reddit)"
    ],
    url:[
        "https://www.php.net/docs.php",
        "https://www.w3schools.com/php/",
        "https://www.tutorialspoint.com/php/index.htm",
        "https://www.geeksforgeeks.org/php-tutorials/",
        "https://www.freecodecamp.org/news/learn-php-with-these-free-resources/",
        "https://www.phptherightway.com/",
        "https://www.php.net/manual/en/index.php"
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
          <li><Link to="/Php">Syllabus</Link></li>
          <li><Link to="/Phpassign">Assignments</Link></li>
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