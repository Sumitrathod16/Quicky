import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';

const syllabusData = [
  {
    id: 1,
    title: 'AWS Fundamentals',
    description: 'Master the core concepts of cloud computing and AWS services',
    details: 'This comprehensive section covers EC2, S3, VPC, and other core AWS infrastructure services with hands-on examples.',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    videoUrl: 'https://www.youtube.com/embed/r4YIdn2vqIg',
    thumbnail: 'https://img.youtube.com/vi/r4YIdn2vqIg/maxresdefault.jpg',
    chapters: [
      "What is AWS? Why use it?",
      "Cloud Computing Models: IaaS, PaaS, SaaS",
      "Cloud Deployment Models: Public, Private, Hybrid, Multi-cloud",
      "AWS Global Infrastructure: Regions, Availability Zones, Edge Locations",
      "AWS Free Tier Overview",
      "Understanding IAM (Identity and Access Management)",
      "Users, Groups, Roles, Policies",
      "AWS CLI and AWS SDK Basics",
      "AWS Console Navigation",
      "Setting up a Free AWS Account securely"
    ],
    resources: [
      { name: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
      { name: 'AWS Free Tier Guide', url: 'https://aws.amazon.com/free/' }
    ]
  },
  {
    id: 2,
    title: 'Compute, Storage & Networking',
    description: 'Deep dive into AWS compute, storage, and networking services',
    details: 'Learn about EC2 instances, S3 storage, VPC networking, and how to build scalable cloud infrastructure.',
    duration: '3.5 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/6E5FhVzQHbM',
    thumbnail: 'https://img.youtube.com/vi/6E5FhVzQHbM/maxresdefault.jpg',
    chapters: [
      "EC2 (Elastic Compute Cloud): Launching, connecting via SSH, AMIs",
      "Security Groups, Key Pairs",
      "EC2 Instance Types & Pricing Models (On-demand, Reserved, Spot)",
      "Auto Scaling and Load Balancing",
      "Elastic Load Balancer (ELB)",
      "Auto Scaling Groups (ASG)",
      "S3 (Simple Storage Service): Buckets, Objects, ACLs, Policies",
      "Versioning, Lifecycle Policies",
      "Static Website Hosting on S3",
      "EBS (Elastic Block Store)",
      "EFS (Elastic File System)",
      "Glacier (for Archival Storage)",
      "VPC (Virtual Private Cloud)",
      "Subnets, Route Tables, Internet Gateways",
      "NAT Gateway, VPC Peering",
      "Security Groups vs NACLs",
      "Elastic IP, VPC Flow Logs",
      "Route 53 (DNS and Domain Management)"
    ],
    resources: [
      { name: 'EC2 Best Practices', url: 'https://aws.amazon.com/ec2/getting-started/' },
      { name: 'VPC Guide', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html' }
    ]
  },
  {
    id: 3,
    title: 'Databases & Serverless',
    description: 'Master AWS database services and serverless computing',
    details: 'Explore RDS, DynamoDB, Lambda functions, and build serverless applications with AWS services.',
    duration: '4 hours',
    difficulty: 'Intermediate',
    videoUrl: 'https://www.youtube.com/embed/8F5kX2xMtVY',
    thumbnail: 'https://img.youtube.com/vi/8F5kX2xMtVY/maxresdefault.jpg',
    chapters: [
      "RDS (Relational Database Service)",
      "MySQL, PostgreSQL, Aurora, etc.",
      "Backups, Multi-AZ, Read Replicas",
      "DynamoDB (NoSQL Key-Value Store)",
      "ElastiCache (Redis/Memcached)",
      "Amazon Redshift (Data Warehousing)",
      "Lambda Functions: Writing your first function",
      "Triggers (S3, API Gateway, EventBridge)",
      "Permissions and Execution Role",
      "API Gateway: Creating and managing REST APIs",
      "Lambda Proxy Integration",
      "Step Functions (Serverless Orchestration)",
      "EventBridge and CloudWatch Events"
    ],
    resources: [
      { name: 'Serverless Best Practices', url: 'https://aws.amazon.com/serverless/' },
      { name: 'DynamoDB Guide', url: 'https://docs.aws.amazon.com/dynamodb/' }
    ]
  },
  {
    id: 4,
    title: 'DevOps, Monitoring & Security',
    description: 'Complete DevOps workflow with AWS monitoring and security',
    details: 'Learn CI/CD pipelines, monitoring, security best practices, and infrastructure as code with AWS.',
    duration: '3 hours',
    difficulty: 'Advanced',
    videoUrl: 'https://www.youtube.com/embed/1M6t9LDyMgs',
    thumbnail: 'https://img.youtube.com/vi/1M6t9LDyMgs/maxresdefault.jpg',
    chapters: [
      "CloudFormation (Infrastructure as Code)",
      "AWS CDK or Terraform (optional advanced)",
      "CodePipeline, CodeDeploy, CodeBuild (CI/CD)",
      "CloudWatch: Logs, Alarms, Metrics, Dashboards",
      "CloudTrail (API call auditing)",
      "AWS Config (Compliance & Resource Tracking)",
      "Secrets Manager & Parameter Store",
      "IAM Best Practices: Principle of Least Privilege",
      "MFA (Multi-Factor Authentication)"
    ],
    resources: [
      { name: 'AWS DevOps Guide', url: 'https://aws.amazon.com/devops/' },
      { name: 'Security Best Practices', url: 'https://aws.amazon.com/architecture/security-identity-compliance/' }
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
    details: 'You\'ll learn about transformers, foundation models, and cutting-edge applications.',

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
            <div className="card-header">
              {item.thumbnail && (
                <div className="video-thumbnail">
                  <img src={item.thumbnail} alt={`${item.title} thumbnail`} />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
              )}
              <div className="card-meta">
                {item.duration && (
                  <span className="duration">
                    <i className="clock-icon">⏱️</i> {item.duration}
                  </span>
                )}
                {item.difficulty && (
                  <span className={`difficulty ${item.difficulty.toLowerCase()}`}>
                    {item.difficulty}
                  </span>
                )}
              </div>
            </div>

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
                  {item.details && <p className="details-text">{item.details}</p>}

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

                  {item.chapters && (
                    <div className="chapters-section">
                      <h4>📚 Chapters Covered</h4>
                      <ul className="chapter-list">
                        {item.chapters.map((chapter, idx) => (
                          <li key={idx}>{chapter}</li>
                        ))}
                      </ul>
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
                    <div className="notes-section">
                      <h4>📄 Download Notes</h4>
                      <ul className="notes-list">
                        {item.notes.map((note, idx) => (
                          <li key={idx}>
                            <a
                              href={note.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="note-link"
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
                    <div className="links-section">
                      <h4>🌐 Useful Links</h4>
                      <ul className="links-list">
                        {item.url.map((link, idx) => (
                          <li key={idx}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-item"
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