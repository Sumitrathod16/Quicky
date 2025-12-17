import React from 'react';
import { Link } from 'react-router-dom';
import htmlIcon from '../../assets/html.svg'; // Assuming you have an HTML icon
import CSS from '../../assets/css.svg'; // Assuming you have a CSS icon
import js from '../../assets/js.svg'; // Assuming you have a JavaScript icon
import nodeIcon from '../../assets/nodejs.svg'; // Assuming you have a Node.js icon
import ReactIcon from '../../assets/react.svg'; // Assuming you have a React icon
import MongodbIcon from '../../assets/mongodb.svg'; // Assuming you have a MongoDB icon
import AWSIcon from '../../assets/aws.svg'; // Assuming you have an AWS icon
import AzureIcon from '../../assets/azure.svg'; // Assuming you have an Azure icon
import GcpIcon from '../../assets/gcp.svg'; // Assuming you have a GCP icon
import FlutterIcon from '../../assets/flutter.svg'; // Assuming you have a Flutter icon
import PythonIcon from '../../assets/python.svg'; // Assuming you have a Python icon
import DjangoIcon from '../../assets/django.svg'; // Assuming you have a Django icon
import FlaskIcon from '../../assets/flask.svg'; // Assuming you have a Flask icon
import JavaIcon from '../../assets/java.svg'; // Assuming you have a Java icon
import SpringIcon from '../../assets/spring.svg'; // Assuming you have a Spring icon
import HibernateIcon from '../../assets/hibernate.svg'; // Assuming you have a Hibernate icon
import MLIcon from '../../assets/ml.svg'; // Assuming you have a Machine Learning icon
import DeepLearningIcon from '../../assets/dl.svg'; // Assuming you have a Deep Learning
import AIIcon from '../../assets/ai.svg'; // Assuming you have an AI icon
import SQL from '../../assets/sql.svg';
function Explore(){
return(
    <>
    <style>
        {`
:root {
  --color-gray-50: #f9fafb;
  --color-gray-300: #d1d5db;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-white: #ffffff;
  --color-blue-600: #2563eb;
}

body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background-color: var(--color-gray-50);
            color: var(--color-gray-800);
        }

        /* --- Main Container & Header --- */
        .container {
            max-width: 72rem; /* 1152px */
            margin-left: auto;
            margin-right: auto;
            padding: 2rem 1rem; /* 32px 16px */
        }

        .header-text {
            text-align: center;
            margin-bottom: 3rem; /* 48px */
        }

        .header-text h1 {
            font-size: 2.25rem; /* 36px */
            font-weight: 800;
            color: var(--color-gray-800);
            margin-bottom: 0.5rem; /* 8px */
        }

        .header-text p {
            color: var(--color-gray-500);
            margin: 0;
        }

        /* --- Card Grid Layout --- */
        .card-grid {
            display: grid;
            border-radius: 0.75rem;
            gap: 2rem; /* 32px */
            grid-template-columns: 1fr; /* Default to 1 column on small screens */
        }
        .card-grid .hover {
            transition:  ease-in-out;
             color:black;
             drop-shadow: 0 0 10px black;
            }
        /* Responsive grid columns for 3x3 layout */
        @media (min-width: 768px) { /* md */
            .card-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* --- Individual Card Styling --- */
        .card {
            position: relative;
            background-color: var(--color-white);
            padding: 1.5rem; /* 24px */
            border-radius: 0.75rem; /* 12px */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease-in-out;
            overflow: hidden;
            height: 14rem; /* 224px */
            display: flex;
            flex-direction: column;

        }

        .card:hover {
            box-shadow: 15px 10px 15px 10px rgba(0, 0, 0, 0.1);
        }

        /* Decorative background circle */
        .card-bg {
            position: absolute;
            top: -3rem; /* -48px */
            right: -3rem; /* -48px */
            width: 12rem; /* 192px */
            height: 12rem; /* 192px */
            border-radius: 9999px; /* full circle */
            opacity: 0.5;
        }
        
        /* Card Content Wrapper */
        .card-content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap:10px;
            height: 100%;
            margin-right:20px;
        
        }

        .card-title {
            font-size: 1.5rem; /* 24px */
            font-weight: 700;
            color: var(--color-gray-800);
            margin: 0 0 0.75rem 0; /* 12px */
        }

        .card-tags ul  {
            display: flex;
            flex-direction: row;
            gap: 0.5rem; /* 8px */
            flex-wrap: wrap;
            gap: 0.5rem; /* 8px */
            margin-bottom: 1rem; /* 16px */
            text-decoration: none;

        }

        .card-tags .tag {
            font-size: 0.75rem; /* 12px */
            font-weight: 500;
            color: var(--color-gray-600);
            background-color: var(--color-white);
            border: 1px solid var(--color-gray-300);
            border-radius: 9999px;
            padding: 0.25rem 0.75rem; /* 4px 12px */
            align-items:flex-end;
            display: inline-flex;
        
        
        }
            .card-tags ul li {
            margin-right: 0.5rem; /* 8px */
            margin-bottom: 0.5rem; /* 8px */
            font-size: 0.875rem; /* 14px */
            font-weight: 500;
            color: var(--color-gray-700);
            
            list-style:none;
        
        }
            .card-tags ul li a {
            color: var(--color-gray-700);
            text-decoration: none;
            font-weight: 600;
        }
            .card-tags ul li a:hover {
            text-decoration: underline;
            
            background-color:  #e0e0e0;;
            border-radius: 0.25rem; /* 4px */
            cursor: pointer;
            transform: scale(1.05);
            transition: transform 0.2s ease-in-out;

        }

        /* Explore Link */
        .card-explore-link {
            margin-top: auto; /* Pushes to the bottom */
            display: flex;
            align-items: center;
            color: var(--color-gray-700);
            font-weight: 600;
            text-decoration: none;
        }
        
        .card-explore-link .arrow-icon {
            margin-left: 0.5rem; /* 8px */
            width: 1.25rem; /* 20px */
            height: 1.25rem; /* 20px */
            transition: transform 0.3s ease-in-out;
        }

        .card-explore-link:hover .arrow-icon {
            transform: translateX(0.25rem); /* 4px */
        }

        /* Icon on the right */
        .card-icon {
            position: absolute;
            top: 50%;
            right: 1.5rem; /* 24px */
            transform: translateY(-50%);
            z-index: 10;
        }
            .img{
                          padding: 5px;
                            display: flex;
                            flex-direction: row;
                            gap: 10px;
                            max-width: 600px;
                            justify-content: space-evenly;
                            align-items: center;
                            margin-top: 20px;
                            margin-right: 150px;
            }
        .Explore-icon {
            width: 60px; /* 60px */
            height: 60px; /* 60px */
            border-radius: 50%;
            margin-right:20px;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
        }
            .Explore-icon:hover{
            transform:scale(1.1);
            }
            .Explore-icon:active{
            transform:scale(0.9);
            }
@media (max-width: 768px) {
  .card-grid {
    gap: 1rem; /* smaller gap on mobile */
  }

  .card {
    height: auto;           /* let content decide height */
    padding: 1rem;          /* less padding */
  }

  .card-title {
    font-size: 1.2rem;      /* smaller headings */
  }

  .card-tags ul li {
    font-size: 0.8rem;
  }

  .img {
    margin: 10px auto 0 auto; /* center icons on mobile */
    flex-wrap: wrap;          /* icons wrap if screen is too small */
    justify-content: center;
  }

  .Explore-icon {
    width: 45px;   /* shrink icons */
    height: 45px;
    margin: 5px;
  }

  .header-text h1 {
    font-size: 1.75rem; /* smaller hero heading */
  }

  .header-text p {
    font-size: 0.9rem;
    padding: 0 10px; /* add breathing room */
  }
}

    `}
    </style>


    <div className="container">

        <div className="header-text">
            <h1>Explore Our Courses</h1>
            <p>Preparing students for different coding languages. Scroll down to find the one you are preparing for</p>
        </div>
        

        <div className="card-grid">
        
            <div className="card">
                <div className="card-bg bg-red"></div>
                <div className="card-content">
                    <h3 className="card-title">Frontend Developer</h3>
                    <div className="card-tags">
                    <ul>
                         <li> <Link to="/HTML">HTML</Link></li>
                         <li> <Link to="/CSS">CSS</Link></li>
                         <li> <Link to="/JavaScript">JavaScript</Link></li>
                    </ul> 
                   </div> 
                </div>
                <div className="img">
                    <img src={htmlIcon} alt="HTML" className="Explore-icon" />
                    <img src={CSS} alt="CSS" className="Explore-icon" />
                    <img src={js} alt="JavaScript" className="Explore-icon" />
                </div>
                </div>

        
            <div className="card">
                <div className="card-bg bg-orange"></div>
                <div className="card-content">
                    <h3 className="card-title">Backend Developer</h3>
                   <div className="card-tags">
                    <ul>
                            <li> <Link to="/NodeJS">NodeJS</Link></li>
                            <li> <Link to="/ReactJS">ReactJS</Link></li>
                            <li> <Link to="/MongoDB">MongoDB</Link></li>
                    </ul>
                   </div> 
                </div>   
                <div className="img">
                    <img src={nodeIcon} alt="Node js" className="Explore-icon" />
                    <img src={ReactIcon} alt="React js" className="Explore-icon" />
                    <img src={MongodbIcon} alt="Mongodb" className="Explore-icon" />
                </div>
            </div>


            <div className="card">
                <div className="card-bg bg-yellow"></div>
                <div className="card-content">
                    <h3 className="card-title">Cloud-Computing</h3>
                    <div className="card-tags">
                        <ul>
                            <li> <Link to="/AWS">AWS</Link></li>
                            <li> <Link to="/Azure">Azure</Link></li> 
                            <li> <Link to="/GCP">GCP</Link></li>
                        </ul>
</div>
                                   </div>
    <div className="img">
        <img src={AWSIcon} alt="AWS" className="Explore-icon" />
        <img src={AzureIcon} alt="Azure" className="Explore-icon" />
        <img src={GcpIcon} alt="GCP" className="Explore-icon" />
    </div>
     </div>
            <div className="card">
                <div className="card-bg bg-indigo"></div>
                <div className="card-content">
                    <h3 className="card-title">Flutter</h3>
                   <div className="card-tags">
                    <ul>
                            <li> <Link to="/Flutter">Flutter</Link></li>
                
                    </ul>
                    </div>
                 </div>
                 
                <div className="img">
                    <img src={FlutterIcon} alt="Flutter" className="Explore-icon" />
            </div>
            </div>

            
            <div className="card">
                <div className="card-bg bg-blue"></div>
                <div className="card-content">
                    <h3 className="card-title">Python</h3>
                  <div className="card-tags">
                    <ul>
                            <li> <Link to="/Python">Python</Link></li>
                            <li> <Link to="/Django">Django</Link></li>
                            <li> <Link to="/Flask">Flask</Link></li>
                    </ul>
                   </div>
                   </div>
                <div className="img">
                    <img src={PythonIcon} alt="Python" className="Explore-icon" />
                    <img src={DjangoIcon} alt="Django" className="Explore-icon" />
                    <img src={FlaskIcon} alt="Flask" className="Explore-icon" />
                    </div>            </div>

            
            <div className="card">
                <div className="card-bg bg-gray"></div>
                <div className="card-content">
                    <h3 className="card-title">Java</h3>
                    <div className="card-tags">
                    <ul>
                        <li> <Link to="/Java">Java</Link></li>
                        <li> <Link to="/Spring">Spring</Link></li>
                        <li> <Link to="/Hibernate">Hibernate</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="img">
                    <img src={JavaIcon} alt="Java" className="Explore-icon" />
                    <img src={SpringIcon} alt="Spring" className="Explore-icon" />
                    <img src={HibernateIcon} alt="Hibernate" className="Explore-icon" />
</div>

            </div>

            
            <div className="card">
                 <div className="card-bg bg-teal"></div>
                 <div className="card-content">
                    <h3 className="card-title">Machine Learning</h3>
                    <div className="card-tags">
                    <ul>
                        <li> <Link to="/Ml">ML</Link></li>
                        <li> <Link to="/Dl">Deep Learning</Link></li>
                        <li> <Link to="/AI">AI</Link></li>
                    </ul>
                    </div>
                 </div>
                <div className="img">
                    <img src={MLIcon} alt="Machine Learning" className="Explore-icon" />
                    <img src={DeepLearningIcon} alt="Deep Learning" className="Explore-icon" />
                    <img src={AIIcon} alt="AI" className="Explore-icon" />
                        </div>
            </div>

            
            <div className="card">
                <div className="card-bg bg-purple"></div>
                <div className="card-content">
                    <h3 className="card-title">Base languages</h3>
                    <div className="card-tags">
                    <ul>
                        <li> <Link to="/C">C</Link></li>
                        <li> <Link to="/C++">C++</Link></li>
                        <li> <Link to="/Php">PHP</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
<div className="card">
                <div className="card-bg bg-pink"></div>
                <div className="card-content">
                    <h3 className="card-title">Projects</h3>
                    <div className="card-tags">
                    <ul>
                        <li> <Link to="/DBMS">DBMS</Link></li>
                        <li> <Link to="/SQL">SQL</Link></li>
                        
                    </ul>
                    </div>                   
                </div>
                <div className="img">
                    <img src={SQL} alt="DBMS" className="Explore-icon" />
                    <img src={SQL} alt="SQL" className="Explore-icon" />
                    
            </div>
</div>
        </div>
    </div>
    </>
);
}
export default Explore;