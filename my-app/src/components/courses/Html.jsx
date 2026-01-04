import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to HTML',
    description: 'Master the fundamentals of HTML and web page structure',
    details: 'Learn what HTML is, its role in web development, document structure, basic tags, headings, paragraphs, and essential HTML concepts.',
    duration: '2 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/88PXJAA6szs',
    thumbnail: 'https://img.youtube.com/vi/88PXJAA6szs/maxresdefault.jpg',
    chapters: [
    "What is HTML and its role in web development",
    "Structure of an HTML document",
    "Basic tag:<html>,<head>,<body>",
    "Headings(<h1>to<h6>), paragraphs(<p>),line breaks(<br>),horizontal rule(<hr>)",
    "Comments in HTML"
    ],
    resources: [
      { name: 'HTML MDN Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' }
    ]
  },
  {
    id: 2,
    title: 'Text Formatting & Links',
    description: 'Master text formatting and hyperlink creation in HTML',
    details: 'Learn text formatting tags, different types of lists, creating hyperlinks, and navigation elements in HTML.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/0PZZ2vOlkKs',
    thumbnail: 'https://img.youtube.com/vi/0PZZ2vOlkKs/maxresdefault.jpg',
    chapters: [
      "Bold,italic,underline (<b>,<i>,<u>,<strong>,<em>)",
      "Superscript &  subscript(<sup>,<sub>)",
      "Lists:ordered(<ol>), unordered(<ul>), description(<dl>)",
      "Links (<a>): absolute and relative URLs, target attribute",
      "Email and telephone links"
    ],
    resources: [
      { name: 'HTML Links', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a' },
      { name: 'HTML Lists', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul' }
    ]
  },
  {
    id: 3,
    title: 'Images, Multimedia & Tables',
    description: 'Master images, multimedia content, and table creation in HTML',
    details: 'Learn to add images, embed audio and video, create responsive tables, and work with multimedia content in HTML.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
    thumbnail: 'https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg',
    chapters: [
      "Adding images(<img> , attributes like src,alt,width,height)",
      "Image maps",
      "Embedding audio and video(<audio>,<video>",
      "Tables (<table>, <tr>, <td>, <th>, colspan, rowspan, table stylling basics)"
    ],
    resources: [
      { name: 'HTML Images', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img' },
      { name: 'HTML Tables', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' }
    ]
  },
  {
    id: 4,
    title: 'Forms and Input Elements',
    description: 'Master HTML forms and user input collection',
    details: 'Learn to create interactive forms, handle different input types, validate user input, and collect data from users.',
    duration: '3 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/GcFjSPcBj-0',
    thumbnail: 'https://img.youtube.com/vi/GcFjSPcBj-0/maxresdefault.jpg',
    chapters: [
      "Creating forms (<form>)",
      "Input types (text, password, email, number, date, file, etc.)",
      "Labels and placeholders",
      "Dropdowns (<select>, <option>), checkboxes, radio buttons",
      "Buttons (<button>, submit, reset)",
      "Textarea for multiline input"
    ],
    resources: [
      { name: 'HTML Forms', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form' },
      { name: 'Form Validation', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation' }
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