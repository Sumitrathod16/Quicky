import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Basics of C++ Programming',
    description: 'Fundamental concepts of C++ and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
      "History & features of C++",
      "Structure of a C++ program",
      "Keywords, identifiers",
      "Variables and constants",
      "Data types & type modifiers",
      "Input/output:cin, cout, endl",
      "Type casting",
      "Header files and namespaces (std)"
    ]
  },
  {
    id: 2,
    title: 'Operators & Control Statements',
    description: 'Understanding the operators and control statements in C++',
    details: '',
    
    chapters: [
      "Arithmetic, relational, logical, assignment operators",
      "Bitwise, increment/decrement, conditional operators",
      "Operator precedence & associativity",
      "Decision making: if, if-else, else-if, switch",
      "Loops: for, while, do-while",
      "Jumping statements:break, continue, goto, return"
    ]
  },
  {
    id: 3,
    title: 'Functions and Storage Classes',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
  
    chapters: [
     "Function definition, declaration, and call",
     "Function overloading",
     "Default arguments",
     "Inline functions",
     "Recursion",
     "Scope rules",
     "Storage classes: auto, static, register, extern"
    ]
  },
  {
    id: 4,
    title: 'Object-Oriented Programming Concepts',
    description: 'Understanding OOP in C++',
    details: '',
  
    chapters: [
     "Classes and Objects Data members and member functions Access specifiers: public, private, protected this pointer",
    "Constructors and Destructors Default, parameterized, copy constructors Constructor overloading Destructor basics",
     "Inheritance Types: single, multiple, multilevel, hierarchical, hybrid ,protected access specifier,Constructor behavior in inheritance",
     "Polymorphism Function overriding Virtual functions Runtime polymorphism Abstract classes virtual and pure virtual functions"
    ]
  },
  {
    id: 5,
    title: 'Arrays Strings and Pointers',
    description: 'Understanding Arrays, Strings, and Pointers in C++',
    details: '',
    
    chapters: [
     "One and multi-dimensional arrays",
     "Array of objects",
     "String handling (C-style and std::string)",
     "Pointers: Basic pointer concepts Pointers and arrays Pointers to objects this pointer",
     "Dynamic memory: new, delete operators, Dynamic arrays"
    ]
  },
  {
    id: 6,
    title: 'Operator overloading and Templates',
    description:' Operator Overloading and Templates in C++',
    details: '',
  
    chapters: [
      
      "Operator overloading: Overloading unary & binary operators,Overloading using member and friend functions",
      "Function templates :Class templates,Template specialization"
        ]
  },
  {
    id: 7,
    title: 'File Handling and Exception Handling',
    description: 'File Handling and Exception Handling in C++',
    details: '',
  
    chapters: [
"File Handling File streams: ifstream, ofstream, fstream, Opening, reading, writing, closing files File modes (ios::in, ios::out, etc.)",
"Exception Handling Try, catch, throw Multiple catch block Catching all exceptions",
"Standard Template Library (STL) ,Containers: vector, list, deque, stack, queue, map, set, Iterators Algorithms: sort(), find(), etc.Function objects & Lambda expressions"
    ]
  },
  {
  id:8,
  title:'Notes',
  description:'Notes to understand the concept',
  notes:[
    {name:"C++ Notes",link:"/files/cpp_notes.pdf"}
  ]
},
  {
    id: 9,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
        "C++ Programming Documentation",
        "Online Tutorials (GeeksforGeeks, W3Schools, etc.)",
        "Books (The C++ Programming Language by Bjarne Stroustrup)",
        "Community Forums (Stack Overflow, Reddit)"
    ],
    url:[
        "https://www.learncpp.com/",
        "https://www.tutorialspoint.com/cplusplus/index.htm",
        "https://www.geeksforgeeks.org/c-plus-plus/",
        "https://www.cplusplus.com/",
        "https://www.learn-cpp.org/",
        "https://www.freecodecamp.org/news/learn-c-plus-plus-with-these-free-resources/",
        "https://www.cprogramming.com/tutorial/c++-tutorial.html"
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
          <li><Link to="/C++">Syllabus</Link></li>
          <li><Link to="/Cppassign">Assignments</Link></li>
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