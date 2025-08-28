import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Python',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',

    chapters: [
    "What is Python",
    "Features and application of Python",
    "Installation & Environment Setup",
    "Introduction to Python shells and IDEs"
]
  },
  {
    id: 2,
    title: 'Variable,Keywords ,Data Types,and Identifiers',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
  
    chapters: [
     "Variables",
      "Keywords",
      "Data types(int,float,str,bool,etc.)",
      "Identifiers",
      "Type casting"
]
  },
  {
    id: 3,
    title: 'Data Strucutres',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [
   "Strings",
      "Lists",
      "Tuples",
      "Sets",
      "Dictionaries"
]
  },
  {
    id: 4,
    title: 'Operators in Python',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Arithmetic Operators",
       "Logical Operators",
       "Realtional Operators",
       "Bitwise Operators",
       "Assignment Operators",
       "Membership Operators",
       "Identity Operators"  
  ]
  },
  {
    id: 5,
    title: 'Control Flow Statements',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Conditional Statements(if, elif, else)",
       "Looping Statements(for,while)",
       "break,continue , and pass"
    ]
  },
  {
    id: 6,
    title: 'Input and Output in python',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "input() function",
       "print() function and formatting"
    ]
  },
  {
    id: 7,
    title: 'Functions',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Defining and calling functions",
       "Types of functions(Built-in,user-defined)",
       "Arguments(Positional,Keyword,Default,Variable-length)",
       "Return Statements",
       "Recursion",
       "Anonymous functions(lambda)"
    ]
  },
  {
    id: 8,
    title: 'Object oriented programming in python',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "Classes and Objects",
       "__init__ Constructor",
       "Instance vs Class Variable",
       "Inheritance",
       "Method Overriding",
       "Access Specifiers(Public,Private,Protected)",
       "self Keyword",
       "super() Function"
    ]
  },
  {
    id: 9,
    title: 'Exception Handling',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "try,except,else,finally",
       "Raising Exceptions(raise)",
       "Custom Exceptions",
       "assert Statement"


    ]
  },
   {
    id: 10,
    title: 'Python Comprehensions',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters: [
      "List Comprehension",
      "Dictionary Comprehension",
      "Set Comprehension"
    ]
  },
   {
    id: 11,
    title: 'Decorators',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "Decorators"
    ]
  }, 
  {
   id: 12,
    title: 'Functional Programming tools',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters: [
       "map()",
      "filter()",
      "lambda Expressions",
      "reduce()"
]
  }, 
  {
  id:13,
  title:'Notes',
  description:'Notes to understand the concept',
  notes:[
    {name:'Python',link:'/files/python_notes.pdf'}
  ]
  },
  {
    id: 14,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters:[
      "Python Official Documentation: https://docs.python.org/3/",
      "W3Schools Python Tutorial: https://www.w3schools.com/python/",
      "Real Python: https://realpython.com/",
      "GeeksforGeeks Python Programming Language: https://www.geeksforgeeks.org/python-programming-language/"
    ],
    url:[
      "https://docs.python.org/3/",
      "https://www.w3schools.com/python/",
      "https://realpython.com/",
      "https://www.geeksforgeeks.org/python-programming-language/"
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
          <li><Link to="/Python">Syllabus</Link></li>
          <li><Link to="/Pyassign">Assignments</Link></li>
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