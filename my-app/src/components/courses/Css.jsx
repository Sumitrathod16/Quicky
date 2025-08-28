import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Deep-Designing',
    description: 'Fundamental concepts of deep learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
  
    chapters: [
      "What is CSS?",
      "Benefits of CSS",
      "Types of CSS:",
      "Inline CSS",
      "Internal CSS",
      "External CSS",
     " CSS Syntax and Rules",
      "CSS Comments"
    ]
  },
  {
    id: 2,
    title: ' Text and Font Styling',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
  
    chapters: [
      "Font families and font stacks", 
      "Font size, weight, and style",
      "Line height and letter spacing",
      "Text alignment",
      "Text decoration",
      "Text transform",
      "Word and letter spacing",
      "Google Fonts"
    ]
  },
  {
    id: 3,
    title: 'Box Model & Layout Basics',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',

    chapters: [
     "Box Model (content, padding, border, margin)",
     "Width, height, and box-sizing",
     "overflow, visibility, and z-index",
     "display values (block, inline, inline-block, none)",
     "Positioning:",
     "static, relative, absolute, fixed, sticky,",
     "top, right, bottom, left"
    ]
  },
  {
    id: 4,
    title: 'Responsive Design & Media',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
     "Viewport and mobile-first approach",
     "Media Queries (syntax, breakpoints)",
     "Responsive units: %, em, rem, vh, vw",
     "Responsive typography and images",
     "Layout strategies (fluid, adaptive, responsive)" 
    ]
  },
  {
    id: 5,
    title: 'Advanced CSS Features & Best Practices',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
     "Transitions and Animations:",
     "transition, @keyframes, animation properties",
     "CSS Variables (Custom Properties)",
     "CSS Functions: calc(), clamp(), var(), min(), max()",
     "CSS architecture:",
     "BEM methodology",
     "DRY and reusable CSS",
     "Preprocessors (SASS/SCSS) – optional",
     "Best practices:",
     "Performance optimization",
     "File organization",
     "Writing maintainable CSS",
     "Modern CSS:",
     "Subgrid",
     "Container queries",
     "Logical properties",
     "New selectors (:has, :is)"  
    ]
  },
  {
    id: 6,
    title: 'Connnetivity and their uses!',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    chapters: [
      "Generative Aadversarial Networks(GAN)-Fundamentals and Applications",
      "U-Net:Convolutional  Networks for Image segmentation",
      "Introduction to autoencoders and reecurrent neural network(RNN)"
    ]
  },
  {
    id: 7,
    title: 'Connnetivity and their uses!',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    chapters: [
      "Generative Aadversarial Networks(GAN)-Fundamentals and Applications",
      "U-Net:Convolutional  Networks for Image segmentation",
      "Introduction to autoencoders and reecurrent neural network(RNN)"
    ]
  },
  {
    id:8,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"Css Notes",link:"/files/Css.pdf"}
    ]
  },
  {
    id: 9,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/CSS",
      "CSS Tricks: https://css-tricks.com/",
      "W3Schools CSS Tutorial: https://www.w3schools.com/css/",
      "FreeCodeCamp CSS Course: https://www.freecodecamp.org/learn/responsive-web-design/basic-css/"
    ],
    url:[
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://css-tricks.com/",
      "https://www.w3schools.com/css/",
      "https://www.freecodecamp.org/learn/responsive-web-design/basic-css/"
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
          <li><Link to="/Css">Syllabus</Link></li>
          <li><Link to="/Cssassign">Assignments</Link></li>
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