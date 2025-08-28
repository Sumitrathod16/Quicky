import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Java',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
  
    chapters: [
    "Java why? What? How? When? Where?",
      "Different Java Versions",
      "How java is different from other technologies",
    ]
  },
  {
    id: 2,
    title: 'Introduction to Java programming Environment',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',

    chapters: [
      "How to install & set path",
      "A simple java program",
      "Compiling and executing Java program",
      "Phases of java program",
      'Analysis of Java program',
      "Understanding syntax and semantic error",
      "Runtime exception",
      "Name of java source file",
      "Platform Independency",
      "Java technology (JDK,JRE,JVM,JIT)",
      "Text Editors",
      "Consoles"
]
  },
  {
    id: 3,
    title: 'Fundamentals of Java programming',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [
     "The naming convention of Java program",
    "Comments Statement",
    "Blocks(Static,Non-static/Instance)",
    "Identifiers,Keywords,Literals",
    "Primitive Data Types,Range",
    "Reference(user-defined) Data type",
    "Variables(Primitive ,Reference)",
    "Type casting, Default value",
    "Operators"
]
  },
  {
    id: 4,
    title: 'Control Structures',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Working with control structures",
      "Types of control structures",
      "Decision control structure(if,if-else,if-else-if,switch-case)",
      "Repetition control structure(for,while,do-while)"
]
  },
  {
    id: 5,
    title: 'Input fundamentals and Data types',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Java program inputs and Keywords",
      "Methods of keyboard inputs",
      "Scanner, BufferedReader",
      "Problem solving",
      "Java Array",
      "Instantiation of an Array",
      "String vs character array accessing array",
      "Elements, Default value,for-each loop,var args",
      "Length of an array(What is array index out of bounds exception)",
      "Increasing and decreasing the size of and copy of an array",
      "Multi dimensional arrays",
      "Application compilation and run"

    ]
  },
  {
    id: 6,
    title: 'Object Oriented Programming',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters: [
       "Procedural vs Object oriented programming",
      "Different types of program procedural and object oriented",
      "Top-down vs bottom-up approach",
      "Introuction to object oriented",
      "Abstraction, Encapsulation ,Inheritance",
      "Polymorphism",
      "Introduction to classes and objects",
      "Custom class Definition",
      "Instance and Static variables",
      "Different ways to create Object instance",
      "Instance variable and its role in class",
      "Constructors,types of constructors,constructor rule,Constructor overloading",
      "Static variables and its use",
      "Methods and their behavior",
      "Constructor vs methods",
      "this keyword",
      "Call by value, Call by reference"
    ]
  },
  {
    id: 7,
    title: 'Command line argument',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
        "What a command-line argument?",
      "Java application with command-line argument",
      "Conversion of command-line argument",
      "Parsing command-line argument",
      "Using methods(static,Non-static)"

    ]
  },
  {
    id: 8,
    title: 'Integrated Development Environment',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
        "Using various Editors",
      "Program compilation, Execution in Editor",
      "Using Eclipse IDE",
      "Project set-up",
      "Source-File generation",
      "Application,Compilation and Run"
    

    ]
  },
  {
    id: 9,
    title: 'Inner Class',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
        "First view of inner class",
      "Outer class access",
      "Types of inner class"

      ]
  },
   {
    id: 10,
    title: 'Types of inheritance',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
 "Complete concept of Inheritance",
      "Sub-classes",
      "Object classes",
      "Constructor calling chain",
      "The use of 'super' keyword",
      "The use of 'private' keyword inheritance",
      "Reference casting"
]
  },
   {
    id: 11,
    title: 'Abstract Classes and inheritance',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
"Introduction to Abstract methods",
          "Abstract classes and Interface",
          "Interface as a Type",
          "Interface vs Abstract class ",
          "Interface Definition",
          "Interface Implementation",
          "Multiple Interface implementation",
          "Interfaces inheritance",
          "How to create the object of interface"
]
  }, 
  {
    id: 12,
    title: 'Polymorphism',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
"Introduction to Polymorphism",
      "Types of Polymorphism",
      "Overloading methods",
      "Overriding methods",
      "Overriding methods",
      "Hiding methods",
      "Final class and Method",
      "Polymorphism Behavior in Java",
      "Benefits of Polymorphism",
      "'Is-A'vs'Has-A' ",
      "Association Vs Aggregation" 

]
  }, 
  {
    id: 13,
    title: 'Package',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "Package and classPath and its use",
      "First look into Packages",
      "Benefits of Packages",
      "Package Creation and Use",
      "First,look into the classPath",
      "ClassPath Setting",
      "Class import",
      "Package import",
      "Role of public,protected,default and private with respect to package",
      "Namespace management",
      "Package vs header file",
      "Creating and Using the sub package",
      "Sources and class File Management"

]
  }, 
  {
    id:14,
    title:'Notes',
    description:"Notes to understand the concept",
    notes:[
      {name:"Java notes",link:'files/java_notes.pdf'}
    ]
  },
{
    id: 15,
    title:"Sources",
    description: 'Resources for further learning',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    chapters: [
      "Java Documentation",
      "Books (Effective Java, Java: The Complete Reference)",
      "Online Courses (Coursera, Udemy, etc.)",
      "YouTube Channels (Java Brains, Telusko)",
      "Community Forums (Stack Overflow, Reddit)"
    ],
    url:[
      "https://docs.oracle.com/javase/tutorial/",
      "https://www.oracle.com/java/technologies/javase/javase-tutorials.html",
      "https://www.coursera.org/specializations/java-programming",
      "https://www.udemy.com/topic/java/",
      "https://www.youtube.com/c/JavaBrainsChannel",
      "https://www.youtube.com/c/Telusko"
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
          <li><Link to="/Java">Syllabus</Link></li>
          <li><Link to="/Javaassign">Assignments</Link></li>
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