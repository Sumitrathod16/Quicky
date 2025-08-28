import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'MongoDB Basics',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers the foundations of  learning, including definitions, types, and how it’s used in modern applications.',

    chapters: [
    "What is MongoDB?",
    "NoSQL vs SQL databases",
    "Documents, Collections, and Databases",
    "BSON vs JSON",
    "Installing MongoDB locally",
    "Using MongoDB Atlas (Cloud MongoDB)",
    "MongoDB Compass (GUI Tool)",
    "Basic MongoDB Shell Commands:",
    "show dbs, use db, show collections,db.collection.insertOne(), insertMany()",
    "db.collection.find(), findOne()",
    "Understanding _id field"
    ]
  },
  {
    id: 2,
    title: ' CRUD Operations',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
  
    chapters: [
    "Create:",
    "insertOne(), insertMany()",
    "Read:",
    "find(), findOne()",
    "Projections (include/exclude fields)",
    "Filtering using query operators ($eq, $gt, $lt, etc.)",
    "Sorting, Limiting, and Skipping results",
    "Update:",
    "updateOne(), updateMany()",
    "$set, $inc, $unset",
    "Upserts (update + insert)",
    "Delete:",
    "deleteOne(), deleteMany()"
        ]
  },
  {
    id: 3,
    title: ' Advanced Querying & Indexing',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',

    chapters: [
    "Query Operators:",
    "$in, $nin, $and, $or, $not, $exists, $regex",
    "Array Queries:",
    "$elemMatch, $size, $all",
    "Embedded Documents and Nested Queries",
    "Aggregation Framework:",
    "$match, $group, $project, $sort, $limit, $lookup",
    "Indexing:",
    "Single Field, Compound, and Text Indexes",
    "Creating and using Indexes",
    "Index Performance (Explain Plan)",
    "Data Modeling Best Practices (embedded vs referenced"  
    ]
  },
  {
    id: 4,
    title: ' MongoDB with Node.js (Mongoose)',
    description: 'Use MongoDB in real-world backend projects',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters: [
    "Introduction to Mongoose ORM",
    "Defining Mongoose Schemas and Models",
    "CRUD operations using Mongoose",
     "Schema Types and Validations",
     "Mongoose Middleware (Pre/Post Hooks)",
     "Relationships in MongoDB (References & Population)",
     "Query Building with Mongoose",
     "Error handling and validation",
     "Connecting MongoDB to Express apps",
     "Environment Variables and Configs with MongoDB URI"
     ]
  },
  {
    id: 5,
    title: '. Production, Security & Tools',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers the foundations of  learning, including definitions, types, and how it’s used in modern applications.',
  
    chapters:[
     "MongoDB Atlas Cloud Setup",
     "Connection URI and Environment Configs",
     "Authentication & Role-Based Access Control",
     "Backup & Restore Databases",
     "Replica Sets and Sharding Basics (High Availability & Scaling)",
     "Database Security Best Practices:",
     "IP Whitelisting",
     "SSL/TLS Encryption",
     "User Roles & Permissions",
     "Monitoring & Performance Tools:",
     "MongoDB Atlas Dashboard",
     "Compass Performance Tab",
     "Data Migration Techniques",
     "Export/Import Data using mongoexport, mongoimport"
    ]
  },
   {
    id:6,
    title:'Notes',
    description:'Notes to understand the concept',
    notes:[
      {name:'MongoDB',link:'/files/mongodb_notes.pdf'}
    ]
   },
  {
    id: 7,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to online courses, books, and articles for deeper understanding.',
    chapters:[
      "Online Courses: MongoDB University, Coursera, Udemy",
      "Books: 'MongoDB: The Definitive Guide', 'Learning MongoDB 4.x'",
      "Documentation: MongoDB Official Docs, Mongoose Docs",
      "Community: MongoDB Forums, Stack Overflow"
    ],
    url:[
      "https://www.mongodb.com/docs/",
      "https://mongoosejs.com/docs/",
      "https://university.mongodb.com/"
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
          <li><Link to="/Monggodb">Syllabus</Link></li>
          <li><Link to="/Mongodbassign">Assignments</Link></li>
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