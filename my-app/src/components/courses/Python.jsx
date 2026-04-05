import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Python',
    description: 'Master the fundamentals of Python programming and development environment setup',
    details: 'Learn what Python is, its features, applications, and how to set up your development environment with IDEs and shells.',
    duration: '2 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
    thumbnail: 'https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg',
    chapters: [
      "What is Python",
      "Features and applications of Python",
      "Installation & Environment Setup",
      "Introduction to Python shells and IDEs"
    ],
    resources: [
      { name: 'Python Official Site', url: 'https://www.python.org/' },
      { name: 'Python Installation Guide', url: 'https://www.python.org/downloads/' }
    ]
  },
  {
    id: 2,
    title: 'Variables, Keywords, Data Types & Identifiers',
    description: 'Understand Python\'s core building blocks and data handling',
    details: 'Master variables, keywords, data types, identifiers, and type casting - the foundation of Python programming.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/k9TUPpGqYTo',
    thumbnail: 'https://img.youtube.com/vi/k9TUPpGqYTo/maxresdefault.jpg',
    chapters: [
      "Variables and memory allocation",
      "Python keywords and reserved words",
      "Data types (int, float, str, bool, etc.)",
      "Identifiers and naming conventions",
      "Type casting and conversion"
    ],
    resources: [
      { name: 'Python Data Types', url: 'https://docs.python.org/3/library/stdtypes.html' },
      { name: 'Naming Conventions', url: 'https://www.python.org/dev/peps/pep-0008/#naming-conventions' }
    ]
  },
  {
    id: 3,
    title: 'Data Structures',
    description: 'Master Python\'s built-in data structures for efficient data manipulation',
    details: 'Learn strings, lists, tuples, sets, and dictionaries - the essential data structures every Python developer needs.',
    duration: '3 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/W8KRzm-HUcc',
    thumbnail: 'https://img.youtube.com/vi/W8KRzm-HUcc/maxresdefault.jpg',
    chapters: [
      "String operations and methods",
      "List operations, indexing, and slicing",
      "Tuple creation and immutability",
      "Set operations and uniqueness",
      "Dictionary key-value pairs and methods"
    ],
    resources: [
      { name: 'Python Collections', url: 'https://docs.python.org/3/library/collections.html' },
      { name: 'Data Structures Tutorial', url: 'https://realpython.com/python-data-structures/' }
    ]
  },
  {
    id: 4,
    title: 'Operators in Python',
    description: 'Comprehensive guide to all Python operators and their applications',
    details: 'Master arithmetic, logical, relational, bitwise, assignment, membership, and identity operators.',
    duration: '2 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/4zy0mRsyP4I',
    thumbnail: 'https://img.youtube.com/vi/4zy0mRsyP4I/maxresdefault.jpg',
    chapters: [
      "Arithmetic Operators (+, -, *, /, %, **, //)",
      "Logical Operators (and, or, not)",
      "Relational Operators (==, !=, <, >, <=, >=)",
      "Bitwise Operators (&, |, ^, ~, <<, >>)",
      "Assignment Operators (=, +=, -=, *=, /=, etc.)",
      "Membership Operators (in, not in)",
      "Identity Operators (is, is not)"
    ],
    resources: [
      { name: 'Operator Precedence', url: 'https://docs.python.org/3/reference/expressions.html#operator-precedence' },
      { name: 'Bitwise Operations', url: 'https://realpython.com/python-bitwise-operators/' }
    ]
  },
  {
    id: 5,
    title: 'Control Flow Statements',
    description: 'Master decision making and loops in Python programming',
    details: 'Learn conditional statements, looping constructs, and control flow keywords to create dynamic programs.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/4u2ClNCtcgA',
    thumbnail: 'https://img.youtube.com/vi/4u2ClNCtcgA/maxresdefault.jpg',
    chapters: [
      "Conditional Statements (if, elif, else)",
      "Looping Statements (for, while)",
      "break, continue, and pass statements",
      "Nested loops and conditions",
      "Loop control techniques"
    ],
    resources: [
      { name: 'Control Flow Tutorial', url: 'https://docs.python.org/3/tutorial/controlflow.html' },
      { name: 'Loop Best Practices', url: 'https://realpython.com/python-for-loop/' }
    ]
  },
  {
    id: 6,
    title: 'Input and Output in Python',
    description: 'Learn to interact with users and handle data input/output operations',
    details: 'Master the input() function, print() formatting, file I/O, and string formatting techniques.',
    duration: '2 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/q2SGW2VgwAM',
    thumbnail: 'https://img.youtube.com/vi/q2SGW2VgwAM/maxresdefault.jpg',
    chapters: [
      "input() function and user input",
      "print() function and output formatting",
      "String formatting (f-strings, format(), %)",
      "File input/output operations",
      "Standard input/output streams"
    ],
    resources: [
      { name: 'Input/Output Tutorial', url: 'https://docs.python.org/3/tutorial/inputoutput.html' },
      { name: 'String Formatting', url: 'https://realpython.com/python-string-formatting/' }
    ]
  },
  {
    id: 7,
    title: 'Functions',
    description: 'Master function definition, parameters, and advanced function concepts',
    details: 'Learn to create reusable code with functions, understand different argument types, and explore advanced concepts like recursion and lambda functions.',
    duration: '3.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/9Os0o3wzS_I',
    thumbnail: 'https://img.youtube.com/vi/9Os0o3wzS_I/maxresdefault.jpg',
    chapters: [
      "Defining and calling functions",
      "Types of functions (Built-in, user-defined)",
      "Arguments (Positional, Keyword, Default, Variable-length)",
      "Return statements and multiple returns",
      "Recursion and recursive functions",
      "Anonymous functions (lambda expressions)"
    ],
    resources: [
      { name: 'Function Documentation', url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions' },
      { name: 'Advanced Functions', url: 'https://realpython.com/defining-your-own-python-function/' }
    ]
  },
  {
    id: 8,
    title: 'Object-Oriented Programming',
    description: 'Master OOP concepts and create robust Python applications',
    details: 'Learn classes, objects, inheritance, polymorphism, and encapsulation to build maintainable and scalable Python programs.',
    duration: '4 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/Ej_02ICOIgs',
    thumbnail: 'https://img.youtube.com/vi/Ej_02ICOIgs/maxresdefault.jpg',
    chapters: [
      "Classes and Objects",
      "__init__ Constructor and initialization",
      "Instance vs Class variables",
      "Inheritance and method overriding",
      "Access specifiers (Public, Private, Protected)",
      "self keyword and instance methods",
      "super() function and parent class access"
    ],
    resources: [
      { name: 'OOP Tutorial', url: 'https://docs.python.org/3/tutorial/classes.html' },
      { name: 'Python OOP Guide', url: 'https://realpython.com/python3-object-oriented-programming/' }
    ]
  },
  {
    id: 9,
    title: 'Exception Handling',
    description: 'Learn to handle errors gracefully and write robust Python code',
    details: 'Master try-except blocks, custom exceptions, and error handling best practices to create reliable applications.',
    duration: '2.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/NIWwJbo-9_8',
    thumbnail: 'https://img.youtube.com/vi/NIWwJbo-9_8/maxresdefault.jpg',
    chapters: [
      "try, except, else, finally blocks",
      "Raising exceptions with raise",
      "Creating custom exceptions",
      "assert statement and debugging",
      "Exception handling best practices"
    ],
    resources: [
      { name: 'Exception Handling', url: 'https://docs.python.org/3/tutorial/errors.html' },
      { name: 'Error Handling Guide', url: 'https://realpython.com/python-exceptions/' }
    ]
  },
  {
    id: 10,
    title: 'Python Comprehensions',
    description: 'Write concise and efficient code with Python comprehensions',
    details: 'Master list, dictionary, and set comprehensions to write clean, readable, and efficient Python code.',
    duration: '2 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/3dt4OGnU5sM',
    thumbnail: 'https://img.youtube.com/vi/3dt4OGnU5sM/maxresdefault.jpg',
    chapters: [
      "List comprehensions syntax and usage",
      "Dictionary comprehensions",
      "Set comprehensions",
      "Nested comprehensions",
      "Conditional comprehensions"
    ],
    resources: [
      { name: 'Comprehensions Guide', url: 'https://realpython.com/list-comprehension-python/' },
      { name: 'Advanced Comprehensions', url: 'https://www.python.org/dev/peps/pep-0202/' }
    ]
  },
  {
    id: 11,
    title: 'Decorators',
    description: 'Enhance function behavior with Python decorators',
    details: 'Learn to create and use decorators to modify function behavior, implement cross-cutting concerns, and write reusable code.',
    duration: '2.5 hours',
    difficulty: 'Advanced',
    videoUrl: 'https://www.youtube.com/embed/FsAPt_9Bf3U',
    thumbnail: 'https://img.youtube.com/vi/FsAPt_9Bf3U/maxresdefault.jpg',
    chapters: [
      "Understanding decorators",
      "Creating function decorators",
      "Decorator syntax (@decorator)",
      "Multiple decorators",
      "Class-based decorators",
      "Practical decorator examples"
    ],
    resources: [
      { name: 'Decorator Tutorial', url: 'https://realpython.com/primer-on-python-decorators/' },
      { name: 'Advanced Decorators', url: 'https://docs.python.org/3/reference/compound_stmts.html#function-definitions' }
    ]
  },
  {
    id: 12,
    title: 'Functional Programming Tools',
    description: 'Master functional programming concepts in Python',
    details: 'Learn map(), filter(), reduce(), lambda expressions, and other functional programming tools available in Python.',
    duration: '2.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/cKlnR-Cwo7c',
    thumbnail: 'https://img.youtube.com/vi/cKlnR-Cwo7c/maxresdefault.jpg',
    chapters: [
      "map() function and transformations",
      "filter() function and selection",
      "lambda expressions syntax",
      "reduce() function and accumulation",
      "Combining functional tools",
      "Performance considerations"
    ],
    resources: [
      { name: 'Functional Programming', url: 'https://docs.python.org/3/library/functional.html' },
      { name: 'Functional Tools Guide', url: 'https://realpython.com/python-functional-programming/' }
    ]
  },
  {
    id: 13,
    title: 'Notes',
    description: 'Download comprehensive Python programming notes',
    notes: [
      { name: 'Python Notes', link: '/files/python_notes.pdf' }
    ]
  },
  {
    id: 14,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Comprehensive collection of official documentation, tutorials, and community resources for Python development.',
    chapters: [
      "Python Official Documentation",
      "W3Schools Python Tutorial",
      "Real Python Learning Platform",
      "GeeksforGeeks Python Programming"
    ],
    url: [
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
            <div className="card-header">
              {item.thumbnail && (
                <div className="video-thumbnail">
                  <img src={item.thumbnail} alt={`${item.title} thumbnail`} />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
              )}
              <div className="card-meta">
                {item.duration && (
                  <span className="duration">
                    <i className="clock-icon">⏱️</i> {item.duration}
                  </span>
                )}
                {item.difficulty && (
                  <span className={`difficulty ${item.difficulty.toLowerCase()}`}>
                    {item.difficulty}
                  </span>
                )}
              </div>
            </div>

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
                  {item.details && <p className="details-text">{item.details}</p>}

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

                  {item.chapters && (
                    <div className="chapters-section">
                      <h4>📚 Chapters Covered</h4>
                      <ul className="chapter-list">
                        {item.chapters.map((chapter, idx) => (
                          <li key={idx}>{chapter}</li>
                        ))}
                      </ul>
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
                    <div className="notes-section">
                      <h4>📄 Download Notes</h4>
                      <ul className="notes-list">
                        {item.notes.map((note, idx) => (
                          <li key={idx}>
                            <a
                              href={note.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="note-link"
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
                    <div className="links-section">
                      <h4>🌐 Useful Links</h4>
                      <ul className="links-list">
                        {item.url.map((link, idx) => (
                          <li key={idx}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-item"
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