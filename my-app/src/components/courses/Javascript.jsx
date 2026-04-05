import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Javascript',
    description: 'Master JavaScript fundamentals, data types, and core concepts',
    details: 'Learn what JavaScript is, its history, how to embed it in HTML, variables, data types, operators, and essential programming concepts.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
    thumbnail: 'https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    chapters: [
    "What is JavaScript? (History, usage, role in web dev)",
     "Embedding JavaScript in HTML (<script> tag)",
     "Comments and whitespace",
     "Variables & Constants (var, let, const)",
     "Data Types:",
     "Primitive types: string, number, boolean, null, undefined, symbol, bigint",
     "Reference types: Objects, Arrays, Functions",
     "Operators:",
     "Arithmetic, Assignment, Comparison, Logical, Ternary",
     "Type Conversion (Implicit vs Explicit)",
     "String Manipulation",
     "Template Literals",
     "Console Methods (console.log, error, table, etc.)"  
    ],
    resources: [
      { name: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { name: 'JavaScript.info', url: 'https://javascript.info/' }
    ]
  },
  {
    id: 2,
    title: 'Control Structures & Functions',
    description: 'Master control flow, loops, and function programming in JavaScript',
    details: 'Learn conditional statements, loops, function declarations, scope, closures, and advanced function concepts.',
    duration: '3 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/xuyyXn2iAL8',
    thumbnail: 'https://img.youtube.com/vi/xuyyXn2iAL8/maxresdefault.jpg',
    chapters: [
      "Conditionals:",
          
           " if, else if, else",
            "switch statements",
            "Loops:",
            "for, while, do...while",
            "Loop control: break, continue",
            "Looping through arrays and objects (for...of, for...in)",
          "Functions:",
           "Function declarations and expressions",
           "Parameters and return values", 
           "Arrow functions (=>)",
           "Callback functions",
          "IIFE (Immediately Invoked Function Expressions)",
          "Recursion",
          "Scope:",
          "Global vs Local",
          "Block scope (with let and const)",
          "Function scope",
           "Hoisting",
          "Closures"
    ],
    resources: [
      { name: 'Control Flow', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
      { name: 'Functions Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' }
    ]
  },
  {
    id: 3,
    title: 'Object-Oriented JavaScript',
    description: 'Master objects, prototypes, classes, and OOP concepts in JavaScript',
    details: 'Learn object literals, constructor functions, prototypes, ES6 classes, inheritance, and modern JavaScript OOP patterns.',
    duration: '2.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/PFmuCDHHpwk',
    thumbnail: 'https://img.youtube.com/vi/PFmuCDHHpwk/maxresdefault.jpg',
    chapters: [
      "Objects and Object Literals",
      "this in objects",
      "Constructor Functions",
      "Prototypes and Inheritance",
      "ES6 Classes",
      "Encapsulation, Inheritance, Polymorphism",
      "Private Fields and Methods"
    ],
    resources: [
      { name: 'Working with Objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' },
      { name: 'Classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' }
    ]
  },
  {
    id: 4,
    title: 'DOM Manipulation & Events',
    description: 'Master DOM manipulation, event handling, and dynamic web interactions',
    details: 'Learn to interact with HTML elements, handle user events, create dynamic content, and build interactive web applications.',
    duration: '3 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/y17RuWkWdn8',
    thumbnail: 'https://img.youtube.com/vi/y17RuWkWdn8/maxresdefault.jpg',
    
    chapters: [
      "DOM (Document Object Model)",
      "Selecting elements: getElementById, querySelecto",
      "Modifying content and styles",
      "Creating, removing, and cloning elements",
      "Event Handling",
     "addEventListener, event propagation (bubbling & capturing)",
     "Event delegation",
     "Browser APIs",
     "localStorage, sessionStorage",
     "fetch API (AJAX requests)",
     "Geolocation, Clipboard, Notifications, etc.",
    "Form validation",
     "Timers & intervals"
    ],
    resources: [
      { name: 'DOM Introduction', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' },
      { name: 'Event Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/Events' }
    ]
  },
  {
     id: 5,
    title: ' ES6+ and Modern JavaScript',
    description: 'Master modern JavaScript features and advanced concepts',
    details: 'Learn ES6+ features including modules, promises, async/await, destructuring, and modern JavaScript patterns.',
    duration: '2.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/nZ1DMMsyVyI',
    thumbnail: 'https://img.youtube.com/vi/nZ1DMMsyVyI/maxresdefault.jpg',
    chapters: [
     "Let & Const (Block Scoping)",
     "Arrow Functions",
     "Template Literals",
     "Destructuring Assignment",
     "Default, Rest, and Spread Parameters",
     "Modules: import and export",
     "Promises and Async/Await",
     "Map, Set, WeakMap, WeakSet",
     "Optional Chaining (?.), Nullish Coalescing (??)",
     "Generators and Iterators",
     "Symbol and BigInt"
    ],
    resources: [
      { name: 'ES6 Features', url: 'https://babeljs.io/docs/en/learn' },
      { name: 'Async Programming', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous' }
    ]
    },
    {
      id:6,
      title:'Notes',
      description:'Notes to understand the concept',
      notes:[
        {name:'Javascript Notes',link:'/files/Javascript_notes.pdf'}
      ]
    },
  {
    id: 7,
    title: 'Sources',
    description: 'Resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "JavaScript.info: https://javascript.info/",
      "Eloquent JavaScript (book): https://eloquentjavascript.net/",
      "YouTube Channels (Traversy Media, Academind, The Net Ninja)",
      "Online Courses (Udemy, Coursera, freeCodeCamp)"
    ],
    url:[
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://javascript.info/",
      "https://eloquentjavascript.net/",
      "https://www.youtube.com/c/TraversyMedia",
      "https://www.youtube.com/c/Academind",
      "https://www.youtube.com/c/TheNetNinja",
      "https://www.udemy.com/topic/javascript/",
      "https://www.coursera.org/courses?query=javascript",
      "https://www.freecodecamp.org/"
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
          <li><Link to="/Javascript">Syllabus</Link></li>
          <li><Link to="/Jsassign">Assignments</Link></li>
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

                  {item.videoUrl && (
                    <div className="video-section">
                      <h4>📹 Video Lecture</h4>
                      <div className="video-container">
                        <iframe
                          src={item.videoUrl}
                          title={`${item.title} video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  {item.resources && (
                    <div className="resources-section">
                      <h4>🔗 Additional Resources</h4>
                      <ul className="resource-list">
                        {item.resources.map((resource, idx) => (
                          <li key={idx}>
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="resource-link"
                            >
                              {resource.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
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