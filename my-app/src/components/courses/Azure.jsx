import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: ' Azure Core Services & Infrastructure',
    description: 'Fundamental concepts of deep learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
    "Compute: Virtual Machines, App Services, Functions, Container Instances, AKS (Kubernetes)",
    "Networking: Virtual Network (VNet), Load Balancer, VPN Gateway, Azure DNS, Traffic Manager, Application Gateway",
    "Storage: Blob Storage, File Storage, Disk Storage, Queue & Table Storage",
    "Databases: Azure SQL, Cosmos DB, MySQL, PostgreSQL, Database Migration"  
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: 'Identity, Security & Governance',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
  
    chapters: [
      "Azure Active Directory (Azure AD): Identity management, Conditional Access, MFA",
      "Role-Based Access Control (RBAC), Policies, Blueprints",
      "Security Services: Microsoft Defender for Cloud, Sentinel (SIEM), Key Vault, Firewall, Security Center",
      "Compliance & Governance: Azure Policy, Resource Locks, Management Groups"
    ]
  },
  {
    id: 3,
    title: ' Application Development & DevOps',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
  
    chapters: [
    "App Services: Web Apps, API Apps, Logic Apps",
    "Serverless: Azure Functions, Event Grid, Service Bus",
    "DevOps Tools: Azure DevOps, GitHub Actions, Pipelines, Repos, Boards",
    "Monitoring & Diagnostics: Application Insights, Log Analytics, Azure Monitor"  
    ]
  },
  {
    id: 4,
    title: ' Data, AI & Analytics',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters: [
    "Data Services: Azure Synapse Analytics, Data Factory, Data Lake, Stream Analytics",
    "AI & Machine Learning: Azure Machine Learning, Cognitive Services, Bot Service",
    "Big Data & IoT: HDInsight, Azure Databricks, IoT Hub, Time Series Insights  "
    ]
  },
  {
    id: 5,
    title: 'Notes',
    description: 'Notes to understand the concept',
    notes:[
      {name:'Azure notes',link:'/files/Azure_notes.pdf'}
    ]
  },
  {
    id: 6,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters:[
      "Microsoft Learn: https://learn.microsoft.com/en-us/training/",
      "Azure Documentation: https://docs.microsoft.com/en-us/azure/",
      "Azure Blog: https://azure.microsoft.com/en-us/blog/",
      "Azure YouTube Channel: https://www.youtube.com/user/windowsazure",
    ],
    url:[
      "https://learn.microsoft.com/en-us/training/",
      "https://docs.microsoft.com/en-us/azure/",
      "https://azure.microsoft.com/en-us/blog/",
      "https://www.youtube.com/user/windowsazure"
    
      
    ]
  }
];

const Syllabus = () => {
  const [openId, setOpenId] = useState(null);

  const toggleInfo = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
     
      <div className="main-container">
        <aside className="sidebar">
          <h2>Syllabus</h2>
          <ul>
            <li><Link to="/Azure">Syllabus</Link></li>
            <li><Link to="/Azureassign">Assignment</Link></li>
          
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
                    <p>{item.details}</p>
                    <ul className="chapter-list">
                      {item.chapters.map((chapter, idx) => (
                        <li key={idx}>{chapter}</li>
                      ))}
                    </ul>
                    {item.notes && (
                      <div style={{ marginTop: "10px" }}>
                        <a
                          href={item.notes}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#4f46e5", textDecoration: "underline" }}
                        >
                          Download Notes
                        </a>
                  </div>
                )}
                {item.url && Array.isArray(item.url) && (
                  <div style={{marginLeft:"20px", marginTop: "10px" }}>
                    <strong>Useful Links:</strong>
                    <ul>
                      {item.url.map((url, idx) => (
                        <li key={idx}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#4f46e5", textDecoration: "none" }}
                          >
                            {url}
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
    </>
  );
};

export default Syllabus;