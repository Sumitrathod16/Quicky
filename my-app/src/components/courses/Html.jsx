import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to html',
    description: 'Fundamental concepts of HTML',
    details: '',
  
    chapters: [
    "What is HTML and its role in web development",
    "Structure of an HTML document",
    "Basic tag:<html>,<head>,<body>",
    "Headings(<h1>to<h6>), paragraphs(<p>),line breaks(<br>),horizontal rule(<hr>)",
    "Comments in HTML"
    ]
  },
  {
    id: 2,
    title: 'Text Formatting & Links',
    description: 'Understanding text formats and links',
    details: '',
  
    chapters: [
      "Bold,italic,underline (<b>,<i>,<u>,<strong>,<em>)",
      "Superscript &  subscript(<sup>,<sub>)",
      "Lists:ordered(<ol>), unordered(<ul>), description(<dl>)",
      "Links (<a>): absolute and relative URLs, target attribute",
      "Email and telephone links"
    ]
  },
  {
    id: 3,
    title: 'Images, Multimedia & Tables',
    description: 'Exploring images, multimedia and tables in HTML',
    details: '',
    
    chapters: [
      "Adding images(<img> , attributes like src,alt,width,height)",
      "Image maps",
      "Embedding audio and video(<audio>,<video>",
      "Tables (<table>, <tr>, <td>, <th>, colspan, rowspan, table stylling basics)"
    ]
  },
  {
    id: 4,
    title: 'Forms and Input elements',
    description: 'Forms and input elements in HTML',
    details: '',
    
    chapters: [
      "Creating forms (<form>)",
      "Input types (text, password, email, number, date, file, etc.)",
      "Labels and placeholders",
      "Dropdowns (<select>, <option>), checkboxes, radio buttons",
      "Buttons (<button>, submit, reset)",
      "Textarea for multiline input"
    ]
  },
    {
    id: 5,
    title: 'Advanced HTML & Basic Practices',
    description: 'Advanced topics in html',
    details: '',
    
    chapters: [
      "Semantic HTML tags (<header>, <nav>, <section>, <article>, <footer>)",
      "HTML5 APIs (Canvas, Geolocation, Local Storage basics)",
      "Meta tags (charset, viewport, description, keywords)",
      "Iframes (<iframe>)",
      "Accessibility (alt text, ARIA basics)",
      "Best practices for clean and valid HTML"
    ]
  },
  {
    id:6,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"Html notes",link:'/files/html_notes.pdf'}
    ]
  },
  {
    id: 7,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to online courses, books, and articles for deeper understanding.',
    chapters:[
      "Online Courses: Coursera, edX, Udacity",
    "HTML Tutorials: MDN Web Docs, W3Schools",
    "Books: 'HTML and CSS: Design and Build Websites' by Jon Duckett"
       
    ],
    url :[
       // Courses
    "https://www.coursera.org/specializations/html",
    "https://www.edx.org/learn/html5",
    "https://www.udacity.com/course/intro-to-html-and-css--ud001",

    // Tutorials
    "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "https://www.w3schools.com/html/",

    // Book (reference)
    "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189"
      
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
          <li><Link to="/Html">Syllabus</Link></li>
          <li><Link to="/Htmlassign">Assignments</Link></li>
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