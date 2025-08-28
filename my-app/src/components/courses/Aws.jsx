import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: 'AWS Fundamentals',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers EC2, S3, VPC, and other core AWS infrastructure services.',
  
    chapters: [
    "What is AWS? Why use it?",
    "Cloud Computing Models:",
    "IaaS, PaaS, SaaS",   
    "Cloud Deployment Models:",
    "Public, Private, Hybrid, Multi-cloud",
    "AWS Global Infrastructure:",
    "Regions, Availability Zones, Edge Locations",
    "AWS Free Tier Overview",
    "Understanding IAM (Identity and Access Management):",
    "Users, Groups, Roles, Policies",
    "AWS CLI and AWS SDK Basics",
    "AWS Console Navigation",
    "Setting up a Free AWS Account securely"  
    ]
  },
  {
    id: 2,
    title: ' Compute, Storage & Networking',
    description: 'Understanding the architecture and function of ANNs',
    details: '',
    
    chapters: [
      "EC2 (Elastic Compute Cloud):",
      "Launching, connecting via SSH, AMIs",
      "Security Groups, Key Pairs",
      "EC2 Instance Types & Pricing Models (On-demand, Reserved, Spot)",
      "Auto Scaling and Load Balancing:",
      "Elastic Load Balancer (ELB)",
      "Auto Scaling Groups (ASG)",
      "S3 (Simple Storage Service)",
      "Buckets, Objects, ACLs, Policies",
      "Versioning, Lifecycle Policies",
      "Static Website Hosting on S3" ,
      "EBS (Elastic Block Store)",
      "EFS (Elastic File System)",
      "Glacier (for Archival Storage)",
      "VPC (Virtual Private Cloud)",
      "Subnets, Route Tables, Internet Gateways",
      "NAT Gateway, VPC Peering",
      "Security Groups vs NACLs",
      "Elastic IP, VPC Flow Logs",
      "Route 53 (DNS and Domai Management)"
    ]
  },
  {
    id: 3,
    title: ' Databases & Serverless',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [
   "RDS (Relational Database Service)",
    "MySQL, PostgreSQL, Aurora, etc.",
    "Backups, Multi-AZ, Read Replicas",
    "DynamoDB (NoSQL Key-Value Store)",
    "ElastiCache (Redis/Memcached)",
    "Amazon Redshift (Data Warehousing)",
    "Lambda Functions:",
    "Writing your first function",
    "Triggers (S3, API Gateway, EventBridge)",
    "Permissions and Execution Role",
    "API Gateway:",
    "Creating and managing REST APIs",
    "Lambda Proxy Integration",
    "Step Functions (Serverless Orchestration)",
    "EventBridge and CloudWatch Events  "
    ]
  },
  {
    id: 4,
    title: 'DevOps, Monitoring & Security',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
    "CloudFormation (Infrastructure as Code)",
    "AWS CDK or Terraform (optional advanced) ",
    "CodePipeline, CodeDeploy, CodeBuild (CI/CD)",
    "CloudWatch",
    "Logs, Alarms, Metrics, Dashboards",
    "CloudTrail (API call auditing)",
    "AWS Config (Compliance & Resource Tracking)",
    "Secrets Manager & Parameter Store",
    "IAM Best Practices:",
    "Principle of Least Privilege",
    "MFA (Multi-Factor Authentication)"  
    ]
  },
  {
    id: 5,
    title: 'Notes',
    description: 'Notes to understand the concept',
    notes: [
       { name: "Aws Notes", link: "/files/Aws_notes.pdf" },
    ],
  },
  {
    id:6,
    title:'Sources',
    description: 'Resources for further learning',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',

    chapters:[
      "AWS Documentation",
      "AWS Training and Certification",
      "Online Courses (Coursera, Udemy, etc.)",
      "AWS Blogs and Whitepapers",
      "YouTube Channels (AWS Official, FreeCodeCamp, etc.)"
    ],
    url: [
      "https://aws.amazon.com/training/",
      "https://aws.amazon.com/documentation/",
      "https://aws.amazon.com/blogs/",
      "https://www.youtube.com/c/AmazonWebServices"
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
          <li><Link to="/Aws">Syllabus</Link></li>
          <li><Link to="/Awsassign">Assignments</Link></li>
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