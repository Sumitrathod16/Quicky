import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Basics of C Programming',
    description: 'Fundamental concepts of C and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
      "History & features of C",
      "Structure of a C program",
      "Keywords, identifiers",
      "Variables and constants",
       "Data types and type modifiers",
        "Input/Output functions: printf(), scanf()",
         "Comments in C",
        "Compilation & execution process"
    ]
  },
  {
    id: 2,
    title: ' Operators & Expressions',
    description: 'Understanding the operators and expressions in C',
    details: '',
    
    chapters: [
      "Arithmetic operators",
      "Relational operators",
      "Logical operators",
      "Bitwise operators",
      "Assignment operators",
      "Increment/Decrement operators",
      "Conditional (Ternary) operator",
      "Operator precedence and associativity",
      "Type conversion (implicit & explicit)"
    ]
  },
  {
    id: 3,
    title: 'Control Statements',
    description: 'Exploring Control Statements in C',
    details: '',
    
    chapters: [
     "Conditional statements:if, if-else, nested if, else-if ladder",
     "switch-case",
     "Looping statements:for, while, do-while",
     "Jumping statements:break, continue, goto, return"
    ]
  },
  {
    id: 4,
    title: 'Functions in C',
    description: 'Functions and their applications in C',
    details: '',
    chapters: [
     "Function declaration, definition, and call",
     "Types of functions (with/without arguments & return values)",
     "Recursion",
     "Scope and lifetime of variables",
     "Storage classes: auto, static, extern, register"
    ]
  },
  {
    id: 5,
    title: 'Arrays and Strings',
    description: 'Understanding Arrays and Strings in C',
    details: '',
    
    chapters: [
    "One-dimensional arrays",
    "Two-dimensional arrays (matrices)",
    "Multi-dimensional arrays",
    "String handling:",
      "Declaring & initializing strings :String I/O: gets(), puts(), scanf(), printf()String functions: strlen(), strcpy(), strcmp(), strcat(), etc."
    ]
  },
  {
    id: 6,
    title: 'Pointers and Dynamic Memory Allocation',
    description: 'Pointers and Memory Management in C',
    details: '',
  
    chapters: [
      "Basics of pointers",
     "Pointer arithmetic",
      "Pointers and arrays",
       "Pointers and functions",
        "Pointers to pointers",
        "Dynamic memory allocation: malloc(), calloc(), realloc(), free()"
    ]
  },
  {
    id: 7,
    title: 'Structures ,Unions and File Handling',
    description: 'Structures, Unions, and File Handling in C',
    details: '',
    
    chapters: [
      "Structures:Declaration, initialization, accessing members",
       "Arrays of structures",
        "Nested structures",
         "Structure with pointers",
         "Unions",
        "Enumerated types (enum)",
      "File handling:File I/O functions: fopen(), fclose(), fgetc(), fputc(), fprintf(), fscanf(), etc.File modes (r, w, a, etc.)"
    ]
  },
  {
    id: 8,
    title: 'Notes',
    description: 'Notes to understand the concept',
    notes:[
      {name:"C notes", link:"/files/c_notes.pdf"}
    ]
  },
  {
    id: 9,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
        "C Programming Documentation",
        "Online Tutorials (GeeksforGeeks, W3Schools, etc.)",
        "Books (The C Programming Language by Kernighan and Ritchie)",
        "Community Forums (Stack Overflow, Reddit)"
    ],
    url:[
        "https://www.learn-c.org/",
        "https://www.tutorialspoint.com/c_standard_library/index.htm",
        "https://www.geeksforgeeks.org/c-programming-language/"
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
          <li><Link to="/C">Syllabus</Link></li>
          <li><Link to="/Cassign">Assignments</Link></li>
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