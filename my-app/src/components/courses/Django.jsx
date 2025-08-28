import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Django',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
  
    chapters: [
  "Understanding web development frameworks",
     "Introduction to Django and its features",
    "Installing Django and setting up a development environment",
     "Creating a simple Django project and app"
    ]
  },
  {
    id: 2,
    title: 'Django model and Database integration',
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
    title: 'Views and Templates',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [

        "Building views to handle HTTP requests",
      "Creating templates for dynamic HTML generation",
       "Routing and URL patterns in Django",
       "Passing data from views to templates"



    ]
  },
  {
    id: 4,
    title: 'Django Forms',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Creating HTML forms in Django",
      "Form validation and handling form submissions",
       "Customizing form behavior with Django form classes",
       "Integrating forms with models"


    ]
  },
  {
    id: 5,
    title: 'Django admin and panel',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Utilizing the Django admin interface for content management",
      "Customizing the admin panel for specific models",
       "Adding custom actions and filters"

    ]
  },
  {
    id: 6,
    title: 'Authentication and Authorization',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Implementing user authentication in Django",
          "Managing user sessions and passwords",
          "Configuring permissions and authorization"

    ]
  },
  {
    id: 7,
    title: 'Django REST framework',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Introduction to RESTful APIs",
       "Building APIs with Django REST Framework",
       "Serializers, views, and authentication for APIs",
       "Consuming APIs in Django applications"

    ]
  },
  {
    id: 8,
    title: 'Frontend itegration with Django',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Integrating frontend frameworks (e.g., Bootstrap) with Django",
      "Using static files and media in Django projects",
      "AJAX and asynchronous behavior in Django applications"
    

    ]
  },
  {
    id: 9,
    title: 'Testing and Debugging in Django',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "Writing unit tests for Django applications",
      "Debugging techniques and tools",
       "Best practices for testing in Django"
    ]
  },
   {
    id: 10,
    title: 'Deployment and Scaling',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
       "Preparing a Django application for deployment",
      "Choosing a hosting platform (e.g., Heroku, AWS)",
       "Configuring production settings",
        "Scaling Django applications"


    ]
  },
   {
    id: 11,
    title: 'Advanced Topics',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
 "Signals and event handling in Django",
     "Building custom middleware",
      "Caching strategies in Django",
      "Internationalization and localization"

]
  }, 
  {
    id:12,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"Django Notes",link:"/files/django_notes.pdf"}
    ]
  },
  {
    id: 13,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "Django Documentation: https://docs.djangoproject.com/en/stable/",
      "Django REST Framework Documentation: https://www.django-rest-framework.org/",
      "Django Tutorials: https://tutorial.djangogirls.org/",
      "Django Community: https://www.djangoproject.com/community/"      
    ],
    url: [
      "https://docs.djangoproject.com/en/stable/",
      "https://www.django-rest-framework.org/",
      "https://tutorial.djangogirls.org/",
      "https://www.djangoproject.com/community/"
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
          <li><Link to="/Django">Syllabus</Link></li>
          <li><Link to="/Djassign">Assignments</Link></li>
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