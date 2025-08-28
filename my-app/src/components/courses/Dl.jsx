import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Deep Learning',
    description: 'Fundamental concepts of deep learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
      "What is Deep learning?",
      "Study of neural Networks",
    ]
  },
  {
    id: 2,
    title: 'Artificial Neural Networks',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
  
    chapters: [
      "Artificial Neural Network for pattern classification"
    ]
  },
  {
    id: 3,
    title: 'Introduction to Deep Neural Networks',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',

    chapters: [
      "Introduction to deep learning and convolutional Neural network",
      "Vanishing and Exploding Gradients in Deep Neural Network",
      "CNN architectures-LeNet-5 and AlexNet",
      "CNN architectures-VGG GoogleNet and ResNet"
    ]
  },
  {
    id: 4,
    title: 'Recent Trends in Deep Learning',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Generative Aadversarial Networks(GAN)-Fundamentals and Applications",
      "U-Net:Convolutional  Networks for Image segmentation",
      "Introduction to autoencoders and reecurrent neural network(RNN)"
    ]
  },
  {
    id:5,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:"Deep Learning notes",link:'/files/dl_notes.pdf'}
    ]
  },
  {
    id: 5,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to online courses, books, and articles for deeper understanding.',
    chapters:[
      "Online Courses: Coursera, edX, Udacity",
      "Books: 'Deep Learning' by Ian Goodfellow, 'Neural Networks and Deep Learning' by Michael Nielsen",
      "Research Papers: arXiv.org for latest papers in deep learning"
    ],
    url:[
      "https://www.coursera.org/specializations/deep-learning",
      "https://www.edx.org/professional-certificate/mitx-deep-learning",
      "https://www.udacity.com/course/deep-learning-nanodegree--nd101"
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
          <li><Link to="/Dl">Syllabus</Link></li>
          <li><Link to="/Dlassign">Assignments</Link></li>
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