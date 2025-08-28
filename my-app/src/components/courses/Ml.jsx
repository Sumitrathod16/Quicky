import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';

const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Machine Learning',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',

    chapters: [
    "Introduction to machine learning",
      "Performance of measures of classification",
      "Bias-Variance Tradeoff",
      "Regression"
    ]
  },
  {
    id: 2,
    title: 'Bayesian decision Theory',
    description: 'Bayesian Decision Theory',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
  
    chapters: [
       "Bayesian Belief Networks"
    ]
  },
  {
    id: 3,
    title: 'Parametric Approaches and non-parametric approaches',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [
    "Parameter Estimation and Maximum likelihood Estimation",
      "Parameter Estimation and Bayesian Estimation",
      "Concept of non-parametric techniques",
      'Density Estimation by Parzen window',
      "Parzon window and k-nearest neighbor algorithm",
    ]
  },
  {
    id: 4,
    title: 'Perceptron criteria and Discriminative models',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "Linear discriminant Functions and perceptron Criteria",
      "Support Vector Machine"
     ]
  },
  {
    id: 5,
    title: 'Logistic regression ,Decision trees and hidden markov model',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters: [
      "Logisitc Regression ",
      "Decision tree",
      "Hidden Markov Model(HMM)"

    ]
  },
  {
    id: 6,
    title: 'Ensemble Methods',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "Ensemble Classifiers"
    ]
  },
  {
    id: 7,
    title: 'Dimensionality Problems',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Dimensionality Problem and Principal Component analysis",
      "Principal Component analysis",
      "Linear Discriminant analysis"
]
  },
  {
    id: 8,
    title: 'Mixture model and clustering',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Gaussian Mixture Model and EM algorithm",
      "K-means clustering",
]
  },
  {
    id: 9,
    title: 'Clustering',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
       "Fuzzy k-means clustering",
      "Hierarchical Agglomorative clustering and Mean-shift Clustering"

      ]
  },
  {
    id:10,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:'Machine Learning',link:'/files/ml_notes.pdf'}
    ]
  },
{
    id: 11,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "Machine Learning Mastery",
      "Coursera Machine Learning Course",
      "Kaggle Datasets and Competitions",
      "Google AI Blog",
      "YouTube Channels (3Blue1Brown, StatQuest)"
    ],
    url :[
      "https://machinelearningmastery.com/",
      "https://www.coursera.org/learn/machine-learning",
      "https://www.kaggle.com/datasets",
      "https://ai.googleblog.com/",
      "https://www.youtube.com/c/3blue1brown",
      "https://www.youtube.com/c/StatQuest"
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
          <li><Link to="/Ml">Syllabus</Link></li>
          <li><Link to="/Mlassign">Assignments</Link></li>
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